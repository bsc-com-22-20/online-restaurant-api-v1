import { Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class AuthService {
  constructor(private customersService: CustomersService) {}

  async validateUser(customer_name: string, pass: string) {
    const customer = await this.customersService.findOne(customer_name);
    if (customer && customer.password === pass) {
      const { password, ...result } = customer;
      return result;
    }
    return null;
  }
}
