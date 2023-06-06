import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { JwtService } from '@nestjs/jwt';
import { Customers } from 'src/customers/models/customers.entity';

@Injectable()
export class AuthService {
  constructor(
    private customerRepository: CustomersService,
    private jwtService: JwtService,
  ) {}

  async signIn(id, pass) {
    const user = await this.customerRepository.singleCustomer(id);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.customer_name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  get;
}
