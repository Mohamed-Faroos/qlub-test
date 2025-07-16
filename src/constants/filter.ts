import React from 'react';
import { SvgProps } from 'react-native-svg';
import { ChefHatIcon, CoffeeIcon, ForkIcon, GlassIcon } from '../assets/icons'; // Adjust the path as needed

export type FilterType = {
    id: string;
    title: string;
    icon: React.FC<SvgProps>; // Assuming icon is an image asset
};


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
