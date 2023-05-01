import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('fetch-data')
  async fetchData() {
    const data = await this.appService.getData();
    return data;
  }
}
