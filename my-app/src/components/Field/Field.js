import { Component } from 'react';
import { connect } from 'react-redux';
import FieldLayout from './FieldLayout';
import { checkWinner, chekDarw } from '../../utils/utils.js';
import { setCurrentPlayer, setGameEnded, setDraw, setField } from '../../action';

class Field extends Component {
	handleCellClick = (index) => {
		const { field, currentPlayer, isGameEnded, setField, setGameEnded, setDraw, setCurrentPlayer } = this.props;
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);
			if (checkWinner(newField, currentPlayer)) {
				setGameEnded();
			} else if (chekDarw(newField)) {
				setDraw();
				setGameEnded();
			} else {
				setCurrentPlayer();
			}
		}
	};

	render() {
		return <FieldLayout onCellClick={this.handleCellClick} />;
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

const mapDispatchToProps = {
	setCurrentPlayer,
	setGameEnded,
	setDraw,
	setField,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
