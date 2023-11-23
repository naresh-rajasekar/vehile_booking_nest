import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { BookingEntity } from 'src/entities/booking.entity';
import { UserEntity } from 'src/entities/user.entity';
import { DataSource , Repository} from 'typeorm';

@Injectable()
export class BookingService {
    constructor(
        @InjectDataSource() private datasource: DataSource,
        @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
        @InjectRepository(BookingEntity) private readonly bookingRepository : Repository<BookingEntity>
    ) { }
    
    async addUser(addUserDto, response) {
        try {
            let existingUser = await this.datasource.query(`select * from usertbl where firstName = '${addUserDto.firstName}'
            and lastName = '${addUserDto.lastName}'
            `);
            if (existingUser.length > 0) {
                throw new HttpException('Firstname / Lastname  already exists', HttpStatus.BAD_REQUEST);        
            }else{
                    const user = new UserEntity();
                    user.firstName = addUserDto.firstName;
                    user.lastName = addUserDto.lastName;
                    await this.userRepository.save(user);

                    const userId = await this.datasource.query(`
                    select * from usertbl where firstName = '${addUserDto.firstName}' and lastName = '${addUserDto.lastName}'
                    `)

                    response
                    .status(HttpStatus.OK)
                    .send({
                        statusCode: HttpStatus.OK,
                        user : userId  
                    })
                
            }
        } catch (error) {
            console.log(error);
            response
            .status(error.status||500)
            .send({statusCode:error.status||500,message:error.response||"Internal Server Error"})
        }
    }

    async addBooking(bookingDto, response) {
        try {
            const booking = new BookingEntity();
            booking.wheelTypeId = bookingDto.wheelTypeId;
            booking.vehicleTypeId = bookingDto.vehicleTypeId;
            booking.modelNameId = bookingDto.modelNameId;
            booking.startDate = bookingDto.startDate;
            booking.endDate = bookingDto.endDate;
            booking.userId = bookingDto.userId;
            await this.bookingRepository.save(booking);
            response
            .status(HttpStatus.OK)
            .send({
                statusCode: HttpStatus.OK,
                message  : "Booking added successfully" 
            })


        } catch (error) {
            console.log(error);
            response
                .status(500)
                .send({
                    message : "Internal Server Error"                   
                })
        }
    }
}
