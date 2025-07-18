// React core and React Native components
import { StatusBar, StyleSheet, Text, View } from 'react-native';

// Third-party libraries
import { useDispatch } from 'react-redux';

// Custom UI components
import Button from '../../components/Button';

// Hooks
import { useRootNavigation } from '../../navigation';

// Constants & Configuration
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants/colors';

// Redux action
import { getRestaurantsClear } from '../../store/restaurants/getRestaurants';

// Assets
import HomeImage from '../../assets/images/home-image.svg';

// Props and Types
import { AppDispatch } from '../../store/store';



const HomeScreen = () => {
    const navigation = useRootNavigation();
    const dispatch = useDispatch<AppDispatch>();

    // useEffect(() => {
    //     dispatch(getRestaurantsClear());
    // }, []);
    /* navigate to explore screen */
    const handleExplorePress = () => {
        navigation.navigate('Explore');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={PRIMARY_COLOR} />
            <HomeImage width={350} height={350} />
            <Text style={styles.titleText}>
                Great food is just around the corner.
            </Text>
            <Button
                title="Let's Explore"
                onPress={handleExplorePress}
                style={{ backgroundColor: WHITE_COLOR }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: PRIMARY_COLOR,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    titleText: {
        color: WHITE_COLOR,
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center'
    }
});

export default HomeScreen;
