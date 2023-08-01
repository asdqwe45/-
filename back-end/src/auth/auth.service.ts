import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginUserDto } from 'src/user/DTO/login.user.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(UserID: string, Password: string): Promise<any> {
    const user = await this.userRepository.findOneBy({ UserID });

    if (!user) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`등록되지 않은 사용자입니다.`],
        error: 'Forbidden',
      });
    }

    const isMatch = await bcrypt.compare(Password, user.Password);

    if (isMatch) {
      const { Password, ...result } = user;
      return result;
    } else {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`사용자 정보가 일치하지 않습니다.`],
        error: 'Forbidden',
      });
    }
  }

  async login(user: any) {
    const payload = {
      UserID: user.UserID,
      Name: user.Name,
      seq: user.seq,
      Admin: user.Admin,
    }; // 필요한 필드 추가
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
