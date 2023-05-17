import { Inject, Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('CUSTOMERS_SERVICE')
    private readonly customersService: CustomersService,
  ) {}
  validateCustomer(customer_name: string, password: string) {}
}
