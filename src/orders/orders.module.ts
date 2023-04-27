import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './models/orders.entity';
import { Menus } from 'src/menus/models/menus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders, Menus])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
