import React from 'react';

export default (props) => (
	<a className={[
			props.className,
			"link"
		].join(' ')}
	   href={props.href}
	>
		{props.children}
	</a>
)