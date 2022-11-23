import express from 'express';
import CarController from './Controllers/Car';
import MotorcycleController from './Controllers/Motorcycle';
import validateId from './Middlewares/validateId';

const motorcycleId = '/motorcycles/:id';

const app = express();
app.use(express.json());

app.post('/cars', (req, res, next) => new CarController(req, res, next).create());

app.get('/cars', (req, res, next) => new CarController(req, res, next).findAll());

app.get('/cars/:id', validateId, (req, res, next) => new CarController(req, res, next).findById());

app.put('/cars/:id', validateId, (req, res, next) => new CarController(req, res, next).update());

app.delete('/cars/:id', validateId, (req, res, next) => new CarController(req, res, next).delete());

app.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

app.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());

app.get(motorcycleId, validateId, (req, res, next) => new MotorcycleController(req, res, next)
  .findById());

app.put(motorcycleId, validateId, (req, res, next) => new MotorcycleController(req, res, next)
  .update());

app.delete(
  motorcycleId, 
  validateId,
  (req, res, next) => new MotorcycleController(req, res, next).delete(),
);

export default app;
