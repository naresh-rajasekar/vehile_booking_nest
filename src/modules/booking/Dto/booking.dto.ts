import {
    IsString,
    IsNumber,
    IsNotEmpty,
    IsDate
}
from 'class-validator';

export class UserDto{
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;
}

export class BookingDto{
    @IsNumber()
    @IsNotEmpty()
    userId: number;
    
    @IsNumber()
    @IsNotEmpty()
    wheelTypeId: number;

    @IsNumber()
    @IsNotEmpty()
    vehicleTypeId: number;
    
    @IsNumber()
    @IsNotEmpty()
    modelNameId: number;

    @IsString()
    @IsNotEmpty()
    startDate: string;

    @IsString()
    @IsNotEmpty()
    endDate : string;
}