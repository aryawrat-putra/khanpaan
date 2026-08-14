import { useTheme } from "@/store/theme";
import { SIZES } from "@/styles/typography";
import * as Haptics from "expo-haptics";
import type { ReactNode } from "react";
import {
    ActivityIndicator,
    GestureResponderEvent,
    Pressable,
    PressableProps,
    StyleProp,
    Text,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";

type ButtonVariant = "default" | "secondary";
type ButtonSize = "xs" | "md" | "lg";

type ButtonProps = Omit<PressableProps, "style" | "children"> & {
    children?: ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    iconOnly?: boolean;
    loading?: boolean;
    loadingText?: string;
    /**
     * Scale of the button while pressed.
     * Default: 0.94
     */
    pressScale?: number;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    accessibilityLabel?: string;
    accessibilityHint?: string;
    testID?: string;
    /**
     * Disable haptic feedback when the button is pressed.
    */
    disableHaptics?: boolean;
};

export function Button({
    children,
    variant = "default",
    size = "md",
    iconLeft,
    iconRight,
    iconOnly = false,
    loading = false,
    loadingText,
    disabled = false,
    disableHaptics = false,
    pressScale = 0.94,
    style,
    textStyle,
    accessibilityLabel,
    accessibilityHint,
    testID,
    onPress,
    onPressIn,
    onPressOut,
    ...props
}: ButtonProps) {
    const { colors } = useTheme();

    const isDisabled = disabled || loading;

    const variantStyle =
        variant === "secondary"
            ? {
                button: {
                    backgroundColor: colors.secondary,
                },
                text: {
                    color: colors.secondaryForeground,
                },
                spinner: colors.secondaryForeground,
            }
            : {
                button: {
                    backgroundColor: colors.primary,
                },
                text: {
                    color: colors.primaryForeground,
                },
                spinner: colors.primaryForeground,
            };

    const sizeStyle =
        size === "xs"
            ? {
                button: {
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                },
                text: {
                    fontSize: SIZES.small,
                    lineHeight: SIZES.small + 4,
                },
            }
            : size === "lg"
                ? {
                    button: {
                        paddingHorizontal: 18,
                        paddingVertical: 10,
                    },
                    text: {
                        fontSize: SIZES.large,
                        lineHeight: SIZES.large + 4,
                    },
                }
                : {
                    button: {
                        paddingHorizontal: 14,
                        paddingVertical: 8,
                    },
                    text: {
                        fontSize: SIZES.medium,
                        lineHeight: SIZES.medium + 4,
                    },
                };

    const handlePress = (event: GestureResponderEvent) => {
        if (isDisabled) return;

        if (!disableHaptics) {
            Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Success
            )
        }

        onPress?.(event);
    };

    return (
        <Pressable
            {...props}
            disabled={isDisabled}
            onPress={handlePress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            testID={testID}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
            accessibilityHint={accessibilityHint}
            accessibilityState={{
                disabled: isDisabled,
                busy: loading,
            }}
            style={({ pressed }) => [
                styles.button,
                variantStyle.button,
                sizeStyle.button,
                isDisabled && {
                    opacity: 0.5,
                },
                pressed &&
                !isDisabled && {
                    transform: [{ scale: pressScale }],
                    opacity: 0.85,
                },
                iconOnly && styles.iconOnly,
                style,
            ]}
        >
            {loading ? (
                <View style={styles.content}>
                    <ActivityIndicator
                        size="small"
                        color={variantStyle.spinner}
                    />
                    {loadingText && (
                        <Text
                            style={[
                                styles.text,
                                variantStyle.text,
                                sizeStyle.text,
                                textStyle,
                            ]}
                        >
                            {loadingText}
                        </Text>
                    )}
                </View>
            ) : (
                <View style={styles.content}>
                    {iconOnly ? (
                        children
                    ) : (
                        <>
                            {iconLeft}

                            {children != null && (
                                <Text
                                    style={[
                                        styles.text,
                                        variantStyle.text,
                                        sizeStyle.text,
                                        textStyle,
                                    ]}
                                >
                                    {children}
                                </Text>
                            )}

                            {iconRight}
                        </>
                    )}
                </View>
            )}
        </Pressable>
    );
}

const styles = {
    button: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 8,
    } satisfies ViewStyle,
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
    } satisfies ViewStyle,
    text: {
        fontFamily: "GoogleSans_500Medium",
        textAlign: "center",
    } satisfies TextStyle,
    iconOnly: {
        width: 40,
        height: 40,
        padding: 0,
        borderRadius: 20,
    } satisfies ViewStyle,
};