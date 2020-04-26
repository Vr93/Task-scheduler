import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App'


ReactDOM.render(

	<Router>
		<div>
			<Route exact path="/">
				<App />
			</Route>
			<Route path="/index">
				<App />
			</Route>
		</div>
	</Router>
	, document.getElementById('root'));
