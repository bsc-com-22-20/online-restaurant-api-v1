import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customers.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get()

  // localhost:3000/menus
  getCustomers() {
    return this.customersService.fetchCustomers();
  }

  @Post()
  // localhost:3000/menus
  addMenuItem(@Body() customer) {
    return this.customersService.createCustomers(customer);
  }

  @Delete(':id')
  // localhost:3000/menus
  async deleteCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() address: String,
  ) {
    return await this.customersService.deleteMenu(id);
  }
}
