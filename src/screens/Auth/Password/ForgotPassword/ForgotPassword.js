import React from "react";
import { View, Text } from "react-native";
import { Button, AnimatedTextInput } from "../../../../components";
import styles from "../styles";

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{"Forgot Password?"}</Text>
        <Text style={styles.headerDescription}>
          {
            "Please enter your email address and we will send your password by email immediately."
          }
        </Text>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.activityContainer}>
          <AnimatedTextInput
            placeholder={"Email"}
            onInputTextChange={() => {}}
          />
          <Button>{"SEND"}</Button>
        </View>
      </View>
    </View>
  );
}
