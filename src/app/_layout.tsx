import '@/global.css';
import { ThemeProvider } from "@/store/theme";
import {
  GoogleSans_400Regular,
  GoogleSans_500Medium,
  GoogleSans_600SemiBold,
  GoogleSans_700Bold,
  useFonts
} from '@expo-google-fonts/google-sans';
import { NativeTabs } from 'expo-router/unstable-native-tabs';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    GoogleSans_400Regular,
    GoogleSans_500Medium,
    GoogleSans_600SemiBold,
    GoogleSans_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <NativeTabs>
        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            src={require('@/assets/images/icons/home.png')}
            renderingMode="template"
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="logs">
          <NativeTabs.Trigger.Label>History</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            src={require('@/assets/images/icons/logs.png')}
            renderingMode="template"
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="recipe">
          <NativeTabs.Trigger.Label>Recipes</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            src={require('@/assets/images/icons/recipe.png')}
            renderingMode="template"
          />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="today">
          <NativeTabs.Trigger.Label>Today</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon
            src={require('@/assets/images/icons/today.png')}
            renderingMode="template"
          />
        </NativeTabs.Trigger>
      </NativeTabs>
    </ThemeProvider>
  )
}
