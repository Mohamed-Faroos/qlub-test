
/* Third-party library */
import Geocoder from 'react-native-geocoding';
import Config from 'react-native-config';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

/* Custom UI components */
import { RootNavigation } from './src/navigation';

/* Configuration */
import { persistor, store } from './src/store/store';

const App = () => {

  /* initial google geolocation api, if GOOGLE_API_KEY exist*/
  Config.GOOGLE_API_KEY && Geocoder.init(Config.GOOGLE_API_KEY);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <SafeAreaProvider>
              <RootNavigation />
            </SafeAreaProvider>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
};

export default App;
