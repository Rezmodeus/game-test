import Constants from '../Constants';

export default {
	runCode(code) {
		return {
			type: Constants.RUN_CODE,
			code
		};
	},
}

