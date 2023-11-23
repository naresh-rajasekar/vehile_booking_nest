import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class VehicleService {
    constructor(
        @InjectDataSource() private datasource : DataSource
    ) {}
    
    async getWheels(response) {
        try {
            const wheels = await this.datasource.query(`
            select * from wheeltypetbl
            `)
            if (wheels.length > 0) { 
                response
                .status(HttpStatus.OK)
                .send({
                    statusCode: HttpStatus.OK,
                    wheels : wheels
                })
            }
            else
            {
                throw new HttpException('Wheels data not found', HttpStatus.BAD_REQUEST)
            }

            
        } catch (error) {
            console.log(error);
            response
            .status(500)
            .send({
                message : "Internal Server Error"                   
            })
        }
    }

    async getVehicleType(id : number, response) {
        try {
            const vehicles = await this.datasource.query(`
             select * from vehicletypetbl where wheelTypeId = ${id}
            `) 
            if (vehicles.length > 0) {
                response
                .status(HttpStatus.OK)
                .send({
                    statusCode: HttpStatus.OK,
                    vehicles : vehicles
                })
            } else {
                throw new HttpException('Vehicles data not found', HttpStatus.BAD_REQUEST)
            }
        } catch (error) {
            console.log(error);
            response
            .status(500)
            .send({
                message : "Internal Server Error"                   
            })
        }
    }

    async getVehicleModel(vehicleId : number, response) {
        try {
            const models = await this.datasource.query(`
             select * from modelnametbl where vehicleTypeId = ${vehicleId}
            `) 
            if (models.length > 0) {
                response
                .status(HttpStatus.OK)
                .send({
                    statusCode: HttpStatus.OK,
                    models : models
                })
            } else {
                throw new HttpException('Models data not found', HttpStatus.BAD_REQUEST)
            }
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
