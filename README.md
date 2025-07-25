# 🍽️ Nearby Restaurants Finder – React Native App (Qlub Test)

This cross-platform mobile application (iOS & Android) is developed using React Native and integrates Google Maps SDK and Google Places API to display a list of nearby restaurants with a smooth map and list interaction experience.

## ✨ Key Features
### 📍 Real-time User Location
- Automatically detects and shows the user's current location on the map.

### 🗺️ Map with Nearby Restaurants
- Displays all nearby restaurants within a 5 km radius.
- Only restaurants with a rating above 3.5 are shown.
- Uses Google Maps SDK to render interactive markers on the map.

### 📋 Bottom Sheet List View
- All restaurants are listed in a BottomSheetModal.
- List is sorted by distance or rating, improving discoverability.

### 🔁 Synchronized Selection
- Tap a restaurant on the map → Automatically scrolls to the corresponding item in the list.
- Select a restaurant from the list → Smoothly navigates and centers the map to that location.

## Screen Shots and Demo Video

### IOS Screen Shots 

<table>
  <tr>
    <td><img src="https://drive.google.com/uc?export=view&id=1fhAxO_QG7CJJg83xE3pKe3MRViSLIDWn" width="180" /></td>
    <td><img src="https://drive.google.com/uc?export=view&id=1fhAxO_QG7CJJg83xE3pKe3MRViSLIDWn" width="180" /></td>
    <td><img src="https://drive.google.com/uc?export=view&id=1O48eYutgcnk2j-8UJuxrv-NTAUmTKyHF" width="180" /></td>
  </tr>
</table>

### Android Screen Shots

<table>
  <tr>
    <td><img src="https://drive.google.com/uc?export=view&id=13L835jhtsEqdbL2uNSaAYuUHdM8ETFR7" width="180" /></td>
    <td><img src="https://drive.google.com/uc?export=view&id=1PMLb4rcXN7jQtDDU51hxSPxqNIEnrk0G" width="180" /></td>
    <td><img src="https://drive.google.com/uc?export=view&id=1Hj5XTUr1P-ZBmAcKAbo1ZhyxjySuWm93" width="180" /></td>
  </tr>
</table>

### Demo Video

[![Watch the video](https://drive.google.com/uc?export=view&id=1ZIMpSsxiA6xN7ur2oF4x7mpV0QJTggb-)](https://drive.google.com/file/d/1-bqsPfX_fE4QwrEX2uhCbblqe--5AiOU/view)

##  App Setup

### clone project
```sh
git clone https://github.com/Mohamed-Faroos/qlub-test.git

```

### .env file setup
- rename .env.example -> .env  
- add GOOGLE_API_KEY

### Google API Key 🔑

This project requires a valid **Google API Key** to work with Google services (e.g., Maps, Places API, etc.).

> **Note:** For security reasons, the key is not included in the repository.

📩 **To request a key, please email:** [faroos1996@gmail.com](mailto:faroos1996@gmail.com)

Once received, add it to your environment file as: GOOGLE_API_KEY

### install node modules
```sh
cd qlub-test
npm install

```

### Build and run app on IOS
```sh
cd ios && pod install
#or
npx pod-install

npm run ios
```

### Build and run app on Android
```sh
npm run android
```

# Libraries

## 📍 Maps & Location
Used for displaying maps, getting user location, and geocoding:

- react-native-maps – Render Google Maps.
- @react-native-community/geolocation – Access device geolocation.
- react-native-geocoding – Convert lat/lng to addresses.
- react-native-config – Manage Google API keys via .env

## 🧭 Navigation
Used for screen-to-screen transitions and navigation stacks:

- @react-navigation/native – Core navigation library.
- @react-navigation/native-stack – Native stack navigator for improved performance.
- react-native-safe-area-context – Handle notches and safe areas.

## 🧾 UI & Interaction
Used for bottom sheet modals and gesture handling:

- @gorhom/bottom-sheet – BottomSheetModal to display the restaurant list.
- react-native-gesture-handler – Handles gestures.
- react-native-reanimated – Animations for gestures and BottomSheet.
- react-native-svg – Supports rendering SVG images.
- react-native-svg-transformer – Enables importing .svg files as React components.

## 🌐 Network & API
Used for making HTTP requests:

- axios – For calling the Google Places API and handling responses.

## 🧠 State Management
Used to manage and persist app state:

- redux – Global state container.
- react-redux – Connect Redux to React components.
- redux-saga – Manage side effects like API calls.
- redux-persist – Persist Redux state across app restarts.

## ⚙️ System & Utilities
Used for core app structure or utilities:

- @react-native-async-storage/async-storage – Local storage used by Redux Persist.


