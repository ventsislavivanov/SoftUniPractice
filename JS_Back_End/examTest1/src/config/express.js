import express from 'express';
import cookieParser from 'cookie-parser';
import { session } from "../middlewares/session.js";

const secret = '$eCre7 P@$sw0r9';

function configExpress(app) {
    app.use(cookieParser(secret));
    app.use(session());

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
}

export { configExpress };