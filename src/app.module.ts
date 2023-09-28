import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatService],
})
export class AppModule {}
