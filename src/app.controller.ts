import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AfricanCountriesAndTerritories } from './users/enums/country.enum';

@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/countries')
  getCountries() {
    return AfricanCountriesAndTerritories;
  }
}
