import { StyleSheet } from "react-native";
import {
  colorSet,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "../../../AppStyles";

const generalPadding = 0.11;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorSet.lightColorSet.mainBackgroundColor,
  },
  headerContainer: {
    flex: 2,
    justifyContent: "center",
    backgroundColor: colorSet.lightColorSet.mainBackgroundColor,
    paddingHorizontal: wp(generalPadding),
  },
  headerTitle: {
    color: colorSet.lightColorSet.mainDarkTextColor,
    fontSize: hp(0.0327),
    fontWeight: "800",
    paddingRight: hp(0.0427),
  },
  headerDescription: {
    color: colorSet.lightColorSet.mainDarkTextColor,
    fontSize: hp(0.017),
    marginTop: 23,
    fontWeight: "400",
  },
  bodyContainer: {
    flex: 8,
    backgroundColor: colorSet.lightColorSet.mainBackgroundColor,
    paddingHorizontal: wp(generalPadding),
  },
  activityContainer: {
    width: "100%",
    height: "65%",
    paddingVertical: 5,
  },
});

export default styles;
