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

@Controller('orders')
export class OrdersController {
  private logger = new Logger(OrdersController.name);
  constructor(private ordersService: OrdersService) {}

  @Get()
  async getAllOrders() {
    return this.ordersService.fetchAllOrder();
  }

  @Get()
  //localhost:3000//
  getOrders(@Body() id) {
    return this.ordersService.fetchOrders(id);
  }

  //localhost:3000//
  @Post(':id')
  addOrderItem(
    @Param('id', ParseIntPipe) id: number,
    @Body() order: CreateOrderDto,
  ) {
    this.logger.log(id);
    return this.ordersService.createOrder(id, order);
  }

  @Delete(':id')
  // localhost:3000/menus
  async deleteOrder(@Param('id', ParseIntPipe) id: number) {
    return await this.ordersService.deleteOrder(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: EditOrderDto,
  ) {
    return await this.ordersService.updateOrder(id, updateOrderDto);
  }
}
