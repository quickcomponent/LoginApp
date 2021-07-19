import { StyleSheet } from "react-native";
import {
  colorSet,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  sizes,
} from "../../../../AppStyles";

const titlePadding = hp(0.01);

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: sizes.fontSize1,
    // paddingTop: titlePadding,
    // paddingBottom: Math.floor(titlePadding * 0.4),
    fontWeight: "600",
    color: colorSet.lightColorSet.mainDarkTextColor,
  },
  subheaderTitle: {
    fontSize: sizes.fontSize4,
    paddingVertical: titlePadding,
    fontWeight: "400",
    color: colorSet.lightColorSet.mainSubTextColor,
  },
});

export default styles;
