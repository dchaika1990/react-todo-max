import React from 'react';
import './app-header.scss'

import styled from 'styled-components'

const Header = styled.div`
  align-items: flex-end;
  justify-content: space-between;
  display: flex;

  h1 {
    /* width: 150px;
	height: 150px; */
    font-size: 26px;
	color: ${props => props.colored ? 'black' : 'green'};
	transition: all .3s ease;
	:hover{
	  color: blue;
	}
  }

  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({allPosts, liked}) => {
	return (
		<Header as={`div`} colored>
			<h1>Dima Chaika</h1>
			<h2>{allPosts} записей, из них понравилось {liked}</h2>
		</Header>
	)
}

export default AppHeader;