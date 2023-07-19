import UserId from '../user/UserId';
import CarBrand from './CarBrand';
import CarId from './CarId';
import CarModel from './CarModel';

export default class Car {
  id: CarId;
  brand: CarBrand;
  model: CarModel;
  ownerId: UserId;

  constructor(that: {
    id: CarId;
    brand: CarBrand;
    model: CarModel;
    ownerId: UserId;
  }) {
    this.id = that.id;
    this.brand = that.brand;
    this.model = that.model;
    this.ownerId = that.ownerId;
  }
}
