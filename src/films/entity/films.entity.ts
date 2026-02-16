import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table
export class Films extends Model {
  @AutoIncrement
  @PrimaryKey
  @Unique
  @Column
  declare film_id: number;

  @Column
  declare film_name: string;

  @Column({
    type: DataType.TEXT,
  })
  declare film_description: string;

  @Column
  declare film_director: string;

  @Column
  declare film_writer: string;

  @Column
  declare film_year_of_production: string;

  @Column
  declare film_country: string;

  @Column
  declare film_genre: string;

  @Column
  declare film_budget: string;

  @Column
  declare film_fees: string;

  @Column
  declare film_limit_age: string;

  @Column
  declare film_duration: string;
}
