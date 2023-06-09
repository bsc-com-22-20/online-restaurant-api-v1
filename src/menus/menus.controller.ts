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
import { CreateMenuDto, EditMenuDto } from './dtos';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
// import { MenusGuard } from './menus.guard';

@ApiTags('Menus')
@Controller('menus')
export class MenusController {
  constructor(private menusService: MenusService) {}

  @ApiOperation({
    summary: 'getting a menu',
    description:
      'This route displays all the lists of the menus available in the database. you can only get menus if you have added them in the database ',
    operationId: '',
  })
  @Get()
  // localhost:3000/menus
  getMenus() {
    return this.menusService.fetchMenus();
  }

  @ApiOperation({
    summary: 'adding a menu',
    description:
      'This route will create a new menu to all lists of the menus available in the database. you can only create a menu using the syntax e.g {"food_name": "Rice, chicken and vegetables ","price": 20000, "isAvailable": "true"} ',
    operationId: '',
  })
  @Post()
  // @UseGuards(MenusGuard)
  // localhost:3000/menus
  addMenuItem(@Body() menu: CreateMenuDto) {
    return this.menusService.createMenu(menu);
  }

  @ApiOperation({
    summary: ' delete a menu',
    description:
      'This route will delete a  menu that we created and is  available in the database. a menu  can only be deleted by the owner of the API  by specifying the id of that menu in the database ',
    operationId: '',
  })
  @Delete(':id')
  // @UseGuards(MenusGuard)
  // localhost:3000/menus
  async deleteMenu(
    @Param('id', ParseIntPipe) id: number,
    @Body() food_name: String,
  ) {
    return await this.menusService.deleteMenu(id);
  }

  @ApiOperation({
    summary: ' update a menu',
    description:
      'This route will update a  menu that we created and is available in the database. a menu can only be updated by the owner of the API by specifying the id of that menu in the database ',
    operationId: '',
  })
  @Patch(':id')
  // @UseGuards(MenusGuard)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMenuDto: EditMenuDto,
  ) {
    return await this.menusService.updateMenu(id, updateMenuDto);
  }
}
