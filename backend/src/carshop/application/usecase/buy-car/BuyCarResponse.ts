import CarSaleTransaction from '../../../domain/car/CarSaleTransaction';

export default interface BuyCarResponse {
  isSuccessful: boolean;
  error?: unknown;
  content?: CarSaleTransaction;
}
