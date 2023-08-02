import React, { useEffect, useRef, useState } from "react";
import {
  BackHandler,
  Button,
  Linking,
  Platform,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { Camera } from "expo-camera";

const WebDashboard = () => {
  const webViewRef = useRef(null);
  const { width, height } = useWindowDimensions();
  const [canGoBack, setCanGoBack] = useState(false);
  const [permission, requestPermission] = Camera.useCameraPermissions();

 

  useEffect(() => {
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", onAndroidBackPress);
    }
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", onAndroidBackPress);
    };
  }, [canGoBack]);

  const onAndroidBackPress = () => {
    if (canGoBack) {
      webViewRef.current.goBack();
      return true;
    } else {
      BackHandler.exitApp();
      return false;
    }
  };

  if (!permission?.granted){
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{padding:20}}>Camera permission is required to continue.</Text>
          <Button title="Continue" onPress={requestPermission} />
        </View>
      );
  } 

  const onNavigationStateChange = (navState) => {
    setCanGoBack(navState.canGoBack);
  };

  return (
    <WebView
      ref={webViewRef}
      allowsBackForwardNavigationGestures
      geolocationEnabled={true}
      javaScriptEnabled={true}
      sharedCookiesEnabled={true}
      startInLoadingState={true}
      cacheEnabled={true}
      source={{ uri: "https://erp.knestcrm.com" }}
      onNavigationStateChange={onNavigationStateChange}
      style={{ width: width, height: height, borderWidth: 1 }}
    />
  );
};

export default WebDashboard;
