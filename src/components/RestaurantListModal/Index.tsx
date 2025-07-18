// React core and React Native components
import React, { useRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';

// Third party libraries
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import RestaurantCard from '../RestaurantCard';

// Constants and configuration
import { DARK_COLOR, } from '../../constants/colors';

// Props and Types
import { RestaurantListModalProps, RestaurantsProps } from '../../types';

const RestaurantListModal: React.FC<RestaurantListModalProps> = ({ ...props }) => {

    const sheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['40%', '80%'], []);

    /**
     * function takes an item of type RestaurantsProps and renders a RestaurantCard
     * component.
     */
    const renderItem = ({ item }: { item: RestaurantsProps }) => (
        <RestaurantCard restaurant={item} />
    );

    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            style={styles.bottomSheet}
        >
            <BottomSheetFlatList
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
});

export default RestaurantListModal;
