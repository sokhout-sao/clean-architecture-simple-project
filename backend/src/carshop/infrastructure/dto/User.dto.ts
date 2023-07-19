import User from '../../domain/user/User';

export default class UserDto {
  id!: string;
  login!: string;

  private constructor(that: { id: string; login: string }) {
    this.id = that.id;
    this.login = that.login;
  }

  static from(user: User): UserDto {
    return new UserDto({
      id: user.id.toString(),
      login: user.login,
    });
  }
}
