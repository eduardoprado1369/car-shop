import Car from '../Domains/Cars';
import ICar from '../Interfaces/ICar';
import IErrorMsg from '../Interfaces/IErrorMsg';
// import IVehicle from '../Interfaces/IVehicle';
import CarModel from '../Models/Car';

export default class CarService {
  async create(car: ICar): Promise<Car | IErrorMsg | null> {
    const carODM = new CarModel();
    const addedCar = await carODM.create(car);
    const newCar = new Car(addedCar);
    return newCar;
  }

  async findAll(): Promise<Car[]> {
    const carODM = new CarModel();
    const result = await carODM.findAll();
    const cars = result.map((i) => new Car(i));
    return cars;
  }

  async findById(id: string): Promise<Car | null> {
    // if (!isValidObjectId(id)) return { message: 'Invalid mongo id' };
    const carODM = new CarModel();
    const result = await carODM.findById(id);
    if (result === null) return null;
    const car = new Car(result);
    return car;
  }
}