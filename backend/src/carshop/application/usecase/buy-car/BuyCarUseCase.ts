import CarRepository from '../../port/CarRepository';
import UserRepository from '../../port/UserRepository';
import BuyCarRequest from './BuyCarRequest';
import BuyCarResponse from './BuyCarResponse';

export class BuyCarUseCase {
  private userRepository: UserRepository;
  private carRepository: CarRepository;

  constructor(userRepository: UserRepository, carRepository: CarRepository) {
    this.userRepository = userRepository;
    this.carRepository = carRepository;
  }

  async handle(request: BuyCarRequest): Promise<BuyCarResponse> {
    try {
      const buyer = await this.userRepository.getByIdOrFail(request.buyerId);
      const car = await this.carRepository.getByIdOrFail(request.carId);
      const seller = await this.userRepository.getByIdOrFail(car.ownerId);

      buyer.buyCar(car, seller);

      return {
        isSuccessful: true,
      };
    } catch (error) {
      return {
        isSuccessful: false,
        error: new Error(
          `Failed to buy a car: request=${JSON.stringify(
            request,
          )}, cause=${JSON.stringify(error)}`,
        ),
      };
    }
  }
}
