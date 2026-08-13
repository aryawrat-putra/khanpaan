import { Text } from "@/components/ui/text";
import { useTheme } from "@/store/theme";
import { commonStyles } from "@/styles/common";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecipeScreen() {
  const { colors } = useTheme();
  const commonStyle = commonStyles(colors);

  return (
    <SafeAreaView style={commonStyle.screen}>
      <ScrollView contentContainerStyle={{ padding: 4 , flexGrow: 1 }}>
        <Text>Recipe Page</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
