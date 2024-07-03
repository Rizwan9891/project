import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import { config } from './_configs/config.js';
import weatherRoute from './_routes/weather.route.js';

mongoose.set('strictQuery', false);
mongoose.connect(config.url, {}).then((connected) => {
    console.log('Mongodb connected with success');
}).catch((error) => {
    console.log(error);
});


const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = http.createServer(app);

app.get("/", (req, res) => {
    res.status(200).json(`Backend version 1.0.0 working `);
});
weatherRoute(app);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Backend server listening at ${PORT}`);
});
