import { Model, Schema, models, model, UpdateQuery } from 'mongoose';

export default class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async update(_id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  async findAll(): Promise<T[]> {
    const result = await this.model.find();
    return result;
  }

  async findById(_id: string): Promise<T | null> {
    return this.model.findById({ _id });
  }

  async delete(_id: string) {
    const result = this.model.findByIdAndDelete({ _id });
    return result;
  }
}