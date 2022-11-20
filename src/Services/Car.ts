// import Car from '../Domains/Car';
import Car from '../Domains/Cars';
import ICar from '../Interfaces/ICar';
import IErrorMsg from '../Interfaces/IErrorMsg';
import IVehicle from '../Interfaces/IVehicle';
import CarModel from '../Models/Car';

export default class CarService {
  async create(car: IVehicle & ICar): Promise<(IVehicle & ICar) | IErrorMsg | null | Car> {
    const carODM = new CarModel();
    const addedCar = await carODM.create(car);
    const newCar = new Car(addedCar);
    return newCar;
  }
}