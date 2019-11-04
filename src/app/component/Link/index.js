import React from 'react';

export default (props) => (
	<a
		className={[
			props.className,
			"link"
		].join(' ')}
		href={props.href}
		title={props.title}
	>
		{props.children}
	</a>
)