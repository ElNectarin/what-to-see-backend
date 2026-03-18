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
  declare id: number;

  @Column
  declare filmName: string;

  @Column({
    type: DataType.TEXT,
  })
  declare filmDescription: string;

  @Column
  declare filmDirector: string;

  @Column
  declare filmWriter: string;

  @Column
  declare filmYearOfProduction: string;

  @Column
  declare filmCountry: string;

  @Column
  declare filmGenre: string;

  @Column
  declare filmBudget: string;

  @Column
  declare filmFees: string;

  @Column
  declare filmLimitAge: string;

  @Column
  declare filmDuration: string;

  @Column
  declare filmPhoto: string;
}
