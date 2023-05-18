import { Catch, Injectable, Logger } from '@nestjs/common';
import { Orders } from './models/orders.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto, EditOrderDto } from './dtos';
import { error } from 'console';
import { Menus } from 'src/menus/models/menus.entity';
import { Customers } from 'src/customers/models/customers.entity';

@Injectable()
export class OrdersService {
  private logger = new Logger(OrdersService.name);
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
    @InjectRepository(Menus)
    private menusRepository: Repository<Menus>,
    @InjectRepository(Customers)
    private customersRepository: Repository<Menus>,
  ) {}

  async fetchAllOrder() {
    try {
      return this.ordersRepository.find();
    } catch (error) {
      throw new Error(`Error retrieving orders: ${error.message}`);
    }
  }
  async createOrder(
    orderDetails: CreateOrderDto,
    food_id: number,
    customer_id: number,
  ): Promise<Orders> {
    try {
      const { food_id, customer_id, ...orderdto } = orderDetails;
      const menu = await this.menusRepository.findOneBy({ id: food_id });
      const customer = await this.customersRepository.findOneBy({
        id: customer_id,
      });
      const newOrder = this.ordersRepository.create({
        ...orderDetails,
        menu,
        customer,
      });
      this.logger.log(newOrder);
      return this.ordersRepository.save(newOrder);
    } catch (error) {
      throw new Error('Error creating an order: ${error.message}');
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
      throw new Error(`Error retrieving menus with id ${id}: ${error.message}`);
    }
  }
  async fetchOrdersByCustomerId(id: number): Promise<Orders[]> {
    try {
      return this.ordersRepository.find({
        where: {
          customer: {
            id: id,
          },
        },
      });
    } catch (error) {
      throw new Error(
        `Error retrieving customers with id ${id}: ${error.message}`,
      );
    }
  }
  async createOrderByMenuId(id, order: CreateOrderDto) {
    this.logger.log(id);
    const menu = await this.menusRepository.findOne({ where: { id } });

    this.logger.log({ ...menu });
    // food_id: number, quantity: number, date: Date//
    const date = new Date();
    const newMenu = this.ordersRepository.create({ ...order, menu, date });
    return this.ordersRepository.save(newMenu);
  }

  async createOrderByCustomerId(id, order: CreateOrderDto) {
    this.logger.log(id);
    const customer = await this.customersRepository.findOne({ where: { id } });

    this.logger.log({ ...customer });
    // _id: numder, quantity: number, date: Date//
    const date = new Date();
    const newCustomer = this.ordersRepository.create({
      ...order,
      customer,
      date,
    });
    return this.ordersRepository.save(newCustomer);
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
