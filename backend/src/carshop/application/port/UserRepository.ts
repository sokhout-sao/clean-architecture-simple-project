import NewUser from '../dto/NewUser';
import User from '../../domain/user/User';
import UserId from '../../domain/user/UserId';

export default interface UserRepository {
  getByIdOrFail(id: UserId): Promise<User>;
  create(newUser: NewUser): Promise<User>;
}
