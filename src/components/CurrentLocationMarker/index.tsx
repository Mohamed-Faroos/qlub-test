/* React core and React Native components */
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

/* Third-Party libraries */
import { Callout, MarkerAnimated } from 'react-native-maps';

/* Custom UI components */
import { CurrentLocationIcon } from '../../assets/icons';

/* Constants and configs */
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants/colors';

const CurrentLocationMarker = () => {
    const opacityAnim = useRef(new Animated.Value(1)).current;

    /* animate Current location marker */
    useEffect(() => {
        const loop = Animated.loop(
            Animated.sequence([
                Animated.timing(opacityAnim, {
                    toValue: 0.4,
                    duration: 500,
                    useNativeDriver: true,
                }),
                Animated.timing(opacityAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        loop.start();
        return () => loop.stop();
    }, []);

    return (
        <MarkerAnimated
            style={{ opacity: opacityAnim }}
            coordinate={{ latitude: 6.747790274300732, longitude: 79.89973831760824 }}
        >
            {/* animated current location marker icon */}
            <Animated.View style={{ opacity: opacityAnim }}>
                <CurrentLocationIcon width={30} height={30} />
            </Animated.View>

            {/* Tooltip for current location  */}
            <Callout tooltip style={style.toolTip}>
                <View style={style.toolTipContainer}>
                    <Text style={style.toolTipText}>My Location</Text>
                </View>
                <View style={style.arrow} />
            </Callout>
        </MarkerAnimated >
    );
};

const style = StyleSheet.create({
    toolTip: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    toolTipContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        width: 'auto',
        minWidth: 100,
        height: 30,
        backgroundColor: WHITE_COLOR,
        padding: 2,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: PRIMARY_COLOR,
        elevation: 5
    },
    toolTipText: {
        fontSize: 13,
        fontWeight: 400
    },
    arrow: {
        width: 0,
        height: 0,
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderTopWidth: 8,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: WHITE_COLOR,
    }
});

export default CurrentLocationMarker;