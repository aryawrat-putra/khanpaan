import { useTheme } from "@/store/theme";
import { SIZES } from "@/styles/typography";
import {
    Text as RNText,
    type TextProps as RNTextProps,
} from "react-native";

type TextVariant =
    | "regular"
    | "medium"
    | "semibold"
    | "bold";

type SizeVariant =
    | "small"
    | "medium"
    | "large";

type TextProps = RNTextProps & {
    variant?: TextVariant;
    size?: SizeVariant;
};

const fonts = {
    regular: "GoogleSans_400Regular",
    medium: "GoogleSans_500Medium",
    semibold: "GoogleSans_600SemiBold",
    bold: "GoogleSans_700Bold",
} as const;

const sizeStyles = {
    small: {
        fontSize: SIZES.small,
        lineHeight: SIZES.small + 2,
        fontWeight: "500" as const,
    },

    medium: {
        fontSize: SIZES.medium,
        lineHeight: SIZES.medium + 3,
        fontWeight: "600" as const,
    },

    large: {
        fontSize: SIZES.large,
        lineHeight: SIZES.large + 4,
        fontWeight: "700" as const,
    },
} as const;

export function Text({
    variant = "medium",
    size = "medium",
    style,
    ...props
}: TextProps) {
    const { colors } = useTheme();

    return (
        <RNText
            {...props}
            style={[
                {
                    letterSpacing: 1,
                    color: colors.foreground,
                    fontFamily: fonts[variant],
                    ...sizeStyles[size],
                },
                style,
            ]}
        />
    );
}