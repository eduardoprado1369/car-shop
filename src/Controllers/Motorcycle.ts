import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle';

const notFoundMsg = 'Motorcycle not found';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;
  
  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }
  async create() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  async findAll() {
    const allMotorcycles = await this.service.findAll();
    return this.res.status(200).json(allMotorcycles);
  }

  async findById() {
    const { id } = this.req.params;
    try {
      const result = await this.service.findById(id);
      if (!result) return this.res.status(404).json({ message: notFoundMsg });
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
      if (!result) return this.res.status(404).json({ message: notFoundMsg });
      return this.res.status(200).json(result);
    } catch (error) {
      this.next(error);
    }
  }

  async delete() {
    const { id } = this.req.params;
    try {
      const result = await this.service.delete(id);
      if (!result) return this.res.status(404).json({ message: notFoundMsg });
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}