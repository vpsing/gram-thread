import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}


  async createUser(createUserDto: CreateUserDto) {
 const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = this.userRepository.create({...createUserDto, password: hashedPassword,});
  
    return await this.userRepository.save(user);

  }

  async login(loginUserDto: LoginUserDto) {

  const user = await this.userRepository.findOne({
    where: {
      email: loginUserDto.email,
    },
  });

  if (!user) {
    throw new UnauthorizedException("Invalid Email");
  }

  const isPasswordMatch = await bcrypt.compare(
  loginUserDto.password,
  user.password,
);

if (!isPasswordMatch) {
  throw new UnauthorizedException("Invalid Password");
}
const token = this.jwtService.sign({
  id: user.id,
  email: user.email,
});
  return {
    message: "Login Successful",
    access_token: token,
    user,
  };
}
}