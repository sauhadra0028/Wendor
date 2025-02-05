// src/reservations/reservation.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index } from 'typeorm';
import { Slot } from 'src/slots/slot.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // Replace with your actual user model or logic if needed

  // Link each reservation to a slot and add an index on this foreign key for performance
  @ManyToOne(() => Slot, { eager: true })
  @Index('idx_reservation_slot')
  slot: Slot;

  @Column({ default: 'booked' })
  status: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
