// Third-party libraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Screens UI
import HomeScreen from '../screens/Home';
import ExploreScreen from '../screens/Explore';

// Props and Types
import { RootNavigationProps, RootStackParamList } from '../types/navigation';

// creating stack navigation
const Stack = createNativeStackNavigator<RootStackParamList>();

/** 
 * Root Navigation Component 
 */
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

export const useRootNavigation = () => useNavigation<RootNavigationProps>();