import { Module } from '@nestjs/common';
import { FilmsService } from './service/films.service';
import { FilmsController } from './controller/films.controller';

@Module({
  imports: [],
  controllers: [FilmsController],
  providers: [FilmsService],
  exports: [FilmsService],
})
export class Films {}