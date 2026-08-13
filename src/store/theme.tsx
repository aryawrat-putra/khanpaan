import { Colors, ColorsType } from "@/styles/colors";
import { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

type ThemeMode = "light" | "dark" | "system";

type ThemeContextType = {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
    colors: ColorsType;
    isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const systemColorScheme = useColorScheme();

    const [theme, setTheme] = useState<ThemeMode>("system");

    const isDark =
        theme === "dark" ||
        (theme === "system" && systemColorScheme === "dark");

    const colors = isDark ? Colors.dark : Colors.light;

    const value = useMemo(
        () => ({
            theme,
            setTheme,
            colors,
            isDark,
        }),
        [theme, colors, isDark]
    );

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}