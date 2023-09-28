import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { CatService } from './cats.service';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

@Controller('api/cats')
export class CatsController {
  constructor(private readonly catService: CatService) {}

  @Get('/')
  findAll(): string {
    return this.catService.findAll();
  }

  @Post('/add')
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('/love')
  @Redirect('https://nestjs.com')
  LoveCat(@Req() req: Request): string {
    console.log(req.body);
    return this.catService.LoveCat();
  }

  @Get('/docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      console.log(`${version} 맞아`);
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    id = '312312'; // req.body로 받았다면
    return `${id} 아이디를 반환하시오`;
  }

  @Get()
  async findFool(): Promise<any[]> {
    return [];
  }

  @Get()
  findFool2(): Observable<any[]> {
    return of([]);
  }
}
