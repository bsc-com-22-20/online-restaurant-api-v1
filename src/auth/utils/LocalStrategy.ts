import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      customer_nameField: 'email',
    });
  }

  async validate(customer_name: string, password: string) {
    console.log('Inside LoaclStrategy.validate');
    console.log(customer_name);
    console.log(password);
    const customer = this.authService.validateCustomer(customer_name, password);
    if (!customer) {
      throw new UnauthorizedException();
    }
    return customer;
  }
}
