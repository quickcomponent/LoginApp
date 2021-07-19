import React, {
  forwardRef,
  useRef,
  useImperativeHandle,
  useState,
} from "react";
import { Text, TouchableOpacity } from "react-native";
import AnimatedTextInput from "../AnimatedTextInput/AnimatedTextInput";

const AnimatedInputFields = (
  {
    fields,
    regexFields,
    onFieldsChange,
    errorMessages,
    onForgotPassword,
    renderForgotPassword,
    forgetPasswordTitleStyle,
    passwordKey,
    containerStyle,
  },
  ref
) => {
  useImperativeHandle(ref, () => ({
    doesErrorExist: doesErrorExist,
  }));

  const changedFields = useRef({});
  const [errorFields, setErrorFields] = useState({});

  const onInputFieldsChange = (value, inputField) => {
    changedFields.current[inputField.key] = value.trim();
    onFieldsChange(changedFields.current, errorFields);
  };

  const checkIfValidInput = (key) => {
    const value = changedFields.current[key];
    const didPassTest = regexFields[key].test(value) && value?.length > 0;
    if (!didPassTest) {
      setErrorFields((prevErrFields) => {
        return {
          ...prevErrFields,
          [key]: {
            isValid: false,
            errorText: errorMessages[key],
          },
        };
      });
      return false;
    } else {
      setErrorFields((prevErrFields) => {
        return {
          ...prevErrFields,
          [key]: {
            isValid: true,
          },
        };
      });
      return true;
    }
  };

  const doesErrorExist = () => {
    let isErred = Object.keys(changedFields.current)?.length === 0;
    if (isErred) {
      return isErred;
    }
    const errorFieldKeys = Object.keys(errorFields);
    for (let index = 0; index < errorFieldKeys.length; index++) {
      const key = errorFieldKeys[index];
      const isValidInput = checkIfValidInput(key);
      if (!errorFields[key].isValid || !isValidInput) {
        isErred = !isValidInput;
        break;
      }
    }
    return isErred;
  };

  const onBlur = (inputFieldKey) => {
    checkIfValidInput(inputFieldKey);
  };

  const renderForgotTitle = () => {
    return (
      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={forgetPasswordTitleStyle}>{"Forgot?"}</Text>
      </TouchableOpacity>
    );
  };

  const renderInputField = (inputField, index) => {
    const shouldRenderForgotPassword =
      renderForgotPassword && inputField.key === passwordKey;
    return (
      <AnimatedTextInput
        key={index.toString()}
        containerStyle={containerStyle}
        placeholder={inputField.placeholder}
        onInputTextChange={(value) => onInputFieldsChange(value, inputField)}
        onBlur={() => onBlur(inputField.key)}
        isValid={errorFields[inputField.key]?.isValid}
        errorText={errorFields[inputField.key]?.errorText}
        secureTextEntry={inputField.secureTextEntry}
        sufix={shouldRenderForgotPassword && renderForgotTitle()}
      />
    );
  };

  return <>{fields.map(renderInputField)}</>;
};

export default forwardRef(AnimatedInputFields);
