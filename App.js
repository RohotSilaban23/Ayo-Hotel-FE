import React from "react";
// Import 'NativeBaseProvider' component
import { NativeBaseProvider, extendTheme, NativeBaseConfigProvider, Box } from "native-base";

// Import font with Expo
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_400Regular_Italic,
} from '@expo-google-fonts/balsamiq-sans';
import { Provider } from 'react-redux';
import { useSelector } from "react-redux";

import { createStore } from 'redux';
import AyoHotel from "./config/reducers";

// Import Container
import Container from "./container";


export default function App() {
  const store = createStore(AyoHotel);
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_400Regular_Italic
  });

  // Setup Font
  const fontConfig = {
    BalsamiqSans: {
      400: {
        normal: "BalsamiqSans_400Regular",
        italic: "BalsamiqSans_400Regular_Italic"

      }
    }
  }

  // Setup Theme
  const customeColor = {
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    amber: {
      400: '#d97706',
    },
  }

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: "BalsamiqSans",
      body: "BalsamiqSans",
      mono: "BalsamiqSans",
    },
    config: {
      initialColorMode: 'dark',
    },
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Provider store={store}>
          <Container/>
        </Provider>
      </NativeBaseProvider>
    );
  }
}