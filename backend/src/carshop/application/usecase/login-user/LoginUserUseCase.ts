import UserRepository from '../../../domain/UserRepository';
import LoginUserRequest from './LoginUserRequest';
import UserLoginResponse from './LoginUserResponse';

export default class LoginUserUseCase {
  private userRepository!: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async handle(request: LoginUserRequest): Promise<UserLoginResponse> {
    const userOptional = this.userRepository.getByLoginAndPassword({
      ...request,
    });

    if (userOptional.isEmpty()) throw new Error(`Failed to login: ${request}`);

    return {
      isSuccessful: true,
      content: userOptional.get(),
    };
  }
}
