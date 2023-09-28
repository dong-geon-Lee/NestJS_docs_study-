import { Controller, Get } from '@nestjs/common';
import { CatService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(): string {
    return this.catService.findAll();
  }
}
