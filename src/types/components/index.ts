import BottomSheet, { BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';
import MapView from 'react-native-maps';
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

export interface PlaceMarkerProps {
    id: number,
    restaurant: RestaurantsProps,
    onSelectLocation(index: number): void
}

export interface MapProps {
    mapRef?: React.RefObject<MapView | null>;
    currentLocation: LocationProps;
    restaurants: RestaurantsProps[];
    selectedLocation: number | null;
    onSelectLocation(index: number): void
}

export interface RestaurantCarsProps {
    id: number,
    restaurant: RestaurantsProps,
    selectedLocation: number | null;
    isSelected: boolean
    onSelectLocation(index: number): void
}

export interface RestaurantListModalProps {
    listRef?: React.RefObject<BottomSheetFlatListMethods | null>;
    modalRef?: React.RefObject<BottomSheet | null>;
    restaurants: RestaurantsProps[],
    selectedRestaurant: number | null;
    onSelectRestaurant(index: number): void
}

export interface FilterType {
    id: string;
    title: string;
    icon: React.FC<SvgProps>;
}

export interface GeoLocation {
    latitude: number | null;
    longitude: number | null;
    address?: string | '';
}