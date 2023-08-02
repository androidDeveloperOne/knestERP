import { Camera, CameraType } from "expo-camera";
import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  StatusBar,
  SafeAreaViewBase,
  useColorScheme,

} from "react-native";
import { WebView } from "react-native-webview";
import * as Updates from 'expo-updates'
import WebDashboard from "./src/webDashboard";
import { Colors } from "react-native/Libraries/NewAppScreen";
export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
// const {height,width} = useWindowDimensions()
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [camera, setCamera] = useState(null);
//   const [image, setImage] = useState(null);


//   useEffect(() => {
//     (async () => {
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();

//       setHasPermission(cameraStatus.status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <View>
//         {/* <Text>Open up App.js to start working on your app!</Text> */}
//       </View>
//     );
//   }

//   if (hasPermission === false) {
//     return <Text style={styles.header}>No access to camera</Text>;
//   }

// async function onFetchUpdateAync(){
//   try{
//     const update= await Updates.checkForUpdateAsync();
//     if (update.isAvailable) {
//       await Updates.fetchUpdateAsync();
//       await Updates.reloadAsync();
//     }
//   }catch(error){
// alert(`Error fetching lates upadate ${error}`)
//   }
// }
const isDarkMode = useColorScheme() === 'dark';
const backgroundStyle = {
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
};

  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
 
    //   <SafeAreaView style={{ flex: 1 }}>
    //     <WebView
    //       source={{ uri: "https://erp.knestcrm.com" }}
    //       style={{ flex: 1, height:height, width:width }}
    //       // onNavigationStateChange={(navState) => {
      

    //       // }}


    //     />

    //     <View>
    //       <Button
    //       onPress={onFetchUpdateAync}
    //       title="update"
    //       ></Button>
    //     </View>
    //   </SafeAreaView>










      
    // </View>

    <React.Fragment>
    <StatusBar
      barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
      <WebDashboard/>
      <StatusBar style="auto" />

    </React.Fragment>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   fixedRatio: {
//     flex: 1,
//     aspectRatio: 1,
//   },

//   header: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
