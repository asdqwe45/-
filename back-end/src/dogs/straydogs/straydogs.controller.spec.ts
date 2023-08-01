import { Test, TestingModule } from '@nestjs/testing';
import { StraydogsController } from './straydogs.controller';

describe('StraydogsController', () => {
  let controller: StraydogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StraydogsController],
    }).compile();

    controller = module.get<StraydogsController>(StraydogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
