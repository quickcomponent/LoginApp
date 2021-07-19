import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import styles from "./styles";
import { iconSet } from "../../../../AppStyles";

export default function TickLabel({
  children,
  labelContainerStyle,
  onValueChange,
}) {
  const [isRememberMe, setIsRememberMe] = useState(false);

  useEffect(() => {
    onValueChange(isRememberMe);
  }, [isRememberMe]);

  const onRememberMe = () => {
    setIsRememberMe((prevIsRememberMe) => !prevIsRememberMe);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onRememberMe}
      style={[styles.labelContainer, labelContainerStyle]}
    >
      <View style={styles.tickContainer}>
        {isRememberMe && (
          <Image style={styles.tickIcon} source={iconSet.tick} />
        )}
      </View>
      <Text style={styles.labelTitle}>{children}</Text>
    </TouchableOpacity>
  );
}
