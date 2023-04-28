import { Menus } from 'src/menus/models/menus.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  food_id: number;

  @Column()
  quantity: number;

  @Column()
  date: Date;

  @ManyToOne(() => Menus, (menu) => menu.orders, { nullable: false })
  menu: Menus;
}
 