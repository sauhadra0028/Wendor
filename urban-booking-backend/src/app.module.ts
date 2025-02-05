import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carpenter } from './carpenters/carpenter.entity';
import { Slot } from './slots/slot.entity';
import { Reservation } from './reservations/reservation.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT ?? '5432', 10),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Carpenter, Slot, Reservation], // Explicitly listing entities
      synchronize: true, // Automatically syncs your schema with the database
      logging: true,     // Enables logging so you can see SQL queries in the console
    }),
    // Ensure that you import your modules (CarpentersModule, SlotsModule, ReservationsModule) here.
  ],
})
export class AppModule {}
