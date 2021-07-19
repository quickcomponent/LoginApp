import { StyleSheet } from "react-native";
import {
  colorSet,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  sizes,
} from "../../AppStyles";

const borderBottomWidth = 1.5;

const styles = StyleSheet.create({
  container: {
    marginVertical: 1,
  },
  styleLabel: {
    color: colorSet.lightColorSet.secondaryDarkColor,
  },
  styleInput: {
    color: colorSet.lightColorSet.primaryDarkColor,
    fontWeight: "500",
  },
  emptyBodyContent: {
    borderBottomWidth,
    borderBottomColor: colorSet.lightColorSet.secondaryDarkColor,
  },
  nonEmptyBodyContent: {
    borderBottomWidth,
    borderBottomColor: colorSet.lightColorSet.primaryDarkColor,
  },
  // Custom Text input styles

  content: {
    justifyContent: "flex-end",
    // marginVertical: 5,
  },
  bodyContent: {
    borderBottomColor: "black",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  toucheableLineContent: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  label: {
    fontSize: 13,
    paddingBottom: 7,
    color: "#606060",
    fontWeight: "600",
  },
  inputLabelContainer: {
    width: "80%",
    justifyContent: "space-around",
  },
  input: {
    fontSize: sizes.fontSize4 + 3,
    flex: 1,
  },
  error: {
    marginBottom: 5,
    color: "#d32f2f",
    fontSize: 13,
    marginTop: 2,
  },
  sufix: {
    flexDirection: "column-reverse",
  },
});

export default styles;
