import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface ButtonProps extends TouchableOpacityProps {
    title: string;
    onPress(): void;
    textStyle?: StyleProp<TextStyle>
    disabled?: boolean;
}

export type SvgComponent = React.FC<SvgProps>;

export interface CurrentLocationMarkerProps {
    latitude: number;
    longitude: number;
}

export interface FilterChipProps {
    title?: string;
    icon: SvgComponent;
}

export interface HeaderProps {
    locationAddress: string;
}

export interface IconButtonProps extends ButtonProps {
    icon: SvgComponent;
}

export interface LocationProps {
    latitude: number;
    longitude: number;
}

export interface RestaurantsProps {
    name: string;
    address: string;
    rating: number;
    latitude: number;
    longitude: number;
    imageUrl: string;
}

export interface MapProps  {
    currentLocation: LocationProps;
    restaurants: RestaurantsProps[];
}

export interface RestaurantCarsProps {
    restaurant: RestaurantsProps
}

export interface RestaurantListModalProps {
    restaurants: RestaurantsProps[]
}

export interface FilterType {
    id: string;
    title: string;
    icon: React.FC<SvgProps>;
}

export interface GeoLocation  {
    latitude: number | null;
    longitude: number | null;
    address?: string | '';
}