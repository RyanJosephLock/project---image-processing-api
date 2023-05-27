// express server and routes config
import express from 'express';
import mainRoute from './routes';

const app = express(); // global app object

app.use('/api', mainRoute); // mount the main api route to the app
app.use(express.static(__dirname + '/assets')); // create static filepath to serve HTML images

export default app;
