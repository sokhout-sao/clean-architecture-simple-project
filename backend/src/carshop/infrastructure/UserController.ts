import { Body, Controller, Post } from '@nestjs/common';
import UserDto from './dto/User.dto';
import LoginUserUseCase from '../application/usecase/login-user/LoginUserUseCase';
import LoginUserRequestDto from './dto/LoginUserRequest.dto';

@Controller('/users')
export default class UserController {
  constructor(private readonly loginUserUseCase: LoginUserUseCase) {}

  @Post('/login')
  async loginUser(@Body() request: LoginUserRequestDto): Promise<UserDto> {
    this.loginUserUseCase.handle(request);
    return {
      id: '',
      login: '',
    };
  }
}
