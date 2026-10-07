import store from "@/store/store";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
export const unstable_settings = {
  initialRouteName: '(tabs)',
};
export default function RootLayout() {
  return <Provider store={store}>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="result" options={{ presentation: 'modal' }} />
    </Stack>
  </Provider>
}
