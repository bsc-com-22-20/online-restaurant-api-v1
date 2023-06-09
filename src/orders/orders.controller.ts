import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './models/orders.entity';
import { CreateOrderDto, EditOrderDto } from './dtos';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  private logger = new Logger(OrdersController.name);
  constructor(private ordersService: OrdersService) {}

  @ApiOperation({
    summary: 'getting an order',
    description:
      'This route displays all the lists of the orders available in the database. you can only get orders if you have added them in the database ',
    operationId: '',
  })
  @Get()
  async getAllOrders() {
    return this.ordersService.fetchAllOrder();
  }
  @ApiOperation({
    summary: 'getting an order',
    description:
      'This route displays all the lists of the orders available in the database. you can only get orders if you have added them in the database ',
    operationId: '',
  })
  @Get()
  //localhost:3000//
  getOrders(@Body() id) {
    return this.ordersService.fetchOrders(id);
  }
  @ApiOperation({
    summary: 'getting an order by id',
    description:
      'This route displays all the lists of the order available in the database. you can only get an order if you have added them in the database by specifying the order id ',
    operationId: '',
  })
  @Get(':id')
  getOneOrder(@Param('id') id: number) {
    return this.ordersService.fetchOrders(id);
  }

  @ApiOperation({
    summary: 'adding an order',
    description:
      'This route will create a new order to all lists of the orders available in the database. you can only create an order  by specifying the menuId and customerId and also using the syntax e.g {"quantity": 5,"deliverly": "true","payment": "true"} ',
    operationId: '',
  })
  //localhost:3000//
  @Post(':foodId/:customerId')
  addOrderItem(
    @Param('foodId', ParseIntPipe) foodId: number,
    @Param('customerId', ParseIntPipe) cusomerId: number,
    @Body() order: CreateOrderDto,
  ) {
    this.logger.log({ foodId, cusomerId });
    return this.ordersService.createOrder(order, foodId, cusomerId);
  }

  @ApiOperation({
    summary: ' delete an oerder',
    description:
      'This route will delete an order that we created and is  available in the database. an order can  be deleted by specifying the id of an order in the database you want to delete ',
    operationId: '',
  })
  @Delete(':id')
  // localhost:3000/menus
  async deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return await this.ordersService.deleteOrder(id);
  }

  @ApiOperation({
    summary: ' update an order',
    description:
      'This route will update an order that we created and is available in the database. an order can  be updated by using the same syntax used when creating an order but here you specify the id of an order in the database you want to update',
    operationId: '',
  })
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: EditOrderDto,
  ) {
    return await this.ordersService.updateOrder(id, updateOrderDto);
  }
}
