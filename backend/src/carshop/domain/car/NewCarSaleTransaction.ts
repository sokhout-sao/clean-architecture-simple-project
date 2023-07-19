import Instant from '../shared/Instant';
import UserId from '../user/UserId';
import CarId from './CarId';
import Price from './Price';

export default class NewCarSaleTransaction {
  buyerId!: UserId;
  sellerId!: UserId;
  carId!: CarId;
  price!: Price;
  date!: Instant;
}
