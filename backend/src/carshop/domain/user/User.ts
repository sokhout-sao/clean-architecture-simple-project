import Car from '../car/Car';
import Money from './Money';
import UserId from './UserId';
import UserLogin from './UserLogin';
import UserPassword from './UserPassword';

export default class User {
  id!: UserId;
  login!: UserLogin;
  password!: UserPassword;
  money!: Money;

  constructor(that: {
    id: UserId;
    login: UserLogin;
    password: UserPassword;
    money: Money;
  }) {
    this.id = that.id;
    this.login = that.login;
    this.password = that.password;
    this.money = that.money;
  }

  buyCar(car: Car, seller: User) {
    if (this.money >= car.)
    throw new Error('Method not implemented.');
  }

}