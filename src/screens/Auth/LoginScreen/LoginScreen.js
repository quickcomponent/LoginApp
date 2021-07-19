import React, { useRef, useEffect } from "react";
import { Alert, View, Image, StatusBar } from "react-native";
import { KeyboardAwareView } from "react-native-keyboard-aware-view";
import { AnimatedInputFields } from "../../../components";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import AuthBottom from "../components/AuthBottom/AuthBottom";
import styles from "./styles";
import { FIELDS, ERROR_MESSAGES, FIELD_KEYS } from "./inputFieldsConfig";
import { iconSet } from "../../../AppStyles";
import useAuth from "../hooks/useAuth";
import TickLabel from "../components/TickLabel/TickLabel";

export default function LoginScreen() {
  const { logInWithFacebook, loginWithEmail, isAuth } = useAuth();

  const changedFields = useRef({});
  const animatedInputRef = useRef(null);

  useEffect(() => {
    if (isAuth) {
      //handle is authenticated
    }
  }, [isAuth]);

  const onInputFieldsChange = (updatedInputfields) => {
    changedFields.current = updatedInputfields;
  };

  const onPressLogIn = () => {
    const fieldsErred = animatedInputRef.current?.doesErrorExist();

    if (fieldsErred) {
      alertIncompleteFields();
      return;
    }

    const { email, password } = changedFields.current;
    loginWithEmail({ email, password });
  };

  const onRememberMe = (shouldRememberMe) => {};

  const alertIncompleteFields = () => {
    Alert.alert(
      "Incomplete/Invalid Field(s)",
      "Please make sure all fields are complete and valid before submiting.",
      [
        {
          text: "Ok",
        },
      ],
      { cancelable: false }
    );
  };

  const onForgotPassword = () => {};

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={iconSet.logo} />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyActivityContainer}>
          <AuthHeader
            containerStyle={styles.bodyHeaderContainer}
            headerTitle={"Login"}
          />
          <KeyboardAwareView style={styles.inputActivityContainer}>
            <AnimatedInputFields
              ref={animatedInputRef}
              fields={FIELDS.LOG_IN_FIELDS}
              regexFields={FIELDS.REGEX_FIELDS}
              onFieldsChange={onInputFieldsChange}
              errorMessages={ERROR_MESSAGES}
              renderForgotPassword={true}
              forgetPasswordTitleStyle={styles.forgetPasswordTitle}
              onForgotPassword={onForgotPassword}
              passwordKey={FIELD_KEYS.password}
            />
          </KeyboardAwareView>
          <TickLabel
            labelContainerStyle={styles.tickLabelContainer}
            onValueChange={onRememberMe}
          >
            {"Remember me"}
          </TickLabel>
          <AuthBottom
            containerStyle={styles.bodyFooterContainer}
            primaryButtonTitle={"Next"}
            onPrimaryButtonPress={onPressLogIn}
            secondaryButtonTitle={"Login with Facebook"}
            onSecondaryButtonPress={logInWithFacebook}
          />
        </View>
      </View>
    </View>
  );
}
