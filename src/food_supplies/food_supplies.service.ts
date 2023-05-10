import { Injectable } from '@nestjs/common';
import { Food_supplies } from './models/food_supplies.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFood_suppliesDto, EditFood_suppliesDto } from './dtos';

@Injectable()
export class Food_suppliesService {
  constructor(
    @InjectRepository(Food_supplies)
    private food_suppliesRepository: Repository<Food_supplies>,
  ) {}
  fetchFood_supplies() {
    return this.food_suppliesRepository.find();
  }
  createFood_supplies(food_supplies: CreateFood_suppliesDto) {
    const newFood_supplies = this.food_suppliesRepository.create({
      ...food_supplies,
    });
    return this.food_suppliesRepository.save(newFood_supplies);
  }
  async deleteFood_supplies(id: number) {
    return this.food_suppliesRepository.delete({ id });
  }
  async updateFood_supplies(
    id: number,
    food_suppliesDetails: EditFood_suppliesDto,
  ) {
    return this.food_suppliesRepository.update(
      { id },
      { ...food_suppliesDetails },
    );
  }
}
