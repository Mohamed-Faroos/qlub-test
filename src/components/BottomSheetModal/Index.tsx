import React, { useCallback, useRef, useMemo } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { WHITE_COLOR } from '../../constants/colors';

const BottomSheetModal = () => {
    // hooks
    const sheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '80%'], []);

    // callbacks
    const handleSheetChange = useCallback((index: number) => {
        console.log('handleSheetChange', index);
    }, []);
    const handleSnapPress = useCallback((index: number) => {
        sheetRef.current?.snapToIndex(index);
    }, []);
    const handleClosePress = useCallback(() => {
        sheetRef.current?.close();
    }, []);

    // render
    return (
        <BottomSheet
            ref={sheetRef}
            snapPoints={snapPoints}
            enableDynamicSizing={false}
            onChange={handleSheetChange}
            style={styles.bottomSheet}
        >
            <BottomSheetView style={styles.contentContainer}>
                <Text>Card list goes here 🔥</Text>
            </BottomSheetView>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    bottomSheet: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        zIndex: 999,
        elevation: 1,
        backgroundColor: WHITE_COLOR,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    contentContainer: {
        alignItems: 'center',
        flex: 1,
        padding: 36,
        elevation: 10,
    },
});

export default BottomSheetModal;
