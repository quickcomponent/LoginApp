import { StyleSheet } from "react-native";
import { colorSet } from "../../../../AppStyles";

const tickIconSize = 12;
const tickIconContainerSize = tickIconSize + 5;

const styles = StyleSheet.create({
  labelContainer: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 25,
    alignItems: "center",
  },
  tickContainer: {
    width: tickIconContainerSize,
    height: tickIconContainerSize,
    backgroundColor: colorSet.lightColorSet.primaryDarkColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  tickIcon: {
    width: tickIconSize,
    height: tickIconSize,
    tintColor: colorSet.lightColorSet.mainLightTextColor,
  },
  labelTitle: {
    paddingLeft: 10,
    fontWeight: "400",
  },
});

export default styles;
