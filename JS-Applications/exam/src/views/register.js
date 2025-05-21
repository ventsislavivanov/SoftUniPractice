import { html, render } from 'lit-html';
import {page} from "../lib.js";
import userService from "../api/userService.js";

const mainEl = document.querySelector('main')
export default async function registerView() {
	render(template(), mainEl);
}

function template() {
	return html`
		<section id="register">
			<div class="form">
				<h2>Register</h2>
				<form class="register-form" @submit="${registerUser}">
					<input type="text" name="email" id="register-email" placeholder="email" />
					<input type="password" name="password" id="register-password" placeholder="password" />
					<input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
					<button type="submit">register</button>
					<p class="message">Already registered? <a href="/login">Login</a></p>
				</form>
			</div>
		</section>
	`;
}

async function registerUser(e) {
	e.preventDefault();
	const formData = new FormData(e.currentTarget);
	const userData = Object.fromEntries(formData);

	if(!userData.email || !userData.password || !userData['re-password']) {
		alert('All fields are required');
		return;
	}

	if (userData.password !== userData['re-password']) {
		alert('Passwords must match');
		return
	}

	try {
		const result = await userService.register(userData);
		console.log(result);
		page.redirect('/');
	} catch (err) {
		alert(err);
	}
}