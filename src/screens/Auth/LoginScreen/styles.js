import { StyleSheet } from "react-native";
import {
  colorSet,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  sizes,
} from "../../../AppStyles";

const generalPadding = 0.11;
const titlePadding = hp(0.01);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorSet.lightColorSet.mainBackgroundColor,
    justifyContent: "flex-end",
    backgroundColor: colorSet.lightColorSet.primaryDarkColor,
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    // backgroundColor: "#fff",
    // borderRadius: 10,
    // padding: 30,
  },
  bodyContainer: {
    flex: 5,
    // height: "70%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 80,
  },
  bodyActivityContainer: {
    height: "100%",
    width: "77%",
    // backgroundColor: "pink",
    alignSelf: "flex-end",
  },
  bodyHeaderContainer: {
    flex: 2,
    // backgroundColor: "powderblue",
    justifyContent: "center",
  },
  inputActivityContainer: {
    flex: 3,
    // backgroundColor: "pink",
  },
  tickLabelContainer: {
    justifyContent: "flex-end",
    paddingRight: 5,
  },
  bodyFooterContainer: {
    flex: 3.2,
    // backgroundColor: "orange",
  },
  forgetPasswordTitle: {
    color: colorSet.lightColorSet.mainSubTextColor,
    fontSize: 14,
    paddingLeft: 4,
    paddingBottom: hp(0.035),
  },
});

export default styles;
