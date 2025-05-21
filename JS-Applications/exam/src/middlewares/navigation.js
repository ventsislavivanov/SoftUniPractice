import { html, render } from 'lit-html';
import {page} from "../lib.js";
import { getToken } from '../utils/userLocalStorage.js';
import userService from "../api/userService.js";

const headerEl = document.querySelector('header')


export default function showNavigation(ctx, next) {
	const token = getToken()
	render(template(token), headerEl)

	next();
}

function template(token) {
	return html`
		<a id="logo" href="/">
			<img id="logo-img" src="./images/logo.webp" alt="logo" />
		</a>
		<nav>
			<div>
				<a href="/dashboard">Collection</a>
			</div>

			${token ? html`
				<div class="user">
					<a href="/create">Add Stamp</a>
					<a @click="${logoutUser}">Logout</a>
				</div>
			` : html`
				<div class="guest">
					<a href="/login">Login</a>
					<a href="/register">Register</a>
				</div>
			`}
		</nav>
	`;
}



async function logoutUser() {
	try	{
	    await userService.logout();
    	showNavigation();
    	page.redirect('/');
	} catch (err) {
		alert(err.message);
	}
}

