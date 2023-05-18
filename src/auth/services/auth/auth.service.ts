import { Inject, Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('CUSTOMERS_SERVICE')
    private readonly customersService: CustomersService,
  ) {}
  async validateCustomer(customer_name: string, password: string) {
    console.log('Inside validateCustomer');
    const customersDB = await this.customersService.findCustomerbyCustomer_name(
      customer_name,
    );
    if (customersDB && customersDB.password === password) {
      console.log('Customer Validation success!');
      return customersDB;
    }
    console.log('Customer Validation Failed!');
    return null;
  }
}
