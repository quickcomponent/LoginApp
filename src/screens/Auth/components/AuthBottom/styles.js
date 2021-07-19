import { StyleSheet } from "react-native";
import {
  colorSet,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  sizes,
} from "../../../../AppStyles";

const titlePadding = hp(0.01);

const styles = StyleSheet.create({
  primaryFooterContainer: {
    flex: 1.2,
    paddingTop: 20,
    // backgroundColor: "green",
    // justifyContent: "flex-start",
  },
  buttonStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  secondaryFooterContainer: {
    flex: 0.8,
    // backgroundColor: "gold",
    // justifyContent: "flex-end",
  },
  secondaryButtonTitle: {
    fontSize: sizes.fontSize4 + 2,
    fontWeight: "300",
    color: colorSet.lightColorSet.primaryDarkColor,
  },
});

export default styles;
