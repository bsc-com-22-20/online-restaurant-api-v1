import { Test, TestingModule } from '@nestjs/testing';
import { Food_suppliesController } from './food_supplies.controller';

describe('Food_suppliesController', () => {
  let controller: Food_suppliesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Food_suppliesController],
    }).compile();

    controller = module.get<Food_suppliesController>(Food_suppliesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
