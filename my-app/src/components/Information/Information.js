import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';

class Information extends Component {
	render() {
		const { currentPlayer, isGameEnded, isDraw } = this.props;
		let status;

		if (isDraw) {
			status = 'Ничья';
		} else if (isGameEnded) {
			status = `Победа: ${currentPlayer}`;
		} else {
			status = `Ходит: ${currentPlayer}`;
		}

		return <InformationLayout status={status} />;
	}
}

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
	isDraw: state.isDraw,
});

export default connect(mapStateToProps)(Information);
