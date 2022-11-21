import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;
  constructor(
    motorcycle: IMotorcycle,
  ) {
    super(
      motorcycle.model, 
      motorcycle.year,
      motorcycle.color, 
      motorcycle.buyValue, 
      motorcycle._id, 
      motorcycle.status,
    ); 
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
}