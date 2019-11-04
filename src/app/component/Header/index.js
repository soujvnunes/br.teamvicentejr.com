import React from 'react';
import {Link, Icon} from '../../component';

export default (props) => (
	<header className="header">
		<nav className="nav">
			{['Professores', 'Sobre', 'Eventos'].map((text) => (
				<Link
					className="nav-link"
					href="/"
					key={text}
					title={text}
				>
					{text}
				</Link>
			))}
		</nav>
		{props.mark &&
			<a
				href="/"
				className="mark-wrapper"
				title="Página inicial de Vicente Júnior"
			>
				<Icon name="logo"/>
			</a>
		}
	</header>
)