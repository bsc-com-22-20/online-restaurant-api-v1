import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customers.dto';
import { EditCustomerDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get()

  // localhost:3000/menus
  getCustomers() {
    return this.customersService.fetchCustomers();
  }

  @Get(':id')
  getOneCustomer(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Post()
  // localhost:3000/menus
  addCustomerItem(@Body() customer) {
    return this.customersService.createCustomers(customer);
  }

  @Delete(':id')
  // localhost:3000/menus
  async deleteCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() address: String,
  ) {
    return await this.customersService.deleteCustomer(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomersDto: EditCustomerDto,
  ) {
    return await this.customersService.updateCustomer(id, updateCustomersDto);
  }
}
