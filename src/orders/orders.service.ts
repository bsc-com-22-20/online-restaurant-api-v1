import { Catch, Injectable, Logger } from '@nestjs/common';
import { Orders } from './models/orders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto, EditOrderDto } from './dtos';
import { error } from 'console';
import { Menus } from 'src/menus/models/menus.entity';

@Injectable()
export class OrdersService {
  private logger = new Logger(OrdersService.name);
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(Menus)
    private menusRepository: Repository<Menus>,
  ) {}

  async fetchAllOrder() {
    try {
      return this.ordersRepository.find();
    } catch (error) {
      throw new Error(`Error retrieving orders: ${error.message}`);
    }
  }

  async fetchOrders(id: number): Promise<Orders[]> {
    try {
      return this.ordersRepository.find({
        where: {
          menu: {
            id: id,
          },
        },
      });
    } catch (error) {
      throw new Error(
        `Error retrieving menus from board with id ${id}: ${error.message}`,
      );
    }
  }

  async createOrder(id, order: CreateOrderDto) {
    this.logger.log(id);
    const menu = await this.menusRepository.findOne({ where: { id } });
    this.logger.log({ ...menu });
    // food_id: numder, quantity: number, date: Date//
    const date = new Date();
    const newMenu = this.ordersRepository.create({ ...order, menu, date });
    return this.ordersRepository.save(newMenu);
  }

  async deleteOrder(id: number) {
    return this.ordersRepository.delete({ id });
  }

  // async(id: number, orderDetails: EditOrderDto) {}
  async updateOrder(id: number, orderDetails: EditOrderDto) {
    try {
      return this.ordersRepository.update({ id }, { ...orderDetails });
    } catch (error) {}
  }
}
