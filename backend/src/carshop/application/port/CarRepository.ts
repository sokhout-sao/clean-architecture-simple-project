import Car from '../../domain/car/Car';
import CarId from '../../domain/car/CarId';
import NewCar from '../dto/NewCar';

export default interface CarRepository {
  getByIdOrFail(id: CarId): Promise<Car>;
  create(newCar: NewCar): Promise<Car>;
}
