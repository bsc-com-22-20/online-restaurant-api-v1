import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Food_suppliesService } from './food_supplies.service';
import { Food_supplies } from './models/food_supplies.entity';
import { EditFood_suppliesDto } from './dtos';

@Controller('food_supplies')
export class Food_suppliesController {
  constructor(private food_suppliesService: Food_suppliesService) {}
  @Get()

  // localhost:3000/menus
  getFood_supplies() {
    return this.food_suppliesService.fetchFood_supplies();
  }
  @Post()
  // localhost:3000/menus
  addFood_suppliesItem(@Body() Food_supplies) {
    return this.food_suppliesService.createFood_supplies(Food_supplies);
  }
  @Delete(':id')
  // localhost:3000/menus
  async deleteCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Body() quantity: number,
  ) {
    return await this.food_suppliesService.deleteFood_supplies(id);
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFood_suppliesDto: EditFood_suppliesDto,
  ) {
    return await this.food_suppliesService.updateFood_supplies(
      id,
      updateFood_suppliesDto,
    );
  }
}
