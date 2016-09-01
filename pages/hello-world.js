import React from 'react';
import {Link, navigateTo} from 'react-server';
import HelloWorld from '../components/hello-world';
import Button from '../components/button';


export default class SimplePage {
	
	handleRoute(next) {
		var params = this.getRequest().getQuery();
		return next();
	}

	getElements() {
		return (
			<div>
				<HelloWorld/>
				<Button href="/login"/>
				<br/>
				<Link path="/login?id=12" reuseDom={true} bundleData={true}>Navigate to login</Link>
				<Link path="/repo" reuseDom={true}>Navigate to repo</Link>
			</div>
		);
	}

	getMetaTags() {
		return [
			{charset: 'utf8'},
			{'http-equiv': 'x-ua-compatible', 'content': 'ie=edge'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{name: 'description', content: 'hello world, powered by React Server'},
			{name: 'generator', content: 'React Server'},
		];
	}
}
