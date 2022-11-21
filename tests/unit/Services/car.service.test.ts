import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/Car';

describe('Testa o service de cars', () => {
  afterEach(function () { sinon.restore(); });
  it('Test o findAll', async function () {
    const mockedModelValue = [
      {
        _id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        _id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    const expectedResult = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: false,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(mockedModelValue);

    const service = new CarService();
    const result = await service.findAll();

    expect(result).to.deep.equal(expectedResult);
  });
  it('Test o findOne', async function () {
    const mockedModelValue = {
      _id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const expectedResult = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'findById').resolves(mockedModelValue);

    const service = new CarService();
    const result = await service.findById('634852326b35b59438fbea2f');

    expect(result).to.deep.equal(expectedResult);
  });
  it('Test o create', async function () {
    const inputValue = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const outputValue = {
      _id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    const expectedResult = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(outputValue);

    const service = new CarService();
    const result = await service.create(inputValue);

    expect(result).to.deep.equal(expectedResult);
  });
  describe('Testa o update', () => {
    it('Testa em caso de sucesso', async function () {
      const mockedModelValue = {
        _id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      };
      const inputValue = {
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      };
      const expectedResult = {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      };
      sinon.stub(Model, 'findByIdAndUpdate').resolves(mockedModelValue);

      const service = new CarService();
      const result = await service.update('634852326b35b59438fbea2f', inputValue);

      expect(result).to.deep.equal(expectedResult);
    });
  });
});