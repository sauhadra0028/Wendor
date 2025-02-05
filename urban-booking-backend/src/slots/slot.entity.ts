// src/slots/slot.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from 'typeorm';
import { Carpenter } from 'src/carpenters/carpenter.entity';

// Define an ENUM to control slot status values
export enum SlotStatus {
  AVAILABLE = 'available',
  BOOKED = 'booked',
}

@Entity()
export class Slot {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Carpenter, { eager: true })
  carpenter: Carpenter;

  @Column()
  startTime: Date;

  @Column()
  endTime: Date;

  // Add an index on the status column for faster queries
  @Index('idx_slot_status')
  @Column({
    type: 'enum',
    enum: SlotStatus,
    default: SlotStatus.AVAILABLE,
  })
  status: SlotStatus;
}
