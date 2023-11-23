import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Res,
  Param
} from '@nestjs/common';

import { VehicleService } from './vehicle.service';

@Controller('vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) { }

  @Get('/vehicleType/:id')
  @HttpCode(HttpStatus.OK)
  getVehicleType(@Param('id') id : number, @Res() response :Response) {
    return this.vehicleService.getVehicleType(id,response);
  }

  @Get('/model/:vehicleId')
  @HttpCode(HttpStatus.OK)
  getVehicleModel(@Param('vehicleId') id : number,@Res() response :Response) {
    return this.vehicleService.getVehicleModel(id,response);
  }

  @Get('/wheels')
  @HttpCode(HttpStatus.OK)
  getWheels(@Res() response :Response) {
    return this.vehicleService.getWheels(response);
  }
}
