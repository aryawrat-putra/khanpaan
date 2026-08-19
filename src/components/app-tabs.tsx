import { useTheme } from "@/store/theme";
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
    const { colors } = useTheme();

    return (
        <NativeTabs
            backgroundColor={colors.secondary}
            indicatorColor={colors.primary}
            iconColor={{
                default: colors.foreground,
                selected: colors.primaryForeground,
            }}
            labelStyle={{
                default: { color: colors.secondaryForeground },
                selected: { color: colors.foreground },
            }}
            rippleColor={colors.primary}
            // disableIndicator
        >
            <NativeTabs.Trigger name="index">
                <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon
                    src={require('@/assets/images/icons/home.png')}
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
            <NativeTabs.Trigger name="recipe">
                <NativeTabs.Trigger.Label>Recipes</NativeTabs.Trigger.Label>
                <NativeTabs.Trigger.Icon
                    src={require('@/assets/images/icons/recipe.png')}
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
        </NativeTabs>
    );
}
