import Money from '../../domain/user/Money';
import UserLogin from '../../domain/user/UserLogin';
import UserPassword from '../../domain/user/UserPassword';

export default interface NewUser {
  login: UserLogin;
  password: UserPassword;
  money: Money;
}
