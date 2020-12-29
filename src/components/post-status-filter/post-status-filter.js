import React, {Component} from 'react';
import { Button } from 'reactstrap';

import './post-status-filter.scss'

export default class PostStatusFilter extends Component{
	buttons = [
		{name: 'all', label: 'Все'},
		{name: 'like', label: 'Понравились'},
	]

	render() {
		const {filter, onFilterSelect} = this.props;
		const buttons = this.buttons.map( ({name, label}) => {
			const active = filter === name;
			const color = active ? 'info' : 'outline-secondary';
			return (
				<Button
					key={name}
					color={color}
					onClick={() => onFilterSelect(name)}
				>{label}</Button>
			)
		});
		return (
			<div className={`btn-group`}>
				{buttons}
			</div>
		)
	}
}