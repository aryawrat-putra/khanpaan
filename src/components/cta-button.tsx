import { TintedIcon } from "@/components/tinted-icon";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/store/theme";
import { commonStyles } from "@/styles/common";
import { SIZES } from "@/styles/typography";

export default function CtaButton() {
    const { colors } = useTheme();
    const commonStyle = commonStyles(colors);

    return (
        <Button
            onPress={() => console.log("pressed")}
            style={commonStyle.ctaButton}
            variant="default"
        >
            {/* <Image
          source={require("@/assets/images/icons/heart-circle-plus-solid.png")}
          style={commonStyle.mainButtonIcon}
        /> */}
            <TintedIcon
                source={require("@/assets/images/icons/heart-circle-plus-solid.png")}
                color={colors.foreground}
                size={SIZES.large}
            />
        </Button>
    )
}