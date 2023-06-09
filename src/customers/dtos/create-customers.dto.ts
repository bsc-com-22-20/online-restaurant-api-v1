import { IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  customer_name: string;
  mobile_number: number;
  address: string;

  email: string;

  @IsNotEmpty()
  password: string;
}
