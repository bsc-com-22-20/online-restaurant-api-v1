import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from './models/customers.entity';
import { CustomersService } from './customers.service';

@Module({
  exports: [CustomersService],
  imports: [TypeOrmModule.forFeature([Customers])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
