import express from 'express';
import CarController from './Controllers/Car';
import MotorcycleController from './Controllers/Motorcycle';
import validateId from './Middlewares/validateId';

const app = express();
app.use(express.json());

// const carController = new CarController();

app.post('/cars', (req, res, next) => new CarController(req, res, next).create());

app.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

app.get('/cars/:id', validateId, (req, res, next) => new CarController(req, res, next).findById());

app.put('/cars/:id', validateId, (req, res, next) => new CarController(req, res, next).update());

app.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

app.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());

app.get('/motorcycles/:id', validateId, (req, res, next) => new MotorcycleController(req, res, next)
  .findById());

app.put('/motorcycles/:id', validateId, (req, res, next) => new MotorcycleController(req, res, next)
  .update());

export default app;
