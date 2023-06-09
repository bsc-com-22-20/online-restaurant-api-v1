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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Customers')
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @ApiOperation({
    summary: 'getting a customer',
    description:
      'This route displays all the lists of the customers available in the database. you can only get customers if you have added them in the database ',
    operationId: '',
  })
  @Get()

  // localhost:3000/menus
  getCustomers() {
    return this.customersService.fetchCustomers();
  }

  // @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({
    summary: 'getting a customer by customer name',
    description:
      'This route displays all the lists of the customers available in the database. you can only get customers if you have added them in the database by specifying the customer name ',
    operationId: '',
  })
  @Get('customer_name')
  async findOneBy(@Param('customer_name') customer_name: string) {
    return this.customersService.findCustomerbyCustomer_name(customer_name);
  }

  @ApiOperation({
    summary: 'adding a customer',
    description:
      'This route will create a new customer to all lists of the customers available in the database. you can only create a customer using the syntax e.g {"customer_name": "ellen khumula ","mobile_number": 8883425955,"email": "ellenkhumula@gmail.com","password": "123456","address": "lilongwe } ',
    operationId: '',
  })
  @Post()
  //@UsePipes(ValidationPipe)
  // localhost:3000/menus
  addCustomerItem(@Body() CreateCustomerDto: CreateCustomerDto) {
    return this.customersService.createCustomers(CreateCustomerDto);
  }

  @ApiOperation({
    summary: ' delete a customer',
    description:
      'This route will delete a customer that we created and is  available in the database. a customer can  be deleted by using the same syntax used when creating a customer but here you specify the id of customer in the database you want to delete ',
    operationId: '',
  })
  @Delete(':id')
  // localhost:3000/menus
  async deleteCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() address: String,
  ) {
    return await this.customersService.deleteCustomer(id);
  }

  @ApiOperation({
    summary: ' update a customer',
    description:
      'This route will update a  customer that we created and is available in the database. a customer can  be updated by using the same syntax used when creating a customer but here you specify the id of customer in the database you want to update  ',
    operationId: '',
  })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCustomersDto: EditCustomerDto,
  ) {
    return await this.customersService.updateCustomer(id, updateCustomersDto);
  }
}
