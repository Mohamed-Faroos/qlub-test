/* React core and React Native components */
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/* Custom UI components */
import { BackIcon, LocationMarkerIcon } from '../../assets/icons';

/* Constants and configs */
import { DARK_COLOR, GREY_COLOR, WHITE_COLOR } from '../../constants/colors';

/* Custom Hooks */
import { useRootNavigation } from '../../navigation';

const Header = () => {
    const navigation = useRootNavigation();

    /* navigate back to previous screen */
    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.header}>
            <StatusBar barStyle="dark-content" />

            {/* back button */}
            <TouchableOpacity style={styles.iconButton} onPress={handleBackPress}>
                <BackIcon width={20} height={20} />
            </TouchableOpacity>

            {/* location details */}
            <View style={styles.locationContainer}>
                <View style={styles.iconContainer}>
                    <LocationMarkerIcon width={20} height={20} />
                </View>
                <View style={styles.locationTextContainer}>
                    <Text style={styles.locationTextTitle}>Offers Near</Text>
                    <Text style={styles.locationTextAddress}>Keselwatha, Panadura, Sri Lanka
                        <View style={styles.dropdownIcon}>
                            <BackIcon width={14} height={14} />
                        </View>
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        backgroundColor: WHITE_COLOR,
        borderBottomColor: GREY_COLOR,
    },
    iconButton: {
        backgroundColor: WHITE_COLOR,
        borderColor: DARK_COLOR,
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 6,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowColor: DARK_COLOR,
        elevation: 2,
    },
    locationContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'flex-start',
        marginHorizontal: 15
    },
    iconContainer: {
        backgroundColor: WHITE_COLOR,
        borderColor: DARK_COLOR,
        borderRadius: 20,
        borderWidth: 0.5,
        padding: 6,
    },
    locationTextContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    locationTextTitle: {
        color: GREY_COLOR,
        fontSize: 12,
        fontWeight: 'bold',
    },
    locationTextAddress: {
        color: DARK_COLOR,
        fontSize: 12,
        fontWeight: 'bold'
    },
    dropdownIcon: {
        transform: [{ rotate: '-90deg' }],
        width: 20,
        marginTop: 8,
        marginLeft: 10,
    }
});

export default Header;