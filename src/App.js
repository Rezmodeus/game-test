import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Actions from './actions/Actions';
import GameCanvas from './components/GameCanvas.react'
import {
	FormGroup, ControlLabel, FormControl, Button, ButtonToolbar, ButtonGroup,
	Grid, Row, Col, Image

} from 'react-bootstrap';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputRef: null,
		};
		this.compile = this.compile.bind(this);
		this.save = this.save.bind(this);
		this.reset = this.reset.bind(this);
	}

	componentDidMount() {
		const prevCode = localStorage.getItem('savedCode');
		if (prevCode) {
			ReactDOM.findDOMNode(this.refs.codeArea).value = prevCode;
		}
	}

	getCode() {
		const elem = ReactDOM.findDOMNode(this.refs.codeArea);
		return elem.value;
	}

	reset() {
		ReactDOM.findDOMNode(this.refs.codeArea).value = '';
	}

	save() {
		localStorage.setItem('savedCode', this.getCode());
	}

	compile() {
		this.props.runCode(this.getCode())
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

				<Grid>
					<Row className="show-grid">
						<Col xs={9} md={6}>
							<FormGroup controlId="formControlsTextarea" style={outerStyle}>
								<ControlLabel>code</ControlLabel>
								<FormControl
									autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
									style={innerStyle}
									ref="codeArea"
									componentClass="textarea"
									placeholder="code area"/>
							</FormGroup>
							<ButtonToolbar>
								<ButtonGroup>
									<Button bsStyle="danger" onClick={this.reset}>reset</Button>
									<Button bsStyle="success" onClick={this.save}>save</Button>
								</ButtonGroup>
								<Button bsStyle="primary" onClick={this.compile}>compile</Button>
							</ButtonToolbar>

						</Col>
						<Col xs={9} md={6}>

							<GameCanvas/>

						</Col>
					</Row>
				</Grid>
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


