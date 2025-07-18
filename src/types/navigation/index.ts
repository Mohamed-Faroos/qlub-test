/* Third-party library */
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Explore: undefined;
};

export type RootNavigationProps = NativeStackNavigationProp<RootStackParamList>;