import express from 'express';
import CarController from './Controllers/Car';

const app = express();
app.use(express.json());

// const carController = new CarController();

app.post('/cars', (req, res, next) => new CarController(req, res, next).create());

export default app;
