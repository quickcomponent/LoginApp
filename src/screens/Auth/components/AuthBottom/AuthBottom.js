import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "../../../../components";
import styles from "./styles";

export default function AuthBottom({
  icon,
  primaryButtonTitle,
  onPrimaryButtonPress,
  primaryFooterContainerStyle,
  secondaryFooterContainerStyle,
  containerStyle,
  onSecondaryButtonPress,
  secondaryButtonTitle,
}) {
  return (
    <View style={containerStyle}>
      <View
        style={[styles.primaryFooterContainer, primaryFooterContainerStyle]}
      >
        <Button
          onPress={onPrimaryButtonPress}
          containerStyle={styles.buttonStyle}
        >
          {primaryButtonTitle}
        </Button>
      </View>
      <View
        style={[styles.secondaryFooterContainer, secondaryFooterContainerStyle]}
      >
        <TouchableOpacity onPress={onSecondaryButtonPress}>
          <Text style={styles.secondaryButtonTitle}>
            {secondaryButtonTitle}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
