import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

export default class Car extends Vehicle {
  // protected car: ICar;
  private doorsQty: number;
  private seatsQty: number;
  constructor(
    car: ICar,
    // doorsQty: number,
    // seatsQty: number,
  ) {
    super(car.model, car.year, car.color, car.buyValue, car._id, car.status);
    // this.car = car;
    // this.car.doorsQty = doorsQty;
    // this.car.seatsQty = seatsQty;
    
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

//   model: string,
// year: number, 
// color: string, 
// status: boolean, 
// buyValue: number, 
// doorsQty: number, 
// seatsQty: number,