import { Component } from 'react';
import PropTypes from 'prop-types';
import Information from '../Information/Information';
import Field from '../Field/Field';

export class GameLayout extends Component {
	render() {
		const { handleRestart } = this.props;
		return (
			<div className="game-layout">
				<Information />
				<Field />
				<div className="restartButton">
					<button onClick={handleRestart}>Начать заново</button>
				</div>
			</div>
		);
	}
}

GameLayout.propTypes = {
	handleRestart: PropTypes.func.isRequired,
};
