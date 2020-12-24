import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.scss'

const PostList = ({posts}) => {

	const elements = posts
		.filter(post => post && typeof post === 'object')
		.map(post => {
			const {id, ...itemProps} = post;
			return (
				<li key={id} className={`list-group-item`}>
					<PostListItem {...itemProps}
						// label={post.label}
						// important={post.important}
					/>
				</li>
			)
		})

	return (
		<ul className={`app-list list-group`}>
			{elements}
		</ul>
	)
}

export default PostList;