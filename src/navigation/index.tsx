import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: true,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
    </Stack.Navigator>
);

export default RootNavigation;