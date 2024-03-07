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
    { id: 1, restaurantId: 1, name: 'Soupe à l’oignon', description: 'Classique soupe de l’oignon gratinée au fromage', price: 12, category: 'Entrée' ,imageUrl: "/assets/onionsoup.png"},
    { id: 2, restaurantId: 1, name: 'Salade Niçoise', description: 'Salade fraîche avec des légumes de saison, thon, et œufs', price: 16, category: 'Entrée',imageUrl: "/assets/onionsoup.png"},
    { id: 3, restaurantId: 1, name: 'Quiche Lorraine', description: 'Tarte salée aux lardons et fromage', price: 14, category: 'Plat principal',imageUrl: "/assets/onionsoup.png"},
    { id: 4, restaurantId: 1, name: 'Boeuf Bourguignon', description: 'Ragoût de bœuf mijoté au vin rouge', price: 22, category: 'Plat principal',imageUrl: "/assets/onionsoup.png"},
    { id: 5, restaurantId: 1, name: 'Ratatouille', description: 'Mélange de légumes mijotés', price: 18, category: 'Plat principal', imageUrl: "/assets/onionsoup.png" },

    { id: 6, restaurantId: 1, name: 'Crème brûlée', description: 'Dessert à base de crème, d’œufs, de sucre et de vanille', price: 10, category: 'Dessert' ,imageUrl: "/assets/onionsoup.png"},
    { id: 7, restaurantId: 2, name: 'Antipasto', description: 'Assortiment de charcuteries italiennes et de fromages', price: 15, category: 'Entrée',imageUrl: "/assets/onionsoup.png" },
    { id: 8, restaurantId: 2, name: 'Carpaccio', description: 'Fines tranches de bœuf cru, roquette et Parmesan', price: 14, category: 'Entrée' ,imageUrl: "/assets/onionsoup.png"},
    { id: 9, restaurantId: 2, name: 'Lasagne', description: 'Couches de pâtes alternées avec sauce à la viande, béchamel et fromage', price: 20, category: 'Plat principal' ,imageUrl: "/assets/onionsoup.png"},
    { id: 10, restaurantId: 2, name: 'Osso buco', description: 'Jarret de veau braisé avec des légumes et du vin blanc', price: 25, category: 'Plat principal',imageUrl: "/assets/onionsoup.png" },
    { id: 11, restaurantId: 2, name: 'Risotto al nero di seppia', description: 'Risotto à l’encre de seiche', price: 22, category: 'Plat principal',imageUrl: "/assets/onionsoup.png" },
    { id: 12, restaurantId: 2, name: 'Tiramisu', description: 'Dessert aux œufs, mascarpone, café et biscuits', price: 12, category: 'Dessert',imageUrl: "/assets/onionsoup.png" },
    // Plats pour le restaurant espagnol (ID 3)
    { id: 13, restaurantId: 3, name: 'Paella Valenciana', description: 'Riz savoureux aux fruits de mer et poulet.', price: 35, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 14, restaurantId: 3, name: 'Gazpacho', description: 'Soupe froide de tomates, idéale pour l\'été.', price: 15, category: 'Entrée', imageUrl: '/assets/onionsoup.png' },
    { id: 15, restaurantId: 3, name: 'Churros con chocolate', description: 'Pâtisserie frite à tremper dans du chocolat chaud.', price: 12, category: 'Dessert', imageUrl: '/assets/onionsoup.png' },

  // Plats pour le restaurant japonais (ID 4)
    { id: 16, restaurantId: 4, name: 'Sushi Moriwase', description: 'Assortiment de sushi chef\'s choice.', price: 50, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 17, restaurantId: 4, name: 'Ramen Tonkotsu', description: 'Bouillon de porc riche avec nouilles ramen.', price: 20, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 18, restaurantId: 4, name: 'Matcha Ice Cream', description: 'Glace traditionnelle au thé vert matcha.', price: 8, category: 'Dessert', imageUrl: '/assets/onionsoup.png' },

    // Plats pour le restaurant indien (ID 5)
    { id: 19, restaurantId: 5, name: 'Butter Chicken', description: 'Poulet mijoté dans une sauce crémeuse au beurre et tomate.', price: 18, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 20, restaurantId: 5, name: 'Palak Paneer', description: 'Fromage cottage dans une sauce épinards épices.', price: 15, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 21, restaurantId: 5, name: 'Gulab Jamun', description: 'Boules de pâte frites trempées dans un sirop de sucre.', price: 6, category: 'Dessert', imageUrl: '/assets/onionsoup.png' },

// Plats pour le restaurant chinois (ID 6)
    { id: 22, restaurantId: 6, name: 'Canard laqué de Pékin', description: 'Canard rôti servi avec des crêpes, des oignons verts et du hoisin.', price: 40, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 23, restaurantId: 6, name: 'Mapo Tofu', description: 'Tofu épicé avec sauce de soja et porc haché.', price: 14, category: 'Plat principal', imageUrl: '/assets/onionsoup.png' },
    { id: 24, restaurantId: 6, name: 'Xiao Long Bao', description: 'Brioches vapeur farcies à la soupe et porc.', price: 10, category: 'Entrée', imageUrl: '/assets/onionsoup.png' },

// Continuer pour chaque restaurant...

    // Continuer pour chaque restaurant...
    // atouter puls de items.

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
