import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IVehicle from '../Interfaces/IVehicle';
import AbstractODM from './AbstractODM';

export default class CarModel extends AbstractODM<IVehicle & ICar> {
  constructor() {
    const schema = new Schema<IVehicle & ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}