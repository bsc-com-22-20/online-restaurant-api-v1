import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { CustomersService } from 'src/customers/customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customers } from 'src/customers/models/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customers])],
  controllers: [AuthController],
  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService,
    },
    {
      provide: 'CUSTOMERS_SERVICE',
      useClass: CustomersService,
    },
  ],
})
export class AuthModule {}
