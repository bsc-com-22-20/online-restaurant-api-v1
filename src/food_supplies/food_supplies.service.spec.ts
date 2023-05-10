import { Test, TestingModule } from '@nestjs/testing';
import { Food_suppliesService } from './food_supplies.service';

describe('FoodSuppliesService', () => {
  let service: Food_suppliesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Food_suppliesService],
    }).compile();

    service = module.get<Food_suppliesService>(Food_suppliesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
