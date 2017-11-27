import immutable from 'immutable';
import Elements from './Elements'

export default {

	runCommand(world, commandAsArray) {
		const [entity, command, target, secondTarget] = commandAsArray;
		world = this['command_' + command](world, entity, target, secondTarget);
		return world;

	},

	command_is(world, entity, target) {
		return world.set(entity, target);
	},
	command_in(world, entity, target) {
		return world.setIn([entity, 'position'], world.getIn([target, 'position']));
	},
	command_at(world, entity, target) {
		return world.setIn([entity, 'position'], world.getIn([target, 'position']));
	},
	command_has(world, entity, target) {
		return world.updateIn([entity, 'inventory'], inventory => inventory.push(world.get(target)));
	},
	command_unlocks(world, entity, target) {
	},

	command_go(world, entity, target) {
		return world.setIn([entity, 'position'], target.get('position'));
	},
	command_use(world, entity, target, secondTarget) {
	},
	command_attack(world, entity, target) {
	},
	command_when(condition, commands) {
	},

}

