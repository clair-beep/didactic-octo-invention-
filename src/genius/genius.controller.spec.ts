import { Test, TestingModule } from '@nestjs/testing';
import { GeniusController } from './genius.controller';

describe('GeniusController', () => {
  let controller: GeniusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeniusController],
    }).compile();

    controller = module.get<GeniusController>(GeniusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
