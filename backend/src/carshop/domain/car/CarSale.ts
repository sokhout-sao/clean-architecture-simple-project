import Instant from '../shared/Instant';
import UserId from '../user/UserId';
import CarSaleId from './CarSaleId';
import CarId from './CarId';
import Price from './Price';

export default class CarSale {
  id: CarSaleId;
  carId: CarId;
  sellerId: UserId;
  buyerId?: UserId;
  price: Price;
  startDate: Instant;
  endDate?: Instant;

  constructor(that: {
    id: CarSaleId;
    carId: CarId;
    sellerId: UserId;
    buyerId?: UserId;
    price: Price;
    startDate: Instant;
    endDate?: Instant;
  }) {
    this.id = that.id;
    this.carId = that.carId;
    this.sellerId = that.sellerId;
    this.buyerId = that.buyerId;
    if (this.isSellerAndBuyerSameUser(that))
      throw new Error(
        `The buyerId ${that.buyerId} should be different from the sellerId ${that.sellerId}`,
      );

    this.price = that.price;
    this.startDate = that.startDate;
    this.endDate = that.endDate;
  }

  isSellerAndBuyerSameUser(that: {
    id: CarSaleId;
    carId: CarId;
    sellerId: UserId;
    buyerId?: UserId | undefined;
    price: Price;
    startDate: Instant;
    endDate?: Instant | undefined;
  }): boolean {
    return that.sellerId === that.buyerId;
  }
}
