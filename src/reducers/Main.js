import immutable from 'immutable';
import Constants from '../Constants';

export default function (state, action) {
	switch (action.type) {
		case Constants.RUN_CODE:
			return state;
		default:
			return state;

	}
}

