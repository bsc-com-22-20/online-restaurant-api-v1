import { Customers } from 'src/customers/models/customers.entity';
import { Menus } from 'src/menus/models/menus.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  food_id: number;

  @Column()
  customer_id: number;

  @Column()
  quantity: number;

  @Column()
  date: Date;

  @Column()
  deliverly: boolean;

  @Column()
  payment: boolean;

  @ManyToOne(() => Menus, (menu) => menu.orders, { nullable: false })
  menu: Menus;

  @ManyToOne(() => Customers, (customer) => customer.orders, {
    nullable: false,
  })
  customer: Customers;
}
