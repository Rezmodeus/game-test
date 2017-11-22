import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Actions from './actions/Actions';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputRef: null,
		};
		this.compile = this.compile.bind(this);
	}

	compile() {
		// console.log('compile', this.refs.codeArea.value);
		const elem = ReactDOM.findDOMNode(this.refs.codeArea);
		console.log(elem.value)
		this.props.runCode(elem.value)
	}

	render() {

		const outerStyle = {
			paddingLeft: '10px',
			width: '50%',
		};

		const innerStyle = {
			height: '300px'
		};

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<FormGroup controlId="formControlsTextarea" style={outerStyle}>
					<ControlLabel>code</ControlLabel>
					<FormControl
						style={innerStyle}
						ref="codeArea"
						componentClass="textarea"
						placeholder="code area"/>
				</FormGroup>
				<Button bsStyle="primary" onClick={this.compile}>compile</Button>
				<Button bsStyle="warning">reset</Button>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {
		state: state,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		runCode: (code) => dispatch(Actions.runCode(code)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


