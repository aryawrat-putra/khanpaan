import type { ColorsType } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const commonStyles = (colors: ColorsType) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: colors.background,
        },
    });