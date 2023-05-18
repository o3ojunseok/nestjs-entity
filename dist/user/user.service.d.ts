import { CreateUserDto } from "./dto/create-user.dto";
import { UserRepository } from "./user.repository";
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    create(data: CreateUserDto): Promise<void>;
}
