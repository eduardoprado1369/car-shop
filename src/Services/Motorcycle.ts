import Motorcycle from '../Domains/Motorcycle';
import IErrorMsg from '../Interfaces/IErrorMsg';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/Motorcycle';

export default class MotorcycleService {
  async create(motorcycle: IMotorcycle): Promise<Motorcycle | IErrorMsg | null> {
    const motorcycleODM = new MotorcycleModel();
    const addedMotorcycle = await motorcycleODM.create(motorcycle);
    const newMotorcycle = new Motorcycle(addedMotorcycle);
    return newMotorcycle;
  }

  async findAll(): Promise<Motorcycle[]> {
    const motorcycleODM = new MotorcycleModel();
    const result = await motorcycleODM.findAll();
    const motorcycles: Motorcycle[] = result.map((i) => new Motorcycle(i));
    return motorcycles;
  }

  async findById(id: string): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleModel();
    const result = await motorcycleODM.findById(id);
    if (result === null) return null;
    const motorcycle = new Motorcycle(result);
    return motorcycle;
  }

  async update(id: string, motorcycle: Partial<IMotorcycle>): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleModel();
    const result = await motorcycleODM.update(id, motorcycle);
    if (result === null) return result;
    const updatedMotorcycle = new Motorcycle(result);
    return updatedMotorcycle;
  }

  async delete(id: string): Promise<IMotorcycle | null> {
    const motorcycleODM = new MotorcycleModel();
    const result = await motorcycleODM.delete(id);
    return result;
  }
}