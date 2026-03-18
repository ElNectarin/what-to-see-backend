import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilmsModule } from './films/films.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get<number>('DB_PORT', 5432),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_DATABASE'),
        autoLoadModels: true,
        synchronize: true,
      }),
    }),
    FilmsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'films', 'upload'),
      serveRoot: '/films/upload',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
