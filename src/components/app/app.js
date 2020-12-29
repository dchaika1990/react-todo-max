import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

// import style from './App.module.scss';
import styled from 'styled-components'

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
  background-color: transparent;
`

export default class App extends Component {
	maxId = 5;
	state = {
		data: [
			'',
			5,
			15,
			{label: 'Going to learn React', like: false, important: true, id: 1},
			{label: 'That is so good', like: false, important: false, id: 2},
			{label: 'I need a break...', like: false, important: false, id: 3},
			{label: 'Yehoo', like: false, important: false, id: 4},
		],
		term: '',
		filter: 'all'
	}

	deleteItem = (id) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const before = data.slice(0, index);
			const after = data.slice(index + 1);
			const newArr = [...before, ...after];
			return {
				data: newArr
			}
		})
	}
	addItem = (body) => {
		const newItem = {
			label: body,
			important: false,
			like: false,
			id: this.state.data.length + 1
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})
	}
	toggleElementInArray = (id, key) => {
		this.setState(({data}) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = {...old, [key]: !old[key]};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		})
	}
	onToggleImportant = (id) => {
		this.toggleElementInArray(id, 'important');
	}
	onToggleLiked = (id) => {
		this.toggleElementInArray(id, 'like');
	}
	searchPost = (items, term) => {
		if (term.length === 0) return items;
		return items.filter(item => typeof item === 'object' && item.label.toLowerCase().indexOf(term) > -1)
	}
	filterPost = (items, filter) => {
		if (filter === 'like') {
			return items.filter(item => item.like)
		} else {
			return items
		}
	}
	onUpdateTerm = (term) => {
		this.setState({term});
	}
	onFilterSelect = (filter) => {
		this.setState({filter});
	}

	render() {
		const {data, term, filter} = this.state;
		const liked = data.filter(item => item.like).length;
		const allPosts = data.filter(item => typeof item === 'object').length;
		const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

		return (
			<StyledAppBlock>
				<AppHeader
					allPosts={allPosts}
					liked={liked}
				/>
				<div className={`search-panel d-flex`}>
					<SearchPanel
						onUpdateTerm={this.onUpdateTerm}
					/>
					<PostStatusFilter
						onFilterSelect={this.onFilterSelect}
						filter={filter}
					/>
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm
					onAdd={this.addItem}
				/>
			</StyledAppBlock>
		)
	}
}