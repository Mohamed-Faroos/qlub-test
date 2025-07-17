/* React core and React Native components */
import {
    Keyboard,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';

/* Third-party libraries */
import { SafeAreaView } from 'react-native-safe-area-context';

/* Custom UI components */
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import FilterChip from '../../components/FIlterChip';
import Map from '../../components/Map';
import BottomSheetModal from '../../components/BottomSheetModal/Index';
import { FilterIcon } from '../../assets/icons';

/* Constants and Configs */
import { DARK_COLOR, GREY_COLOR, WHITE_COLOR } from '../../constants/colors';
import { restaurantFilter } from '../../constants/filter';

const ExploreScreen = () => {
    /**
     *  maps over an array of `restaurantFilter` objects to render
     * `FilterChip` components with titles and icons.
     */
    const renderFilters = () => {
        return restaurantFilter.map((filter, index) => (
            <FilterChip key={index} title={filter.title} icon={filter.icon} />
        ));
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView style={styles.container} edges={['top']}>
                {/* Header Component */}
                <Header />
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

                {/* Map for locate restaurants */}
                <Map />

                {/* bottom shadow to android UI */}
                {Platform.OS === 'android' && <View style={styles.androidShadow} />}

                {/* list of restaurant's cards */}
                <BottomSheetModal />
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

