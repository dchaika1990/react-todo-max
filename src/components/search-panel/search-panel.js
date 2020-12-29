import React, {Component} from 'react';
import './search-panel.scss'

export default class SearchPanel extends Component{
	state = {
		term: ''
	}

	onUpdateSearch = (e) => {
		const term = e.target.value.toLowerCase();
		this.setState({term})
		this.props.onUpdateTerm(term)
	}

	render() {
		return (
			<input
				type="text"
				className="form-control search-input"
				placeholder="Поиск по записям"
				onChange={this.onUpdateSearch}
			/>
		)
	}
}