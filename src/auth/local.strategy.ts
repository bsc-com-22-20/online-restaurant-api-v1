import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(customer_name: string, password: string) {
    const customer = await this.authService.validateUser(
      customer_name,
      password,
    );
    if (!customer) {
      throw new UnauthorizedException();
    }
    return customer;
  }
}
