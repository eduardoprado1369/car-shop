export default interface IMotorcycle {
  _id?: string | undefined;
  id?: string | undefined;
  model: string;
  year: number;
  color: string;
  status?: boolean | undefined;
  buyValue: number;
  category: 'Street' | 'Custom' | 'Trail';
  engineCapacity: number;
}