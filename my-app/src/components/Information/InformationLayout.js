import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		const { status } = this.props;
		return (
			<div className="information-layout">
				<div className="information">{status}</div>
			</div>
		);
	}
}

InformationLayout.propTypes = {
	status: PropTypes.node.isRequired,
};
