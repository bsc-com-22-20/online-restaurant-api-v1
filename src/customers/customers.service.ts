import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customers } from './models/customers.entity';
import { CreateCustomerDto } from './dtos/create-customers.dto';
import { EditCustomerDto } from './dtos';

@Injectable()
export class CustomersService {
  logger = new Logger();
  constructor(
    @InjectRepository(Customers)
    private customersRepository: Repository<Customers>,
  ) {}
  fetchCustomers() {
    return this.customersRepository.find();
  }

  createCustomers(customer: CreateCustomerDto) {
    const newCustomer = this.customersRepository.create({ ...customer });
    return this.customersRepository.save(newCustomer);
  }

  async deleteCustomer(id: number) {
    return this.customersRepository.delete({ id });
  }

  async updateCustomer(id: number, customerDetails: EditCustomerDto) {
    return this.customersRepository.update({ id }, { ...customerDetails });
  }

  async findOne(customer_name: string): Promise<Customers | undefined> {
    this.logger.log(customer_name);
    return this.customersRepository.findOneBy({
      // where: {
      customer_name,
      // },
    });
  }
}
