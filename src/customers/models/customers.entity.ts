import { Orders } from 'src/orders/models/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
  password: string;

  @Column()
  address: string;

  @OneToMany(() => Orders, (order) => order.customer)
  orders: Orders[];
}
