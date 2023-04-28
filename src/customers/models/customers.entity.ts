import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  address: string;
}
