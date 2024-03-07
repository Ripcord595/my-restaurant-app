import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MenuItem} from "../../models/menu-item.model";

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrl: './menu-details.component.css'
})
export class MenuDetailsComponent {
  menuItems: MenuItem[]= [
    { id: 1, restaurantId: 1, name: 'Soupe à l’oignon', description: 'Classique soupe de l’oignon gratinée au fromage', price: 12, category: 'Entrée' },
    { id: 2, restaurantId: 1, name: 'Salade Niçoise', description: 'Salade fraîche avec des légumes de saison, thon, et œufs', price: 16, category: 'Entrée' },
    { id: 3, restaurantId: 1, name: 'Quiche Lorraine', description: 'Tarte salée aux lardons et fromage', price: 14, category: 'Plat principal' },
    { id: 4, restaurantId: 1, name: 'Boeuf Bourguignon', description: 'Ragoût de bœuf mijoté au vin rouge', price: 22, category: 'Plat principal' },
    { id: 5, restaurantId: 1, name: 'Ratatouille', description: 'Mélange de légumes mijotés', price: 18, category: 'Plat principal' },
    { id: 6, restaurantId: 1, name: 'Crème brûlée', description: 'Dessert à base de crème, d’œufs, de sucre et de vanille', price: 10, category: 'Dessert' },
    { id: 7, restaurantId: 2, name: 'Antipasto', description: 'Assortiment de charcuteries italiennes et de fromages', price: 15, category: 'Entrée' },
    { id: 8, restaurantId: 2, name: 'Carpaccio', description: 'Fines tranches de bœuf cru, roquette et Parmesan', price: 14, category: 'Entrée' },
    { id: 9, restaurantId: 2, name: 'Lasagne', description: 'Couches de pâtes alternées avec sauce à la viande, béchamel et fromage', price: 20, category: 'Plat principal' },
    { id: 10, restaurantId: 2, name: 'Osso buco', description: 'Jarret de veau braisé avec des légumes et du vin blanc', price: 25, category: 'Plat principal' },
    { id: 11, restaurantId: 2, name: 'Risotto al nero di seppia', description: 'Risotto à l’encre de seiche', price: 22, category: 'Plat principal' },
    { id: 12, restaurantId: 2, name: 'Tiramisu', description: 'Dessert aux œufs, mascarpone, café et biscuits', price: 12, category: 'Dessert' },
  ];

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const restaurantId = +this.route.snapshot.params['id'];
    this.menuItems = this.getMenuItems(restaurantId);
  }
  getMenuItems(restaurantId: number): MenuItem[] {
    // 根据restaurantId筛选对应餐厅的菜单项
    return this.menuItems.filter(item => item.restaurantId === restaurantId);
  }

}
