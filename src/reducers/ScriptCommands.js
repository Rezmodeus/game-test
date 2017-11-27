import immutable from 'immutable';
import Elements from './Elements'

export default {

	runCommand(world, commandAsArray, elements) {
		const [entity, command, target, secondTarget] = commandAsArray;
		world = this['command_' + command](world, elements, entity, target, secondTarget);
		return world;
	},

	command_is(world, elements, entity, target) {

		return world.set(entity, immutable.fromJS(elements.get(target)));
	},
	command_in(world, elements, entity, target) {
		return world;
		return world.setIn([entity, 'position'], world.getIn([target, 'position']));
	},
	command_at(world, elements, entity, target) {
		return world;
		return world.setIn([entity, 'position'], world.getIn([target, 'position']));
	},
	command_has(world, elements, entity, target) {
		return world;
		return world.updateIn([entity, 'inventory'], inventory => inventory.push(world.get(target)));
	},
	command_unlocks(world, elements, entity, target) {
		return world;
	},

	command_go(world, elements, entity, target) {
		return world;
		return world.setIn([entity, 'position'], target.get('position'));
	},
	command_use(world, elements, entity, target, secondTarget) {
		return world;
	},
	command_attack(world, elements, entity, target) {
		return world;
	},

}

