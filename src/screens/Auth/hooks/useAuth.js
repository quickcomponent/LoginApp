import React, { useState } from "react";
import * as Facebook from "expo-facebook";

const APP_ID = "1029929288288288";
// const APP_ID = "1047121222092614";

Facebook.initializeAsync({
  appId: "APP_ID",
});

export default function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const logInWithFacebook = async () => {
    setIsLoading(true);
    try {
      await Facebook.initializeAsync({
        appId: APP_ID,
      });
      const { type, token, expirationDate, permissions, declinedPermissions } =
        await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile"],
        });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
        setIsAuth(true);
      } else {
        // type === 'cancel'
      }
      setIsLoading(false);
    } catch ({ message }) {
      setIsLoading(false);
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const loginWithEmail = () => {};

  return { logInWithFacebook, loginWithEmail, isLoading, isAuth };
}
