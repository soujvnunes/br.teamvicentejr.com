import React from 'react';
import Icon from '../../asset/icon.svg';

export default (props) => (
	<svg
		viewBox='0 0 20 20'
		width={props.size ? (props.size ? props.size : 20) : null}
		height={props.size ? (props.size ? props.size : 20) : null}
		fill={props.fill}
		className={`icon icon-${props.name}`}
	>
		<use xlinkHref={`${Icon}#${props.name}`}/>
	</svg>
);