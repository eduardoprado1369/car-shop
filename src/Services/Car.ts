import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car';

export default class CarService {
  async create(car: ICar): Promise<Car | null> {
    const carODM = new CarModel();
    const addedCar = await carODM.create(car);
    const newCar = new Car(addedCar);
    return newCar;
  }

  async findAll(): Promise<Car[]> {
    const carODM = new CarModel();
    const result = await carODM.findAll();
    const cars: Car[] = result.map((i) => new Car(i));
    return cars;
  }

  async findById(id: string): Promise<Car | null> {
    const carODM = new CarModel();
    const result = await carODM.findById(id);
    if (result === null) return null;
    const car = new Car(result);
    return car;
  }

  async update(id: string, car: Partial<ICar>): Promise<Car | null> {
    const carODM = new CarModel();
    const result = await carODM.update(id, car);
    if (result === null) return result;
    const updatedCar = new Car(result);
    return updatedCar;
  }
}