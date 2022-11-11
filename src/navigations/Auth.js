import { View, Text, Image } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Feather";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/SplashScreen";
import Login from "../screens/Login/index";
import SignUp from "../screens/SignUp/index";
import ForgetPassword from "../screens/ForgetPassword";
import Verification from "../screens/Verification";
import Reset from "../screens/ResetPassword";
import NewPassword from "../screens/NewPassword";
import Email from "../screens/Email/index";
import Payment from '../screens/Payment/index'


const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={
        {headerShown:false,}
    } initialRouteName="Splash">
      {/*  SplashScreen */}
      <Stack.Screen
        name="Splash"
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
      {/*   Login  */}
      <Stack.Screen
        name="login"
       
        component={Login}
      />
      {/*   Login  */}
      <Stack.Screen
        name="signup"
       
        component={SignUp}
      />
      <Stack.Screen
        name="ForgetPassword"
      options={{
        headerShown:true
      }}
        component={ForgetPassword}
      />
      <Stack.Screen
        name="Verification"
      options={{
        headerShown:true
      }}
        component={Verification}
      />
      <Stack.Screen
        name="Reset"
      options={{
        headerShown:true
      }}
        component={Reset}
      />
      <Stack.Screen
        name="NewPassword"
      options={{
        headerShown:true
      }}
        component={NewPassword}
      />
      <Stack.Screen
        name="Email"
      options={{
        headerShown:true
      }}
        component={Email}
      />
      <Stack.Screen
        name="Payment"
      options={{
        headerShown:true
      }}
        component={Payment}
      />
      {/*  When Wake up */}
      {/* <Stack.Screen
        name="WhenWakeUp"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "When Waking up ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={WhenWakeUp}
      /> */}
      {/* <Stack.Screen
        name="Premium"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "Premium ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={Premium}
      /> */}
      {/* <Stack.Screen
        name="Flags"
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },
          headerTintColor: "#fff",

          // headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: "Flags ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
        component={Flags}
      /> */}

      {/* BottomTabNavigator */}
      {/* <Stack.Screen
        name="Bottom"
        component={BottomTabNavigator}
        options={{
          headerStyle: {
            backgroundColor:
              "linear-gradient(180deg, #4E54C8 0%, #A044FF 100%)",
          },

          headerLeft: () => <Ionicons name="sun" size={25} color="#fff" />,
          headerTitle: " ",
          headerRight: () => (
            <>
              <Image
                style={{
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginBottom: 5,
                }}
                source={require("../../assets/usa.png")}
              />
              <Text style={{ color: "#fff", fontSize: 15, marginBottom: 5 }}>
                English
              </Text>
              <Ionicons name="chevron-down" size={25} color="#fff" />
            </>
          ),
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default Auth;
