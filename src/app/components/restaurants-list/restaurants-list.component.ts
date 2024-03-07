import { Component } from '@angular/core';
import {Restaurant} from "../../models/restaurant.model";

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrl: './restaurants-list.component.css'
})
export class RestaurantsListComponent {
  rtitle = 'my-restaurant-app';
  restaurants: Restaurant[] = [
    {
      id: 1,
      name: 'Le Gourmet Français',
      description: 'Cuisine française traditionnelle et modernisée',
      address: '123 Rue de la Bonne Bouffe, Paris',
      phone: '01 23 45 67 89',
      category: 'Française',
    },
    {
      id: 2,
      name: 'La Trattoria Romana',
      description: 'Authentique cuisine italienne avec des pâtes faites maison et des pizzas cuites au four à bois',
      address: 'Via Roma 45, Rome, Italie',
      phone: '+39 06 12345678',
      category: 'Italienne',
    },
    {
      id: 3,
      name: 'El Asador de Pedro',
      description: 'Spécialités espagnoles, notamment tapas variés et paella',
      address: 'Calle de la Paella, 22, Madrid, Espagne',
      phone: '+34 91 2345678',
      category: 'Espagnole',
    },
    {
      id: 4,
      name: 'Tokyo Sushi',
      description: 'Sushi et sashimi frais préparés par des chefs expérimentés',
      address: '3 Chome-14-5 Roppongi, Minato City, Tokyo, Japon',
      phone: '+81 3-1234-5678',
      category: 'Japonaise',
    },
    {
      id: 5,
      name: 'New Delhi Dhaba',
      description: 'Plats riches en saveurs de l’Inde, avec une grande sélection de currys',
      address: '15 Khan Market, New Delhi, Inde',
      phone: '+91 11 24613579',
      category: 'Indienne',
    },
    {
      id: 6,
      name: 'Beijing Baozi',
      description: 'Baozi cuits à la vapeur et autres dim sum dans une ambiance familiale',
      address: '56 Dazhalan St, Xicheng District, Beijing, Chine',
      phone: '+86 10 12345678',
      category: 'Chinoise',
    },
    {
      id: 7,
      name: 'The Great Greek',
      description: 'Moussaka, souvlaki, et salade grecque traditionnelle, avec des ingrédients importés de Grèce',
      address: '27 Apollonos St, Athènes, Grèce',
      phone: '+30 21 1234567',
      category: 'Grecque',
    },
    {
      id: 8,
      name: 'Cairo Kebab House',
      description: 'Kebabs égyptiens épicés et mezzes dans une atmosphère du Moyen-Orient',
      address: '44 Sharia Al Haram, Giza, Égypte',
      phone: '+20 2 37612345',
      category: 'Égyptienne',
    },
    {
      id: 9,
      name: 'Mexicana Cantina',
      description: 'Tacos, enchiladas et margaritas authentiques, avec des soirées salsa hebdomadaires',
      address: '101 Avenida Revolución, Mexico City, Mexique',
      phone: '+52 55 12345678',
      category: 'Mexicaine',
    }

  ];

  constructor() {
  }

}
