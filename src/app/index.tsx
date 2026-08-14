import { Text } from "@/components/ui/text";
import { useTheme } from "@/store/theme";
import { commonStyles } from "@/styles/common";
import { ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';



export default function DashboardScreen() {
  const { colors } = useTheme();
  const commonStyle = commonStyles(colors);

  return (
    <SafeAreaView style={commonStyle.screen}>
      <ScrollView contentContainerStyle={{ padding: 4, flexGrow: 1 }}>
        <Text>Dashboard Page</Text>
      </ScrollView>
    </SafeAreaView>
  );
}