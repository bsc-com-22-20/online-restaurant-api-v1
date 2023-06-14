import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusModule } from './menus/menus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Menus } from './menus/models/menus.entity';
import { OrdersModule } from './orders/orders.module';
import { Orders } from './orders/models/orders.entity';
import { CustomersModule } from './customers/customers.module';
import { Customers } from './customers/models/customers.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MenusController } from './menus/menus.controller';
import { OrdersController } from './orders/orders.controller';
import { CustomersController } from './customers/customers.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql9.freemysqlhosting.net',
      port: 3306,
      username: ' sql9626146',
      password: 'ZlUJlMfMRQ',
      database: 'sql9626146',
      entities: [Menus, Orders, Customers],
      synchronize: false,
    }),
    MenusModule,
    OrdersModule,
    CustomersModule,
    AuthModule,
  ],
  // controllers: [
  //   AppController,
  //   AuthController,
  //   MenusController,
  //   OrdersController,
  //   CustomersController,
  // ],
  // providers: [AppService],
})
export class AppModule {}
