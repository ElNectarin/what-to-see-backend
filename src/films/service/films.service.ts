/* eslint-disable prettier/prettier */
import { CreateFilmDto } from './../dto/create-film.dto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Films } from '../entity/films.entity';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(Films)
    private filmsModel: typeof Films,
  ) {}

  async createFilms(createFilmDto: CreateFilmDto): Promise<Films> {
    try {
      const film = new Films({ ...createFilmDto });
      return await film.save();
    } catch (error) {
      if (
        error instanceof ConflictException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      console.error('Ошибка при добавлении фильма: ', error);
      throw new InternalServerErrorException('Не удалось добавить фильм');
    }
  }

  async findOneFilm() {
    try {
      const filmsCount = (
        await this.filmsModel.count({ col: 'id' })
      ).toString();
      const randomFilm = Math.floor(Math.random() * +filmsCount) + 1;
      return await this.filmsModel.findOne({
        where: {
          id: randomFilm,
        },
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Не удалось найти фильм');
    }
  }
}
