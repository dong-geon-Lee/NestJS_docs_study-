import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  findAll(): string {
    return '고양이는 작지만 강력하다';
  }
  LoveCat(): string {
    return '샴 고양이가 좋다';
  }
  AddCat(): string {
    return '고양이 추가';
  }
}
