import store from "@/store/store";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

const SPLASH_DELAY = 2000

export default function RootLayout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync()
    }, SPLASH_DELAY)
    return () => clearTimeout(timer)
  }, [])

  return <Provider store={store}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="result" options={{ presentation: 'modal' }} />
    </Stack>
  </Provider>
}
