import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { MenusService } from './menus.service';
import { EditMenuDto } from './dtos';
import { ApiTags } from '@nestjs/swagger';
import { MenusGuard } from './menus.guard';

@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}
  @Get()
  // localhost:3000/menus
  getMenus() {
    return this.menusService.fetchMenus();
  }

  @Post()
  @UseGuards(MenusGuard)
  // localhost:3000/menus
  addMenuItem(@Body() menu) {
    return this.menusService.createMenu(menu);
  }

  @Delete(':id')
  @UseGuards(MenusGuard)
  // localhost:3000/menus
  async deleteMenu(
    @Param('id', ParseIntPipe) id: number,
    @Body() food_name: String,
  ) {
    return await this.menusService.deleteMenu(id);
  }
  @Patch(':id')
  @UseGuards(MenusGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMenuDto: EditMenuDto,
  ) {
    return await this.menusService.updateMenu(id, updateMenuDto);
  }
}
