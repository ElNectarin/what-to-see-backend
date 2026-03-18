/* eslint-disable prettier/prettier */
import { CreateFilmDto } from './../dto/create-film.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Films } from '../entity/films.entity';

@Injectable()
export class FilmsService {
  constructor(
    @InjectModel(Films)
    private filmsModel: typeof Films,
  ) {}

  async createFilms(createFilmDto: Partial<CreateFilmDto>): Promise<Films> {
    const film = new Films({ ...createFilmDto });
    return await film.save();
  }

  async findOneFilm() {
    const filmsCount = (await this.filmsModel.count({ col: 'id' })).toString()
    const randomFilm = Math.floor(Math.random() * (+filmsCount)) + 1
    console.log(randomFilm)
    return await this.filmsModel.findOne({
      where: {
        id: randomFilm,
      },
    });
  }
}
