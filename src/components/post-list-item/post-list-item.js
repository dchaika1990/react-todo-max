import React from 'react';
import './post-list-item.scss'

const PostListItem = (props) => {
	const {label, onDelete, onToggleImportant, onToggleLiked, important, like} = props;

	let classNames = `app-list-item d-flex justify-content-between`;
	classNames += important ? ' important' : '';
	classNames += like ? ' like' : '';

	return (
		<div className={classNames}>
			<span
				className={`app-list-item-label`}
				onClick={onToggleLiked}
			>
				{label}
			</span>
			<div className={`d-flex justify-content-center align-items-center`}>
				<button
					type={`button`}
					className={`btn-star btn-sm`}
					onClick={onToggleImportant}
				>
					<i className={`fa fa-star`}/>
				</button>
				<button
					type={`button`}
					className={`btn-trash btn-sm`}
					onClick={onDelete}
				>
					<i className={`fa fa-trash-o`}/>
				</button>
				<i className={`fa fa-heart`}/>
			</div>
		</div>
	)
}

export default PostListItem;