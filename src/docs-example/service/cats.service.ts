import { Injectable } from '@nestjs/common';
import { Cat } from '../interfaces/cat.interface';

@Injectable()
export class CatService {
  // @Inject('HTTP_OPTIONS')
  // private readonly httpClient;

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }
  createOne(cat: Cat) {
    this.cats.push(cat);
  }
  findAll(): Cat[] {
    return this.cats;
  }
  LoveCat(): string {
    return '샴 고양이가 좋다';
  }
  AddCat(): string {
    return '고양이 추가';
  }
}
