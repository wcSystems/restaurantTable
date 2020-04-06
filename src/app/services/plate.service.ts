import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Ingredient } from '../models/ingredient';
import { FoodDrink } from '../models/food-drink';

@Injectable({
  providedIn: 'root'
})
export class PlateService {

  private categories: Category[];
  private ingredients: Ingredient[];
  private foodDrinks: FoodDrink[];

  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'ENTRADAS',
        image: './assets/img/categories/1_entrada.jpg',
        parent: null
      },
      {
        id: 2,
        name: 'ENSALADAS',
        image: './assets/img/categories/2_ensalada.jpg',
        parent: null
      },
      {
        id: 3,
        name: 'SANDWICHES',
        image: './assets/img/categories/3_sandwich.jpg',
        parent: null
      },
      {
        id: 4,
        name: 'HAMBURGUESAS',
        image: './assets/img/categories/4_hamburguesas.jpg',
        parent: null
      },
      {
        id: 5,
        name: 'POSTRES',
        image: './assets/img/categories/5_desserts.jpg',
        parent: null
      },
      {
        id: 6,
        name: 'BEBIDAS',
        image: './assets/img/categories/6_drinks.jpg',
        parent: null
      },
      {
        id: 7,
        name: 'Pies',
        image: './assets/img/postres/1_desserts.jpg',
        parent: 5
      },
      {
        id: 8,
        name: 'Brownies',
        image: './assets/img/postres/2_desserts.jpg',
        parent: 5
      },
      {
        id: 9,
        name: 'Tortas',
        image: './assets/img/postres/3_desserts.jpg',
        parent: 5
      },
      {
        id: 10,
        name: 'Cheese cake',
        image: './assets/img/postres/4_desserts.jpg',
        parent: 5
      },
      {
        id: 11,
        name: 'Varios',
        image: './assets/img/postres/6_desserts.jpg',
        parent: 5
      },
      {
        id: 12,
        name: 'Toppings',
        image: './assets/img/postres/7_desserts.jpg',
        parent: 5
      },
      {
        id: 13,
        name: 'Jugos naturales',
        image: './assets/img/bebidas/3_drinks.jpg',
        parent: 6
      },
      {
        id: 14,
        name: 'Smoothie',
        image: './assets/img/bebidas/1_drinks.jpg',
        parent: 6
      },
      {
        id: 15,
        name: 'Refrescos',
        image: './assets/img/bebidas/6_drinks.jpg',
        parent: 6
      },
      {
        id: 16,
        name: 'Café',
        image: './assets/img/bebidas/2_drinks.jpg',
        parent: 6
      }
    ];

    this.ingredients = [
      {
        id: 1,
        description: 'Mix de lechuga',
        image: ''
      },
      {
        id: 2,
        description: 'Pechuga de pollo a la plancha',
        image: ''
      },
      {
        id: 3,
        description: 'Queso amarillo',
        image: ''
      },
      {
        id: 4,
        description: 'Jamón de pavo',
        image: ''
      },
      {
        id: 5,
        description: 'Tocineta crujiente',
        image: ''
      },
      {
        id: 6,
        description: 'Pimentón asado',
        image: ''
      },
      {
        id: 7,
        description: 'Aguacate',
        image: ''
      },
      {
        id: 8,
        description: 'Aderezo Neo',
        image: ''
      },
      {
        id: 9,
        description: 'Croutones',
        image: ''
      },
      {
        id: 10,
        description: 'Queso parmesano',
        image: ''
      },
      {
        id: 11,
        description: 'Aderezo Cesar',
        image: ''
      },
      {
        id: 12,
        description: 'Cebolla caramelizada',
        image: ''
      },
      {
        id: 13,
        description: 'Maíz',
        image: ''
      },
      {
        id: 14,
        description: 'Champiñones salteados',
        image: ''
      },
      {
        id: 15,
        description: 'Tomate',
        image: ''
      },
      {
        id: 16,
        description: 'Queso de cabra',
        image: ''
      },
      {
        id: 17,
        description: 'Aderezo Ranch',
        image: ''
      },
      {
        id: 18,
        description: 'Queso Mozzarella',
        image: ''
      },
      {
        id: 19,
        description: 'Pesto',
        image: ''
      },
      {
        id: 20,
        description: 'Manzana verde',
        image: ''
      },
      {
        id: 21,
        description: 'Maní',
        image: ''
      },
      {
        id: 22,
        description: 'Atún desmenuzado',
        image: ''
      },
      {
        id: 23,
        description: 'Lomito salteado macerado en chimichurri',
        image: ''
      },
      {
        id: 24,
        description: 'Queso Azul',
        image: ''
      },
      {
        id: 25,
        description: 'Salsa de tocineta',
        image: ''
      },
      {
        id: 26,
        description: 'Aceitunas negras',
        image: ''
      },
      {
        id: 27,
        description: 'Carne para Hamburguesa',
        image: ''
      },
      {
        id: 28,
        description: 'Pepinillos',
        image: ''
      },
      {
        id: 29,
        description: 'Cebollas Salteadas',
        image: ''
      },
      {
        id: 30,
        description: 'Chistorra',
        image: ''
      },
      {
        id: 31,
        description: 'Carne rellena de queso amarillo',
        image: ''
      },
      {
        id: 32,
        description: 'Cebolla morada',
        image: ''
      },
      {
        id: 33,
        description: 'Queso crema especial',
        image: ''
      },
      {
        id: 34,
        description: 'Aros de cebollas',
        image: ''
      },
      {
        id: 34,
        description: 'Guacamole',
        image: ''
      },
      ,
      {
        id: 35,
        description: 'Salsa chipotle',
        image: ''
      }
    ];


    this.foodDrinks = [
      {
        id: 1,
        name: 'Aros de Cebolla',
        description: 'Crujientes Aros de cebolla con salsa BBQ especial',
        image: './assets/img/entradas/1_aros_de_cebolla.jpg',
        price: 3,
        ingredients: [],
        category: 1
      },
      {
        id: 2,
        name: 'Tequeños de queso',
        description: 'Deliciosa ración de tequeños acompañados de salsa tártara',
        image: './assets/img/entradas/2_tequeños.jpg',
        price: 3,
        ingredients: [],
        category: 1
      },
      {
        id: 3,
        name: 'Alitas BBQ',
        description: 'Exquisitas alitas combinadas con nuestra salsa especial BBQ',
        image: './assets/img/entradas/3_alitas.jpg',
        price: 3,
        ingredients: [],
        category: 1
      },
      {
        id: 4,
        name: 'Deditos de mozarella',
        description: 'Tradicionales y crujientes dedos de queso mozzarella acompañadas con salsa de queso azul',
        image: './assets/img/entradas/4_dedos_de mozarella.jpg',
        price: 3,
        ingredients: [],
        category: 1
      },
      {
        id: 5,
        name: 'Pasteles Truschello',
        description: 'Espectaculares pasteles Truschello con rellenos combinados: pollo, queso y carne',
        image: './assets/img/entradas/5_pasteles.jpg',
        price: 3,
        ingredients: [],
        category: 1
      },
      {
        id: 6,
        name: 'Chicken Tenders',
        description: 'Crujiente pechuga de pollo empanizada con nuestra salsa de ajo',
        image: './assets/img/entradas/6_chicken_tenders.jpg',
        price: 3,
        ingredients: [],
        category: 1
      },
      {
        id: 7,
        name: 'Neo salad',
        description: '',
        image: './assets/img/ensaladas/1_ensaladas.jpg',
        price: 3,
        ingredients: [1,2,3,4,5,6,7,8],
        category: 2
      },
      {
        id: 8,
        name: 'César de Pollo',
        description: '',
        image: './assets/img/ensaladas/2_ensaladas.jpg',
        price: 3,
        ingredients: [1,2,5,9,10,11],
        category: 2
      },
      {
        id: 9,
        name: 'Suprema',
        description: '',
        image: './assets/img/ensaladas/3_ensaladas.jpg',
        price: 3,
        ingredients: [1,2,12,13,14,15,16,17],
        category: 2
      },
      {
        id: 10,
        name: 'Capresa',
        description: '',
        image: './assets/img/ensaladas/4_ensaladas.jpg',
        price: 3,
        ingredients: [15,18,19],
        category: 2
      },
      {
        id: 11,
        name: 'Exotic',
        description: '',
        image: './assets/img/ensaladas/5_ensaladas.jpg',
        price: 3,
        ingredients: [1,2,20,21,16,8],
        category: 2
      },
      {
        id: 12,
        name: 'Neo de atún',
        description: '',
        image: './assets/img/sandwich/1_sandwich.jpg',
        price: 3,
        ingredients: [22,3,4,6,7,8],
        category: 3
      },
      {
        id: 13,
        name: 'Neo de lomito',
        description: '',
        image: './assets/img/sandwich/2_sandwich.jpg',
        price: 3,
        ingredients: [23,15,14,16,1,17],
        category: 3
      },
      {
        id: 14,
        name: 'Neo de pollo',
        description: '',
        image: './assets/img/sandwich/3_sandwich.jpg',
        price: 3,
        ingredients: [2,5,6,18,15,12,1,8],
        category: 3
      },
      {
        id: 15,
        name: 'Neo 4 quesos',
        description: '',
        image: './assets/img/sandwich/4_sandwich.jpg',
        price: 3,
        ingredients: [1,15,14,16,18,10,24,25],
        category: 3
      },
      {
        id: 16,
        name: 'Neo Capresa',
        description: '',
        image: './assets/img/sandwich/5_sandwich.jpg',
        price: 3,
        ingredients: [15,18,26,19],
        category: 3
      },
      {
        id: 17,
        name: 'Neo clasic',
        description: '',
        image: './assets/img/hamburguesas/1_hamburguesas.jpg',
        price: 3,
        ingredients: [27,1,15,3,28,5],
        category: 4
      },
      {
        id: 18,
        name: 'Neo Especial',
        description: '',
        image: './assets/img/hamburguesas/2_hamburguesas.jpg',
        price: 3,
        ingredients: [27,1,15,29,30,18],
        category: 4
      },
      {
        id: 19,
        name: 'Neo Chicken',
        description: '',
        image: './assets/img/hamburguesas/3_hamburguesas.jpg',
        price: 3,
        ingredients: [2,1,15,3,5,6],
        category: 4
      },
      {
        id: 20,
        name: 'Neo Fusion',
        description: '',
        image: './assets/img/hamburguesas/4_hamburguesas.jpg',
        price: 3,
        ingredients: [31,1,15,32,5,33,34],
        category: 4
      },
      {
        id: 21,
        name: 'Neo Hot',
        description: '',
        image: './assets/img/hamburguesas/5_hamburguesas.jpg',
        price: 3,
        ingredients: [27,15,1,32,34,3,5,35],
        category: 4
      },
      {
        id: 22,
        name: 'Expresso',
        description: '30 ml de cafe',
        image: './assets/img/cafe/1_coffee.jpg',
        price: 3,
        ingredients: [],
        category: 16
      },
      {
        id: 23,
        name: 'Latte',
        description: 'Leche + expreso',
        image: './assets/img/cafe/2_coffee.jpg',
        price: 3,
        ingredients: [],
        category: 16
      },
      {
        id: 24,
        name: 'Cappuchino',
        description: 'Leche + expreso + espuma',
        image: './assets/img/cafe/3_coffee.jpg',
        price: 3,
        ingredients: [],
        category: 16
      },
      {
        id: 25,
        name: 'Mocachino',
        description: 'Leche + expreso + chocolate +  espuma',
        image: './assets/img/cafe/4_coffee.jpg',
        price: 3,
        ingredients: [],
        category: 16
      },
      {
        id: 26,
        name: 'Afogato',
        description: 'expreso + helado de vainilla',
        image: './assets/img/cafe/5_coffee.jpg',
        price: 3,
        ingredients: [],
        category: 16
      },
      {
        id: 27,
        name: 'Torta Matilda',
        description: '',
        image: './assets/img/postres/15_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 28,
        name: 'Torta Red velvet',
        description: '',
        image: './assets/img/postres/16_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 29,
        name: 'Torta de zanahoria',
        description: '',
        image: './assets/img/postres/17_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 30,
        name: 'Tiramisú',
        description: '',
        image: './assets/img/postres/18_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 31,
        name: 'Torta de Café',
        description: '',
        image: './assets/img/postres/19_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 32,
        name: 'Torta de limón',
        description: '',
        image: './assets/img/postres/20_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 33,
        name: 'Torta tres leches',
        description: '',
        image: './assets/img/postres/21_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 9
      },
      {
        id: 34,
        name: 'Fresa',
        description: '',
        image: './assets/img/postres/22_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 10
      },
      {
        id: 35,
        name: 'Nutella',
        description: '',
        image: './assets/img/postres/23_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 10
      },
      {
        id: 36,
        name: 'Oreo',
        description: '',
        image: './assets/img/postres/24_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 10
      },
      {
        id: 37,
        name: 'Galletas',
        description: '',
        image: './assets/img/postres/25_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 11
      },
      {
        id: 38,
        name: 'Quesillo tradicional',
        description: '',
        image: './assets/img/postres/26_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 11
      },
      {
        id: 39,
        name: 'Quesillo de chocolate cremoso',
        description: '',
        image: './assets/img/postres/27_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 11
      },
      {
        id: 40,
        name: 'Copa de helado',
        description: '',
        image: './assets/img/postres/28_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 11
      },
      {
        id: 41,
        name: 'Oreo',
        description: '',
        image: './assets/img/postres/29_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 42,
        name: 'Syrup de Arequipe',
        description: '',
        image: './assets/img/postres/30_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 43,
        name: 'Syrup de chocolate',
        description: '',
        image: './assets/img/postres/31_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 44,
        name: 'Syrup de Fresas',
        description: '',
        image: './assets/img/postres/32_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 45,
        name: 'Pirulin',
        description: '',
        image: './assets/img/postres/33_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 46,
        name: 'Hersheys',
        description: '',
        image: './assets/img/postres/34_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 47,
        name: 'Helado (chocolate, vainilla y fresas)',
        description: '',
        image: './assets/img/postres/35_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 12
      },
      {
        id: 48,
        name: 'Durazno',
        description: '',
        image: './assets/img/bebidas/4_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 49,
        name: 'Fresa,',
        description: '',
        image: './assets/img/bebidas/5_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 50,
        name: 'Lechosa,',
        description: '',
        image: './assets/img/bebidas/7_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 51,
        name: 'Melón,',
        description: '',
        image: './assets/img/bebidas/8_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 52,
        name: 'Mora',
        description: '',
        image: './assets/img/bebidas/9_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 53,
        name: 'Naranja',
        description: '',
        image: './assets/img/bebidas/10_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 54,
        name: 'Melocotón',
        description: '',
        image: './assets/img/bebidas/11_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 55,
        name: 'Piña',
        description: '',
        image: './assets/img/bebidas/12_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 56,
        name: 'Limonada',
        description: '',
        image: './assets/img/bebidas/13_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 13
      },
      {
        id: 57,
        name: 'Fresa',
        description: '',
        image: './assets/img/bebidas/14_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 14
      },
      {
        id: 58,
        name: 'Mora',
        description: '',
        image: './assets/img/bebidas/15_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 14
      },
      {
        id: 59,
        name: 'Piña',
        description: '',
        image: './assets/img/bebidas/16_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 14
      },
      {
        id: 60,
        name: 'Banana',
        description: '',
        image: './assets/img/bebidas/17_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 14
      },
      {
        id: 61,
        name: 'Chocolate',
        description: '',
        image: './assets/img/bebidas/18_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 14
      },
      {
        id: 62,
        name: 'Samba',
        description: '',
        image: './assets/img/bebidas/19_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 14
      },
      {
        id: 63,
        name: 'Pie de limón',
        description: '',
        image: './assets/img/postres/10_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 7
      },
      {
        id: 64,
        name: 'Pie de parchita',
        description: '',
        image: './assets/img/postres/11_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 7
      },
      {
        id: 65,
        name: 'Brownie con helado',
        description: '',
        image: './assets/img/postres/13_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 8
      },
      {
        id: 66,
        name: 'Brownie con helado y nutella',
        description: '',
        image: './assets/img/postres/12_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 8
      },
      {
        id: 67,
        name: 'Brownie con helado y hersheys',
        description: '',
        image: './assets/img/postres/14_desserts.jpg',
        price: 3,
        ingredients: [],
        category: 8
      },
      {
        id: 68,
        name: 'Cola negra',
        description: '',
        image: './assets/img/bebidas/20_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 15
      },
      {
        id: 69,
        name: 'Varios',
        description: '',
        image: './assets/img/bebidas/21_drinks.jpg',
        price: 3,
        ingredients: [],
        category: 15
      }
    ];
    
   }

   getCategories () {
    const categoria = this.categories.filter(cat => cat.parent === null);
    return categoria;
  }

  getCategoriesById (id) {
    const categoria = this.categories.filter(cat => cat.parent === id);
    return categoria;
  }

  getIngredients () {
   return this.ingredients;
  }
  
  getFoodDrinks () {
   return this.foodDrinks;
  }

  findFoodByCategories (idCategories: number): FoodDrink[] {
    const platos = this.foodDrinks.filter(cat => cat.category === idCategories);
    return platos;
  }

  findIngredientsById (idIngredients: number): Ingredient[] {
    const ingrediente = this.ingredients.filter(ing => ing.id === idIngredients);
    return ingrediente;
  }

}