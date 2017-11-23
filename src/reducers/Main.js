import immutable from 'immutable';
import Constants from '../Constants';
import Lib from './ReducerLib';

export default function (state, action) {
	switch (action.type) {
		case Constants.RUN_CODE:
			Lib.compile(action.code);

			return state;
		default:
			return state;

	}
}

