import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function Button(props) {
  const { children, containerStyle, titleStyle, ...otherProps } = props;
  const renderChildren = () => {
    if (typeof children === "string") {
      return (
        <Text style={[styles.title, titleStyle]} {...otherProps}>
          {children}
        </Text>
      );
    } else {
      return children;
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, containerStyle]}
      {...otherProps}
    >
      {renderChildren()}
    </TouchableOpacity>
  );
}
