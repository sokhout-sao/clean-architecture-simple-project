import CarBrand from '../../domain/car/CarBrand';
import CarId from '../../domain/car/CarId';
import CarModel from '../../domain/car/CarModel';

export default interface NewCar {
  brand: CarBrand;
  model: CarModel;
}
