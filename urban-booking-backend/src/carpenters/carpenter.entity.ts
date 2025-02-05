import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Carpenter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  experience: number;

  @Column({ unique: true })
  contact: string;
}
