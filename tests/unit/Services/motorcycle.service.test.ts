import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const hondaCbr1000rr = 'Honda Cbr 1000rr';
const hondaCb600fHornet = 'Honda Cb 600f Hornet';
describe('Testa o service de cars', () => {
  afterEach(function () { sinon.restore(); });
  it('Test o findAll', async function () {
    const mockedModelValue = [
      {
        _id: '634852326b35b59438fbea2f',
        model: hondaCb600fHornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        _id: '634852326b35b59438fbea31',
        model: hondaCbr1000rr,
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    const expectedResult = [
      {
        id: '634852326b35b59438fbea2f',
        model: hondaCb600fHornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: hondaCbr1000rr,
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    sinon.stub(Model, 'find').resolves(mockedModelValue);

    const service = new MotorcycleService();
    const result = await service.findAll();

    expect(result).to.deep.equal(expectedResult);
  });
  describe('Testa o findById', () => {
    it('Test o findById com sucesso', async function () {
      const mockedModelValue = {
        _id: '634852326b35b59438fbea31',
        model: hondaCbr1000rr,
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      };
      const expectedResult = {
        id: '634852326b35b59438fbea31',
        model: hondaCbr1000rr,
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      };
      sinon.stub(Model, 'findById').resolves(mockedModelValue);
    
      const service = new MotorcycleService();
      const result = await service.findById('634852326b35b59438fbea2f');
    
      expect(result).to.deep.equal(expectedResult);
    });
    it('Testa o findById sem sucesso', async function () {
      sinon.stub(Model, 'findById').resolves(null);
    
      const service = new MotorcycleService();
      const result = await service.findById('not_id');
    
      expect(result).to.deep.equal(null);
    });
  });
  it('Testa o create', async function () {
    const inputValue: IMotorcycle = {
      model: hondaCb600fHornet,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const mockedModelValue = {
      _id: '6348513f34c397abcad040b2',
      model: hondaCb600fHornet,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const expectedResult = {
      id: '6348513f34c397abcad040b2',
      model: hondaCb600fHornet,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(mockedModelValue);

    const service = new MotorcycleService();
    const result = await service.create(inputValue);

    expect(result).to.deep.equal(expectedResult);
  });
  it('Testa o delete', async function () {
    const expectedResult = {
      _id: '6348513f34c397abcad040b2',
      model: hondaCb600fHornet,
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'findByIdAndDelete').resolves(expectedResult);

    const service = new MotorcycleService();
    const result = await service.delete('6348513f34c397abcad040b2');

    expect(result).to.deep.equal(expectedResult);
  });
  describe('Testa o update', () => {
    it('Testa em caso de sucesso', async function () {
      const mockedModelValue = {
        _id: '634852326b35b59438fbea2f',
        model: hondaCb600fHornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };
      const inputValue: IMotorcycle = {
        model: hondaCb600fHornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };
      const expectedResult = {
        id: '634852326b35b59438fbea2f',
        model: hondaCb600fHornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };
      sinon.stub(Model, 'findByIdAndUpdate').resolves(mockedModelValue);

      const service = new MotorcycleService();
      const result = await service.update('634852326b35b59438fbea2f', inputValue);

      expect(result).to.deep.equal(expectedResult);
    });
    it('Testa sem sucesso', async function () {
      const inputValue: IMotorcycle = {
        model: hondaCb600fHornet,
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      };
      sinon.stub(Model, 'findByIdAndUpdate').resolves(null);

      const service = new MotorcycleService();
      const result = await service.update('dgfsffshsf', inputValue);
    
      expect(result).to.deep.equal(null);
    });
  });
});