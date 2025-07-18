// React core and React Native components
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

// Third party libraries
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import RestaurantCard from '../RestaurantCard';

// Constants and configuration
import { DARK_COLOR, GREY_COLOR, WHITE_COLOR, } from '../../constants/colors';

// Props and Types
import { RestaurantListModalProps, RestaurantsProps } from '../../types';

const RestaurantListModal: React.FC<RestaurantListModalProps> = (props) => {
    const snapPoints = useMemo(() => ['25%', '40%', '80%'], []);

    const CustomHandle = () => (
        <View style={styles.handleContainer}>
            <View style={styles.handle} />
        </View>
    );
    /**
     * function takes an item of type RestaurantsProps and renders a RestaurantCard
     * component.
     */
    const renderItem = ({ item, index }: { item: RestaurantsProps, index: number }) => (
        <RestaurantCard
            id={index}
            restaurant={item}
            selectedLocation={props.selectedRestaurant}
            isSelected={index === props.selectedRestaurant}
            onSelectLocation={props.onSelectRestaurant}
        />
    );

    return (
        <BottomSheet
            ref={props.modalRef}
            index={1}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            style={styles.bottomSheet}
            enableContentPanningGesture={false}
            handleComponent={CustomHandle}
        >
            <BottomSheetFlatList
                ref={props.listRef}
                data={props.restaurants}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                maxToRenderPerBatch={5}
            />
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        shadowColor: DARK_COLOR,
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        zIndex: 999,
        elevation: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    listContent: {
        alignItems: 'center',
        paddingBottom: 40
    },
    handleContainer: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 6,
        backgroundColor: WHITE_COLOR, // match your sheet background
    },
    handle: {
        width: 40,
        height: 4,
        borderRadius: 3,
        backgroundColor: GREY_COLOR, // customized color (purple)
    }
});

export default RestaurantListModal;
