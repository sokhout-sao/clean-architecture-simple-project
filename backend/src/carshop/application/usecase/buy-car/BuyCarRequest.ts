import CarSaleId from '../../../domain/car/CarSaleId';
import UserId from '../../../domain/user/UserId';

export default interface BuyCarRequest {
  buyerId: UserId;
  carSaleId: CarSaleId;
}
