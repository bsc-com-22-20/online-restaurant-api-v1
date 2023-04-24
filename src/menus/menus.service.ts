import { Injectable } from '@nestjs/common';
import { Menus } from './models/menus.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMenuDto, EditMenuDto } from './dtos';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menus)
    private menusRepository: Repository<Menus>,
  ) {}
  fetchMenus() {
    return this.menusRepository.find();
  }
  createMenu(menu: CreateMenuDto) {
    // food-name: String, price: number, isAvailable: boolean//
    const newMenu = this.menusRepository.create({ ...menu });
    /**
     * {
     * id: generated,
     * food-name:,
     * price,
     * isAvailable
     * }
     */
    // const newMenu = new menu(new Date().toString(), id, food-name, price, isAvailable)
    //this.menu.push(newMenu);

    return this.menusRepository.save(newMenu);
    return 'Harry Kane';
  }
  async deleteMenu(id: number) {
    return this.menusRepository.delete({ id });
  }

  async updateMenu(id: number, menuDetails: EditMenuDto) {
    return this.menusRepository.update({ id }, { ...menuDetails });
  }
}
