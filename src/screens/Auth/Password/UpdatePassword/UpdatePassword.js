import React from "react";
import { View, Text } from "react-native";
import { Button, AnimatedTextInput } from "../../../../components";
import styles from "../styles";

export default function UpdatePassword() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{"Update your password"}</Text>
        <Text style={styles.headerDescription}>
          {"Please enter your new password."}
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.activityContainer}>
          <AnimatedTextInput
            secureTextEntry={true}
            placeholder={"Password"}
            onInputTextChange={() => {}}
          />
          <AnimatedTextInput
            secureTextEntry={true}
            placeholder={"Confirm password"}
            onInputTextChange={() => {}}
          />
          <Button>{"RESET PASSWORD"}</Button>
        </View>
      </View>
    </View>
  );
}
