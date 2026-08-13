import type { ColorsType } from "@/styles/colors";
import { SIZES } from "@/styles/typography";
import { StyleSheet } from "react-native";

export const commonStyles = (colors: ColorsType) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.background,
        },

        ctaButton: {
            position: "absolute",
            right: 20,
            bottom: 150,
            backgroundColor: colors.background,
            paddingHorizontal: SIZES.small,
            paddingVertical: SIZES.small,
            borderRadius: 100,
            borderWidth: 1,
            borderColor: colors.border,
            borderStyle: "solid",
            boxShadow: colors.shadow2xl,
        },
    });