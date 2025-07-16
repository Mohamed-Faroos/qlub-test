import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { PRIMARY_COLOR, WHITE_COLOR } from '../../constants/colors';

import Button from '../../components/Button';
import HomeImage from '../../assets/images/home-image.svg';
import { useRootNavigation } from '../../navigation';

const HomeScreen = () => {
    const navigation = useRootNavigation();

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
