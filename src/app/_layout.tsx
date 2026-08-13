import AppTabs from "@/components/app-tabs";
import CtaButton from "@/components/cta-button";
import "@/global.css";
import { ThemeProvider } from "@/store/theme";
import {
    GoogleSans_400Regular,
    GoogleSans_500Medium,
    GoogleSans_600SemiBold,
    GoogleSans_700Bold,
    useFonts,
} from "@expo-google-fonts/google-sans";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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
            <AppTabs />
            <CtaButton />
        </ThemeProvider>
    );
}