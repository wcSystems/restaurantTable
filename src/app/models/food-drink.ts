import { Ingredient } from './ingredient';
import { Category } from './category';

export interface FoodDrink {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    ingredients?: Array<number>;
    category: number;
}
