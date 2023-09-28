import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findAll(): string {
    return '고양이';
  }
}
