import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { BookingEntity } from 'src/entities/booking.entity';
import { UserEntity } from 'src/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookingEntity,
      UserEntity
    ]),
    HttpModule
  ],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
