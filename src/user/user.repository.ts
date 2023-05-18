import { Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";
import { DataSource, Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(createData: CreateUserDto) {
    console.log("repository");
    const queryRunner = this.dataSource.createQueryRunner();
    console.log("before", createData);
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      console.log('save',createData);
      await queryRunner.manager.save(createData);
      await queryRunner.commitTransaction();
    } catch (err){
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
      console.log("release", createData)
    }
  }

}