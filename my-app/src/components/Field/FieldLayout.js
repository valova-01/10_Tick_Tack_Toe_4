import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FieldLayout extends Component {
	render() {
		const { field, onCellClick } = this.props;
		return (
			<div className="field-layout">
				<div className="field-wrapper">
					<div className="field">
						{field.map((cell, index) => (
							<button key={index} onClick={() => onCellClick(index)}>
								{cell}
							</button>
						))}
					</div>
				</div>
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	field: state.field,
});

export default connect(mapStateToProps)(FieldLayout);
