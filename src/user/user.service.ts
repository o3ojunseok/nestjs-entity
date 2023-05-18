import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { UserRepository } from "./user.repository";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {
  }

  async create(data: CreateUserDto) {
    console.log("service")
    data.password = await bcrypt.hash(data.password, 10);
    const result1 = await this.userRepository.save(data);
    const result = await this.userRepository.createUser(result1);
    console.log("wtf", result);
    return result;
  }
}
