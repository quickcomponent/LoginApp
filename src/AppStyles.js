import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const heightPercentageToDP = (number) => {
  return Math.floor(height * number);
};

const widthPercentageToDP = (number) => {
  return Math.floor(width * number);
};

const lightColorSet = {
  mainBackgroundColor: "#fff",
  primaryDarkColor: "#062242",
  secondaryDarkColor: "#d4d4d4",
  mainDarkTextColor: "#062242",
  mainLightTextColor: "#fff",
  mainSubTextColor: "#a5b0bd",
  altSubTextColor: "#797a8d",
  whiteColor: "#fff",
  grey1: "#cacad2",
  grey4: "#f2f2f3",
  grey5: "#f0f0f0",
  appColor: "#ea9f5a",
};

const darkColorSet = {
  mainBackgroundColor: "#2f3641",
  primaryDarkColor: "#232528",
  secondaryDarkColor: "#2f3641",
  mainDarkTextColor: "#062242",
  mainLightTextColor: "#fff",
  mainSubTextColor: "#a5b0bd",
  altSubTextColor: "#797a8d",
  grey1: "#cacad2",
  grey4: "#f2f2f3",
  grey5: "#f0f0f0",
  whiteColor: "#fff",
  appColor: "#ea9f5a",
};

const colorSet = {
  lightColorSet,
  darkColorSet,
};

const iconSet = {
  facebook: require("../assets/icons/facebook.png"),
  tick: require("../assets/icons/tick.png"),
  logo: require("../assets/icons/logo.png"),
};

const sizes = {
  fontSize1: heightPercentageToDP(0.0427),
  fontSize2: heightPercentageToDP(0.0337),
  fontSize3: heightPercentageToDP(0.0249),
  fontSize4: heightPercentageToDP(0.018),
  fontSize5: heightPercentageToDP(0.0148),
  fontSize6: heightPercentageToDP(0.0108),
};

export { colorSet, heightPercentageToDP, widthPercentageToDP, sizes, iconSet };
