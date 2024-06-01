import { WIN_PATTERNS } from '../constants/WIN_PATTERNS';

export const checkWinner = (currentField, player) => {
	return WIN_PATTERNS.some((pattern) => pattern.every((index) => currentField[index] === player));
};

export const chekDarw = (field) => {
	return field.every((cell) => cell);
};
