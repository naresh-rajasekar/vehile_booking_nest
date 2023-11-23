import { Controller, Post, HttpCode,HttpStatus, Body, Res  } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDto, UserDto } from './Dto/booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) { }
  
  @Post('/addUser')
  @HttpCode(HttpStatus.OK)
  addUser(@Body() userDto : UserDto, @Res() response : Response) {
    return this.bookingService.addUser(userDto, response);
  }

  @Post('/addBooking')
  @HttpCode(HttpStatus.OK)
  addBooking(@Body() bookingDto : BookingDto, @Res() response : Response) {
    return this.bookingService.addBooking(bookingDto, response);
  }
}
