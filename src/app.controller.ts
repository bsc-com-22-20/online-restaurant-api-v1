import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts(): string {
    return this.appService.getPosts();
  }
}
