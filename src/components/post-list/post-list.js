import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem } from 'reactstrap';

import './post-list.scss'

const PostList = ({posts, onDelete}) => {

	const elements = posts
		.filter(post => post && typeof post === 'object')
		.map(post => {
			const {id, ...itemProps} = post;
			return (
				<ListGroupItem key={id}>
					<PostListItem
						onDelete={() => onDelete(id)}
						{...itemProps}
					/>
				</ListGroupItem>
			)
		})

	return (
		<ListGroup className={`app-list`}>
			{elements}
		</ListGroup>
	)
}

export default PostList;