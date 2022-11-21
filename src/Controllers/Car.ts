import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/Car';
import IVehicle from '../Interfaces/IVehicle';
import ICar from '../Interfaces/ICar';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }
  async create() {
    const car: IVehicle & ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  async findAll() {
    const allCars = await this.service.findAll();
    return this.res.status(200).json(allCars);
  }

  async findById() {
    const { id } = this.req.params;
    try {
      const result = await this.service.findById(id);
      // console.log(result);
      if (!result) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async update() {
    const { id } = this.req.params;
    const { body } = this.req;
    try {
      const result = await this.service.update(id, body);
      if (!result) return this.res.status(404).json({ message: 'Car not found' });
      console.log(result);
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}