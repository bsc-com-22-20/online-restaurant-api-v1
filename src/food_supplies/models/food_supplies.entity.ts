import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food_supplies {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  supplier_name: string;

  @Column()
  quantity: number;

  @Column()
  date: Date;

  @Column({ precision: 10, scale: 2 })
  amount: number;
}
