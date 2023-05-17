import { Orders } from 'src/orders/models/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
// export class CustomersEntity {
export class Customers {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  customer_name: string;

  @Column()
  mobile_number: number;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
  constructor(partial: Partial<Customers>) {
    Object.assign(this, partial);
  }

  @Column()
  address: string;

  @OneToMany(() => Orders, (order) => order.customer)
  orders: Orders[];
}
