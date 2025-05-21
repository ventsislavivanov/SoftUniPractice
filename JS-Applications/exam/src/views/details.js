import { html, render } from 'lit-html';
import stampsService from "../api/stampsService.js";
import {checkIsOwner, getToken} from "../utils/userLocalStorage.js";
import {page} from "../lib.js";

const mainEl = document.querySelector('main')
export default async function detailsView(ctx) {
	const stampId = ctx.params.id;
	const stamp = await stampsService.getById(stampId);
	const token = getToken()

	const isOwner = checkIsOwner(stamp);
	render(template(stamp, isOwner, token), mainEl);
}

function template(stamp, isOwner, token) {
	return html`
		<section id="details">
			<div id="details-wrapper">
				<img id="details-img" src="${stamp.imageUrl}" alt="example1" />
				<div>
					<p id="details-name">${stamp.name}</p>
					<div id="info-wrapper">
						<div id="details-year-description">
							<p id="year-description">
								Year of oldest stamps - <span id="year">${stamp.year}</span>
							</p>
							<p id="more-info">
								${stamp.learnMore}
							</p>
						</div>
					</div>
					<h3>Stamp total likes:<span id="likes">0</span></h3>

					<div id="action-buttons">
						${isOwner ? html`
							<a href="/edit/${stamp._id}" id="edit-btn">Edit</a>
							<a @click="${() => deleteStamp(stamp._id)}" id="delete-btn">Delete</a>
						` : html ``}

						${token && !isOwner ? html`
							<a href="#" id="like-btn">Like</a>
						` : html``}
					</div>
				</div>
			</div>
		</section>
	`;
}

async function deleteStamp (stampId) {
	const confirmDelete = confirm('Are you sure?');

	if (confirmDelete) {
		try {
			await stampsService.remove(stampId);
			page.redirect('/dashboard');
		} catch (err) {
			alert(err.message);
		}
	}
}
