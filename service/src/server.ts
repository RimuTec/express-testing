// import express = require('express');
import express from 'express';
import { configureApp } from './app';
import { environment } from './Environment';

const expressApp = express();
const port = environment.expressPort;

configureApp(expressApp);

// Start the web server
const server = expressApp.listen(port, () => console.log(`listening at http://localhost:${port}`));

export { server, expressApp as app };
