import { TypeOrmModuleOptions, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as fs from 'fs'

export default class TypeOrmConfig{
  static getOrmConfig(configService:ConfigService): TypeOrmModuleOptions{
    return {
      type: 'mysql',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASS'),
      database: configService.get('DB_DATABASE'),
      entities: [`${__dirname}/../**/*.entity.{js,ts}`],
      synchronize: configService.get('DB_SYNCHRONIZE'),
      autoLoadEntities: true
    }
  }
}
export const typeOrmConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService:ConfigService): 
  Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject:[ConfigService]
};
