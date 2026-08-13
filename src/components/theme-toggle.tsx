import { Text } from "@/components/ui/text";
import { useTheme } from "@/store/theme";
import { Pressable, View } from "react-native";

export default function ThemeSettings() {
    const { theme, setTheme } = useTheme();

    return (
        <View>
            <Text>Current Theme: {theme}</Text>
            <Pressable onPress={() => setTheme("light")}>
                <Text size="large">Light</Text>
            </Pressable>

            <Pressable onPress={() => setTheme("dark")}>
                <Text size="large">Dark</Text>
            </Pressable>

            <Pressable onPress={() => setTheme("system")}>
                <Text size="large">System</Text>
            </Pressable>
        </View>
    );
}