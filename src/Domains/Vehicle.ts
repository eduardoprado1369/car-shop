// import IVehicle from '../Interfaces/IVehicle';

export default abstract class Vehicle {
  protected id?: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  constructor(
    model: string,
    year: number, 
    color: string, 
    buyValue: number,
    _id: string | undefined,
    status: boolean | undefined = false, 
  ) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.id = _id;
  }
} 