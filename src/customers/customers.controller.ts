import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customers.dto';
import { EditCustomerDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get('customer')

  // localhost:3000/menus
  getCustomers() {
    return this.customersService.fetchCustomers();
  }
  // @UseInterceptors(ClassSerializerInterceptor)
  // @Get(':id')
  // getOneCustomer(@Param('id') id: number) {
  //   return this.customersService.findOne(id);
  // }
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('customer_name')
  async findOneBy(@Param('customer_name') customer_name: string) {
    return this.customersService.findOne(customer_name);
  }

  @Post()
  @UsePipes(ValidationPipe)
  // localhost:3000/menus
  addCustomerItem(@Body() CreateCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomers(CreateCustomerDto);
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
