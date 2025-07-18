
// Custom UI components
import { ChefHatIcon, CoffeeIcon, ForkIcon, GlassIcon } from '../assets/icons'; // Adjust the path as needed

// Props and Types
import { FilterType } from '../types';

export const restaurantFilter: FilterType[] = [
    {
        id: '0',
        title: 'Cuisines',
        icon: ChefHatIcon,
    },
    {
        id: '1',
        title: 'Cafe',
        icon: CoffeeIcon,
    },
     {
        id: '2',
        title: 'Restaurants',
        icon: ForkIcon,
    },
    {
        id: '3',
        title: 'Bars',
        icon: GlassIcon,
    },
];
