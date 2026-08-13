import ThemeSettings from "@/components/theme-toggle";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/store/theme";
import { commonStyles } from "@/styles/common";
import { View } from "react-native";

export default function DashboardScreen() {
  const { colors } = useTheme();
  const commonStyle = commonStyles(colors);

  return (
    <View style={commonStyle.screen}>
      <Text className="title101" size="large">Dashboard Page</Text>
      <Text className="title101" size="medium">Subheading</Text>
      <Text className="title101" size="small">Some random texts for making it a long paragraph to see if everything is right.</Text>
      <ThemeSettings/>
    </View>
  );
}