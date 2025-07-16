import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';

/* Types */
export type RootStackParamList = {
    Home: undefined;
    Explore: undefined;
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;

/* creating stack navigation */
const Stack = createNativeStackNavigator<RootStackParamList>();

/* Root Navigation Component */
export const RootNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
);

export const useRootNavigation = () => useNavigation<RootNavigationProp>();