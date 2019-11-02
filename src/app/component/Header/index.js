import React from 'react';
import logo from "../../asset/logo.png";
import {Nav} from '../../component'

export default (props) => (
	<header className="header">
		<Nav />
		<img src={logo} alt="app logo" className="logo"/>
	</header>
)