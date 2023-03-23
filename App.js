
import React, { useState, useCallback, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";


//keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()
export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts
        await Font.loadAsync({
          'Montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
          'Montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.header}>
        Hello Agilan
      </Text>
      <Text style={styles.body}>
        An enthusisatic student from the department of information science and Technology
      </Text>
    </View>
  );


};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'Montserrat-bold',
    fontSize: 20,
  },
  body: {
    fontFamily: 'Montserrat-regular',
    fontSize: 15,
    padding: 10,
    alignContent: 'center',
    justifyContent: 'center',
    textAlign:'center'
  }
})