import React from 'react';
import PostListItem from '../post-list-item';

import './post-list.css'

const PostList = ({posts}) => {

	const elements = posts.map(post => {
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