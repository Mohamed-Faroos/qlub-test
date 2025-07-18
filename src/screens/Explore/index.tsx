// React core and React Native components
import { useEffect, useState } from 'react';
import {
    Keyboard,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

// Third-party libraries
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import Config from 'react-native-config';

// Custom UI components
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import FilterChip from '../../components/FIlterChip';
import Map from '../../components/Map';
import RestaurantListModal from '../../components/RestaurantListModal/Index';
import { FilterIcon } from '../../assets/icons';

// Custom Hooks
import useGeoLocation from '../../hooks/useGeoLocation';

// Constants and Configurations
import { DARK_COLOR, GREY_COLOR, WHITE_COLOR } from '../../constants/colors';
import { restaurantFilter } from '../../constants/filter';
import { getRestaurants } from '../../store/restaurants/getRestaurants';

// Props and Types
import { GeoLocation, NearbySearchRequestProps } from '../../types';
import { AppDispatch, RootState } from '../../store/store';

const ExploreScreen = () => {
    // Redux state
    const stateRestaurants = useSelector((state: RootState) => state.restaurants.data);

    // local state
    const [currentLocation, setCurrentLocation] = useState<GeoLocation>({
        latitude: 6.747790274300732,
        longitude: 79.89973831760824,
        address: 'Keselwatha, Panadura, Sri Lanka'
    });

    // hooks
    const { getCurrentLocation } = useGeoLocation();
    const dispatch = useDispatch<AppDispatch>();

    /**
     * triggering the `fetchCurrentGeoLocation` function when the component 
     * mounts for the first time. 
    */
    useEffect(() => {
        // fetchCurrentGeoLocation();
    }, []);

    /** triggering the `fetchNearByRestaurants` function whenever the 
     * `currentLocation` state changes. 
     */
    useEffect(() => {
        if (currentLocation.latitude && currentLocation.longitude) {
            // fetchNearByRestaurants();
        }
    }, [currentLocation]);

    /**
     * `fetchCurrentGeoLocation` asynchronously fetches the current geolocation
     * coordinates and address and sets them in the state.
     */
    const fetchCurrentGeoLocation = async () => {
        const { latitude, longitude, address } = await getCurrentLocation();
        console.log({ latitude });

        setCurrentLocation({
            latitude,
            longitude,
            address
        });
    };

    /**
     * The function fetches nearby restaurants based on the current location using Google Place API.
     */
    const fetchNearByRestaurants = () => {
        const payload: NearbySearchRequestProps = {
            location: `${currentLocation.latitude},${currentLocation.longitude}`,
            radius: 5000,
            type: 'restaurant',
            apiKey: Config.GOOGLE_API_KEY ?? ''
        };
        dispatch(getRestaurants(payload));
    };

    /**
     *  maps over an array of `restaurantFilter` objects to render
     * `FilterChip` components with titles and icons.
     */
    const renderFilters = () => {
        return restaurantFilter.map((filter, index) => (
            <FilterChip key={index} title={filter.title} icon={filter.icon} />
        ));
    };

    /* 
    * Map for locate restaurants, map will render if current geo location is available 
    */
    const renderMapWithPlaces = () => {
        if (currentLocation?.latitude && currentLocation?.longitude) {
            return (<Map
                currentLocation={{
                    latitude: currentLocation?.latitude,
                    longitude: currentLocation?.longitude
                }}
                restaurants={stateRestaurants}
            />);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container} edges={['top']}>

                {/* Header Component */}
                <Header locationAddress={currentLocation?.address || ''} />

                {/* Search and filter components */}
                <View style={styles.searchContainer} >
                    <SearchInput />

                    {/* Filters vertical list */}
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.filterContainer}
                    >
                        {/* filter button */}
                        <TouchableOpacity style={styles.filterIconButton}>
                            <FilterIcon width={18} height={18} />
                        </TouchableOpacity>

                        {/* render filter chips */}
                        {renderFilters()}
                    </ScrollView>
                </View>

                {renderMapWithPlaces()}

                {/* bottom shadow to android UI */}
                {Platform.OS === 'android' &&
                    <View style={styles.androidShadow} />}

                {/* list of restaurant's cards */}
                <RestaurantListModal restaurants={stateRestaurants} />
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: WHITE_COLOR,
    },
    searchContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor: WHITE_COLOR,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: WHITE_COLOR,
    },
    filterIconButton: {
        height: 32,
        width: 32,
        backgroundColor: WHITE_COLOR,
        borderColor: DARK_COLOR,
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 6,
        marginRight: 8,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowColor: DARK_COLOR,
        elevation: 2,
    },
    androidShadow: {
        height: 1,
        width: '100%',
        backgroundColor: 'transparent',
        shadowColor: GREY_COLOR,
        elevation: 5,
    },
});

export default ExploreScreen;
