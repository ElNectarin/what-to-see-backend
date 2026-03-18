import { Module } from '@nestjs/common';
import { FilmsService } from './service/films.service';
import { FilmsController } from './controller/films.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Films } from './entity/films.entity';

@Module({
  imports: [SequelizeModule.forFeature([Films])],
  controllers: [FilmsController],
  providers: [FilmsService],
  exports: [FilmsService],
})
export class FilmsModule {}
