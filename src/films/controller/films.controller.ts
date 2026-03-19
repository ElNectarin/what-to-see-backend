/* eslint-disable prettier/prettier */
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateFilmDto } from '../dto/create-film.dto';
import { FilmsService } from './../service/films.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Express } from 'express';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @UseInterceptors(
    FileInterceptor('filmPhoto', {
      dest: '/home/miri/Документы/what-to-see/what-to-see/what-to-see-backend/src/films/upload',
    }),
  )
  @Post('/createfilm')
  create(
    @Body() createFilmDto: CreateFilmDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return this.filmsService.createFilms({
      ...createFilmDto,
      filmPhoto: file ? file.filename : null,
    });
  }

  @Get('')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOneFilm();
  }
}
