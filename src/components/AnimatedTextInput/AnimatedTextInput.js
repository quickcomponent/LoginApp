import React, { useState, useEffect } from "react";
import { View } from "react-native";
import CustomAnimatedInput from "./CustomAnimatedInput";
import styles from "./styles";

export default function AnimatedTextInput({
  isValid,
  onInputTextChange,
  onBlur,
  emptyBodyContent,
  styleLabel,
  styleInput,
  nonEmptyBodyContent,
  containerStyle,
  placeholder,
  errorText,
  prefix,
  sufix,
  secureTextEntry,
}) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [value, setValue] = useState("");

  useEffect(() => {
    setIsEmpty(!(value?.trim().length > 0));
  }, [value]);

  const onChangeText = (input) => {
    setValue(input);
    onInputTextChange(input);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* alternatively, you can use the plain TextInput here with any customization */}
      <CustomAnimatedInput
        placeholder={placeholder}
        valid={isValid}
        errorText={errorText}
        onChangeText={onChangeText}
        onInputBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        styleLabel={Object.assign(styles.styleLabel, styleLabel)}
        styleInput={Object.assign(styles.styleInput, styleInput)}
        styleBodyContent={
          isEmpty
            ? Object.assign(styles.emptyBodyContent, emptyBodyContent)
            : Object.assign(styles.nonEmptyBodyContent, nonEmptyBodyContent)
        }
        prefix={prefix}
        sufix={sufix}
      />
    </View>
  );
}
