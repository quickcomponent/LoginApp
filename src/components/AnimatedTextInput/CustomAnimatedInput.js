import React, { useState, useEffect, useCallback } from "react";
import { View, TextInput, Animated, Text } from "react-native";
import styles from "./styles";

export default function CustomAnimatedInput({
  placeholder,
  errorText,
  valid,
  errorColor,
  disabled,
  value,
  onInputBlur,
  prefix,
  sufix,
  styleInput,
  styleLabel,
  styleError,
  styleContent,
  styleBodyContent,
  ...others
}) {
  const [showInput, setShowInput] = useState(false);
  const [showError, setShowError] = useState(false);
  const [animatedIsFocused] = useState(new Animated.Value(1));
  const [isInputFocused, setInputFocus] = useState(false);

  const inputFontSize = styleInput.fontSize || styles.input.fontSize;
  const labelFontSize = styleLabel.fontSize || styles.label.fontSize;
  const errorFontSize = styleError.fontSize || styles.error.fontSize;

  useEffect(() => {
    setShowError(!valid);
    if (value) {
      setShowInput(true);
    }
    if (value && !showInput) {
      startAnimation();
    }
    animationView();
  }, [
    valid,
    value,
    animationView,
    animationLabelFontSize,
    animatedIsFocused,
    startAnimation,
    showInput,
  ]);

  const onBlur = () => {
    setInputFocus(false);
    if (!value) {
      setShowInput(false);
      setShowError(false);
      startAnimation();
    }
    onInputBlur && onInputBlur();
  };

  const onFocus = () => {
    setInputFocus(true);
    if (!showInput) {
      startAnimation();
    }
  };

  const borderColor = () => {
    const borderStyle = {};
    borderStyle.borderBottomColor =
      styleBodyContent.borderBottomColor ||
      styles.bodyContent.borderBottomColor;
    if (showError) {
      borderStyle.borderBottomColor = errorColor || "#d32f2f";
    }
    return borderStyle;
  };

  const setContentHeight = () => {
    const fontsHeight = labelFontSize + inputFontSize + errorFontSize + 25;
    const internalVerticalSpaces = 16;
    return fontsHeight + internalVerticalSpaces;
  };

  const getErrorContentSpace = () => {
    return errorFontSize + 2;
  };

  const startAnimation = useCallback(() => {
    Animated.timing(animatedIsFocused, {
      toValue: showInput ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start(() => {
      if (!showInput) {
        setShowInput(true);
      }
    });
  }, [animatedIsFocused, showInput]);

  const animationView = useCallback(() => {
    const sizeShow = 15 + labelFontSize + inputFontSize + 10;
    const sizeHide = 15 + labelFontSize;
    const inputAdjust = {
      height: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [sizeShow, sizeHide],
      }),
    };
    return inputAdjust;
  }, [animatedIsFocused, inputFontSize, labelFontSize]);

  const animationLabelFontSize = useCallback(() => {
    const fontAdjust = {
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [labelFontSize, inputFontSize],
      }),
    };
    return fontAdjust;
  }, [animatedIsFocused, inputFontSize, labelFontSize]);

  return (
    <View
      style={[
        styles.content,
        styleContent,
        { height: setContentHeight(), marginVertical: isInputFocused ? 7 : 2 },
      ]}
    >
      <Animated.View
        style={[
          styles.bodyContent,
          styleBodyContent,
          borderColor(showError),
          {
            marginBottom: showError ? 0 : getErrorContentSpace(),
          },
          animationView(),
        ]}
      >
        <View style={styles.inputLabelContainer}>
          <Animated.Text
            style={[styles.label, styleLabel, animationLabelFontSize()]}
            onPress={() => !disabled && onFocus()}
          >
            {placeholder}
          </Animated.Text>
          {showInput && (
            <View style={styles.toucheableLineContent}>
              <>{prefix}</>
              <TextInput
                {...others}
                value={value}
                pointerEvents={disabled ? "box-none" : "auto"}
                selectionColor={styleInput.fontColor}
                autoFocus={true}
                blurOnSubmit={true}
                editable={!disabled}
                onBlur={() => onBlur()}
                style={[styles.input, styleInput]}
                onEndEditing={() => onBlur()}
              />
            </View>
          )}
        </View>
        <View style={styles.sufix}>{sufix}</View>
      </Animated.View>
      {showError && (
        <Text
          style={[
            styles.error,
            errorColor && { color: errorColor },
            styleError,
          ]}
        >
          {errorText}
        </Text>
      )}
    </View>
  );
}

CustomAnimatedInput.defaultProps = {
  valid: true,
  disabled: false,
  value: "",
  styleInput: {},
  styleBodyContent: {},
  styleLabel: {},
  styleError: {},
};
