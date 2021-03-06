
/*
*   React Game Store 200 - server
*   author: Aurélien Dupays Dexemple
*/

import { createServer } from 'http';
import proxy from 'http-proxy-middleware';

import path from 'path';

import express from 'express';
import bodyParser from 'body-parser';

import morgan from 'morgan';
import moment from 'moment';

import cors from 'cors'

import chalk from 'chalk';

import dotenv from 'dotenv';

import { html } from '../html';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const { red, cyan } = chalk;

const SERVER_PORT = process.env.SERVER_PORT || 4010;
const WEBPACK_PORT = process.env.WEBPACK_PORT || 4110;
const API_PORT = process.env.API_PORT || 5010;

const app = express();
const server = createServer(app);

app.use(morgan((tokens, req, res) => (
    cyan(`[React Game Store]\t ${tokens.method(req, res)} ${tokens.url(req, res)} ${tokens['response-time'](req, res)} ms in ${process.env.NODE_ENV} env !`)
)));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', proxy({
    target: `http://localhost:${API_PORT}`,
    changeOrigin: true,
    logLevel: 'debug',
    onProxyReq: (proxyReq, req) => {
        console.log(req.body);
        if (req.body) {
            const body = JSON.stringify(req.body);

            proxyReq.setHeader('Content-Type', 'application/json; charset=utf-8');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(body));

            proxyReq.write(body);
        }
    }
}));

app.use('/', (req, res) => {
    res.status(200).send(html({
        build: `http://localhost:${WEBPACK_PORT}/build/app.bundle.js` 
    }));
});

console.info(cyan(`[React Game Store]\t Starting server in ${process.env.NODE_ENV} env at ${moment().format('llll')} !`));

server.listen(SERVER_PORT);
server.on('error', (err) => {
    console.error(red(`[React Game Store]\t error : ${err} in ${process.env.NODE_ENV} env !`));
    process.exit(1);
});

server.on('listening', () => {
    const addr = server.address();
    console.info(cyan(`[React Game Store]\t Server listening on http://${addr['address']}:${SERVER_PORT} in ${process.env.NODE_ENV} env since ${moment().format('llll')} !`));
});