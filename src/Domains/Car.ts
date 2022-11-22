import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Cars extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;
  constructor(
    car: ICar,
  ) {
    super(car.model, car.year, car.color, car.buyValue, car._id, car.status);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}
