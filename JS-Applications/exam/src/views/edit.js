import { html, render } from 'lit-html';
import {page} from "../lib.js";
import stampsService from "../api/stampsService.js";


const mainEl = document.querySelector('main')

export default async function editView(cxt) {
	const stampId= cxt.params.id
	const stamp = await stampsService.getById(stampId);
	console.log(stamp)
	render(template(stamp), mainEl);
}

function template(stamp) {
	return html`
		<section id="edit">
			<div class="form">
				<h2>Edit Post Stamp</h2>
				<form class="edit-form" @submit="${(e)=>updateStamp(e, stamp._id)}">
					<input type="text" name="name-input" id="name" placeholder="Stamp Name" value="${stamp.name}" />
					<input type="text" name="image-url-input" id="image-url" placeholder="Image URL" value="${stamp.imageUrl}"/>
					<input type="number" id="year-input" name="year-input" placeholder="Year"  value="${stamp.year}"/>
					<textarea id="more-info" name="more-info-textarea" placeholder="More Info" rows="8" cols="10" >${stamp.learnMore}</textarea>
					<button type="submit">Edit</button>
				</form>
			</div>
		</section>
	`;
}

async function updateStamp(e, stampId) {

	e.preventDefault();

	const formData = new FormData(e.currentTarget);
	const stampData = Object.fromEntries(formData);

	if(Object.values(stampData).some(val => val === '')) {
		return alert('All field are required');
	}

	try {
		const result = await stampsService.update(stampId, stampData);
		page.redirect(`/details/${stampId}`);
	} catch (err) {
		console.log(err.message);
	}
}