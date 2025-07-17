/* React core and React Native components */
import React from 'react';

/* Third-Party libraries */
import { SvgProps } from 'react-native-svg';

/* Custom UI components */
import { ChefHatIcon, CoffeeIcon, ForkIcon, GlassIcon } from '../assets/icons'; // Adjust the path as needed

/* filter type */
export type FilterType = {
    id: string;
    title: string;
    icon: React.FC<SvgProps>;
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
