import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function AuthHeader(props) {
  const { headerTitle, subheaderTitle, containerStyle } = props;
  return (
    <View style={containerStyle}>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {subheaderTitle && (
        <Text style={styles.subheaderTitle}>{subheaderTitle}</Text>
      )}
    </View>
  );
}
