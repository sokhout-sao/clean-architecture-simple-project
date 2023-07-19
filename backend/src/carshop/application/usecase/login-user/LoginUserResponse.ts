import User from '../../../domain/user/User';

type UserLoginResponse = {
  isSuccessful: boolean;
  error?: unknown;
  content?: User;
};

export default UserLoginResponse;
