import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { typeOrmConfig } from './config/environments/typeorm.config';
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { BookingModule } from './modules/booking/booking.module';
@Module({
  imports: [
    ConfigModule.forRoot(
      {
        isGlobal:true,
        envFilePath:[`${process.cwd()}/src/config/environments/.${process.env.NODE_ENV}.env`]
      }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    VehicleModule,
    BookingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
