import express from 'express';
import CarController from './Controllers/Car';
import validateId from './Middlewares/validateId';

const app = express();
app.use(express.json());

// const carController = new CarController();

app.post('/cars', (req, res, next) => new CarController(req, res, next).create());

app.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

app.get('/cars/:id', validateId, (req, res, next) => new CarController(req, res, next).findById());

export default app;
