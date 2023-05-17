import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateCustomerDto {
  customer_name: string;
  mobile_number: number;
  address: string;
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
