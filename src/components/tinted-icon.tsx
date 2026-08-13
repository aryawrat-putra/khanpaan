import MaskedView from "@react-native-masked-view/masked-view";
import { Image, View } from "react-native";

type TintedIconProps = {
  source: any;
  color: string;
  size: number;
};

export function TintedIcon({
  source,
  color,
  size,
}: TintedIconProps) {
  return (
    <MaskedView
      style={{
        width: size,
        height: size,
      }}
      maskElement={
        <Image
          source={source}
          style={{
            width: size,
            height: size,
          }}
        />
      }
    >
      <View
        style={{
          width: size,
          height: size,
          backgroundColor: color,
        }}
      />
    </MaskedView>
  );
}