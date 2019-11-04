import React from 'react';
import Icon from '../../asset/icon.svg';

export default (props) => (
	<svg
		className={[
			`icon icon-${props.name}`,
			props.className,
			!props.width & !props.height && props.size === 'small' ? 'small' : null,
			!props.width & !props.height && props.size === 'normal' ? 'normal' : null,
			!props.width & !props.height && props.size === 'large' ? 'large' : null,
		].join(' ')}
		viewBox='0 0 20 20'
		width={!props.size && props.width}
		height={!props.size && props.height}
		fill={props.fill}
	>
		<use xlinkHref={`${Icon}#${props.name}`}/>
	</svg>
);