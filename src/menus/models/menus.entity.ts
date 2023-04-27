import { Orders } from 'src/orders/models/orders.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Menus {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  food_name: string;

  @Column()
  price: number;

  @Column()
  isAvailable: boolean;

  @OneToMany(() => Orders, (order) => order.menu)
  orders: Orders[];
}
