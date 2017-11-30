import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {AudioPlayer, Loop, Stage, KeyListener, World, TileMap, Body} from 'react-game-kit';
import myTileMaps from './myTileMaps'


class GameCanvas extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{width: '200px', height: '200px'}}>
				<Loop>
					<Stage style={{background: '#3a9bdc'}} width={200} height={200}>
						<World>
							<TileMap
								style={{top: 0}}
								src="assets/grassTile.png"
								tileSize={20}
								columns={5}
								rows={5}
								renderTile={(tile, src, styles) => {
									return <img style={styles} src={src}/>;
								}}
								width={200}
								height={200}
								layers={[
									myTileMaps.grass,
								]}
							/>
							<TileMap
								style={{top: 0}}
								src="assets/sandTile.png"
								tileSize={20}
								columns={5}
								rows={5}
								renderTile={(tile, src, styles) => {
									return <img style={styles} src={src}/>;
								}}
								width={200}
								height={200}
								layers={[
									myTileMaps.sand,
								]}
							/>
						</World>
					</Stage>
				</Loop>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCanvas);


