import { page } from './lib.js';
import { html, render } from 'lit-html';
import { getToken } from './utils/userLocalStorage.js'

// import pages


import showNavigation from './middlewares/navigation.js';
import createView from "./views/create.js";
import dashboardView from "./views/dashboard.js";
import detailsView from "./views/details.js";
import editView from "./views/edit.js";
import homeView from "./views/home.js";
import loginView from "./views/login.js";
import registerView from "./views/register.js";

page(showNavigation);
page('/', homeView);
page('/register', registerView);
page('/login', loginView);

page('/dashboard', dashboardView);
page('/create', createView);
page('/edit/:id', editView);
page('/details/:id', detailsView);


page.start();


