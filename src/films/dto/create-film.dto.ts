import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFilmDto {
  id!: number;

  @IsString()
  @IsNotEmpty()
  filmName!: string;

  @IsString()
  @IsNotEmpty()
  filmDescription!: string;

  @IsString()
  @IsNotEmpty()
  filmDirector!: string;

  @IsString()
  @IsNotEmpty()
  filmWriter!: string;

  @IsString()
  @IsNotEmpty()
  filmYearOfProduction!: string;

  @IsString()
  @IsNotEmpty()
  filmCountry!: string;

  @IsString()
  @IsNotEmpty()
  filmGenre!: string;

  @IsString()
  @IsNotEmpty()
  filmBudget!: string;

  @IsString()
  @IsNotEmpty()
  filmFees!: string;

  @IsString()
  @IsNotEmpty()
  filmLimitAge!: string;

  @IsString()
  @IsNotEmpty()
  filmDuration!: string;

  filmPhoto?: string | null;
}
