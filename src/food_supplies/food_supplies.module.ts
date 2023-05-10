import { Module } from '@nestjs/common';
import { Food_suppliesController } from './food_supplies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food_supplies } from './models/food_supplies.entity';
import { Food_suppliesService } from './food_supplies.service';

@Module({
  imports: [TypeOrmModule.forFeature([Food_supplies])],
  controllers: [Food_suppliesController],
  providers: [Food_suppliesService],
})
export class Food_suppliesModule {}
