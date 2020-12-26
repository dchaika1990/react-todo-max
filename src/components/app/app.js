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
            {label: 'Going to learn React', important: true, id: 1},
            {label: 'That is so good', important: false, id: 2},
            {label: 'I need a break...', important: false, id: 3},
            {label: 'Yehoo', important: false, id: 4},
        ]
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index+1);
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
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }
    render() {
        return (
            <StyledAppBlock>
                <AppHeader/>
                <div className={`search-panel d-flex`}>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    onDelete={(id) => this.deleteItem(id)}
                    posts={this.state.data}
                />
                <PostAddForm
                    onAdd={(body) => this.addItem(body)}
                />
            </StyledAppBlock>
        )
    }
}