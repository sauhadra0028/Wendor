import { Module } from '@nestjs/common';
import { CarpentersService } from './carpenters.service';
import { CarpentersController } from './carpenters.controller';

@Module({
  providers: [CarpentersService],
  controllers: [CarpentersController]
})
export class CarpentersModule {}
