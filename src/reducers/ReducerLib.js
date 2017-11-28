import immutable from 'immutable';
import ScriptCommands from './ScriptCommands'
import Elements from './Elements'

export default {

	getLines(codeStr) {
		return codeStr.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0 && line.substring(0, 2) !== '//')
			.map(line => line.split('.'));

	},

	reservedWords: ['when', 'end'],

	getObjectWithKeys(lines) {
		return lines.reduce((obj, line) => {
			const word0 = line[0];
			if (this.reservedWords.indexOf(word0) > -1) {
				// reserved word, do not add
				return obj;
			} else if (!obj[word0]) {
				obj[word0] = {};
			}
			return obj
		}, {});
	},

	runCommands(world, elements, codeStr) {
		const lines = this.getLines(codeStr);
		for (let i = 0; i < lines.length; i++) {
			let line = lines[i];
			if (line[0] === 'when') {
				const eventName = line.slice(1).join('.');
				let eventList = [];
				i++;
				while (lines[i][0] !== 'end' && i < lines.length) {
					eventList.push(lines[i].join('.'));
					i++;
				}
				world = world.set(eventName, immutable.fromJS(eventList))
				continue;
			}
			world = ScriptCommands.runCommand(world, line, elements);
		}
		console.log(world.toJS())
	},

	compile(codeStr) {

		// init world

		// const lines = this.getLines(codeStr);
		// console.log('lines', lines);
		// const obj = this.getObjectWithKeys(lines);
		// console.log('obj', obj);
		// const world = immutable.fromJS(obj);
		const world = immutable.Map();

		this.runCommands(world, Elements, codeStr);

	},

	getEvents(codeStr) {
		return codeStr.split('\n').reduce((obj, line) => {
			const lineArr = line.trim().split('.');
			const [entity, command, ...data] = lineArr;
			switch (entity) {
				case 'when':
					obj.eventName = lineArr.slice(1).join('.');
					obj.eventList = [];
					break;
				case 'end':
					obj.result[obj.eventName] = [...obj.eventList];
					obj.eventName = '';
					break;
				default:
					if (obj.eventName) {
						obj.eventList.push(line.trim());
					}
					break;
			}
			return obj;

		}, {eventName: '', eventList: [], result: {}}).result;


	}

}

