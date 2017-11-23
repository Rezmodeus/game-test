import immutable from 'immutable';
import ScriptCommands from './ScriptCommands'

export default {

	getLines(codeStr) {
		return codeStr.split('\n')
			.map(line => line.trim())
			.filter(line => line.length > 0)
			.map(line => line.split('.'));

	},

	getObjectWithKeys(lines) {
		const reservedWords = ['end'];
		return lines.reduce((obj, line) => {
			const word0 = line[0];
			if (reservedWords.indexOf(word0) > -1) {
				// reserved word, do not add
				return obj;
			} else if (!obj[word0]) {
				obj[word0] = {};
			}
			return obj
		}, {});
	},

	compile(codeStr) {
		const lines = this.getLines(codeStr);
		console.log('lines', lines);
		const obj = this.getObjectWithKeys(lines);
		console.log('obj', obj);
	},

}

