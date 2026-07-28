import { Controller, Post, Body } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {


  constructor(
    private usersService: UsersService
  ){}

//signup API
  @Post('signup')
  createUser(
    @Body() createUserDto: CreateUserDto
  ){
 console.log("Controller Hit");

  console.log(createUserDto);
    return this.usersService.createUser(createUserDto);

  }

@Post("login")
login(@Body() loginUserDto: LoginUserDto) {
  return this.usersService.login(loginUserDto);
}


}