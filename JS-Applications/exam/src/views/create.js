import { html, render } from 'lit-html';
import {page} from "../lib.js";
import stampsService from "../api/stampsService.js";

const mainEl = document.querySelector('main')
export default async function createView() {
	render(template(), mainEl);
}

function template() {
	return html`
		<section id="create">
			<div class="form">
				<h2>Add Post Stamp</h2>
				<form class="create-form" @submit="${createStamp}">
					<input
						type="text"
					  name="name-input"
						id="name-input"
						placeholder="Stamp Name"
					/>
					
					<input
						type="text"
						name="image-url-input"
						id="image-url-input"
						placeholder="Image URL"
					/>
					
					<input
						type="number"
						id="year-input"
						name="year-input"
						placeholder="year"
					/>
					
					<textarea
						id="more-info-textarea"
						name="more-info-textarea"
						placeholder="More Info"
						rows="8"
						cols="10"
					></textarea>
					
					<button type="submit">Add Stamp</button>
				</form>
			</div>
		</section>
	`;
}

async function createStamp(e) {
	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const stampData = Object.fromEntries(formData);

	try {
		const result = await stampsService.create(stampData);
		page.redirect('/dashboard');
	} catch (err) {
		console.log(err.message);
	}
}