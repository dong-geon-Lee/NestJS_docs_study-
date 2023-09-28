import {
  Controller,
  Get,
  Header,
  HttpCode,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { CatService } from './cats.service';
import { Request } from 'express';

@Controller('api/cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get('/')
  findAll(): string {
    return this.catService.findAll();
  }

  @Get('/love')
  @Redirect('https://nestjs.com')
  LoveCat(@Req() req: Request): string {
    console.log(req.body);
    return this.catService.LoveCat();
  }

  @Post('/add')
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      console.log(`${version} 맞아`);
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
