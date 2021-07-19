import { StyleSheet } from "react-native";
import {
  sizes,
  colorSet,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../AppStyles";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorSet.lightColorSet.primaryDarkColor,
    height: wp(0.15),
    width: wp(0.48),
    // width: wp(0.38),
    borderRadius: 4,
  },
  title: {
    textAlign: "center",
    color: colorSet.lightColorSet.mainLightTextColor,
    fontSize: sizes.fontSize4,
    fontWeight: "600",
  },
});

export default styles;
