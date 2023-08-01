import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    validateUser(UserID: string, Password: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
}
