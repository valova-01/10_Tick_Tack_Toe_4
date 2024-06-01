import { Component } from 'react';
import { connect } from 'react-redux';
import { GameLayout } from './GameLayout';
import { reset } from '../../action';

class Game extends Component {
	handleRestart = () => {
		this.props.reset();
	};

	render() {
		return <GameLayout handleRestart={this.handleRestart} />;
	}
}

const mapDispatchToProps = {
	reset,
};

export default connect(null, mapDispatchToProps)(Game);
