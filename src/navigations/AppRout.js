import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./MainStack";
import Auth from "./Auth";
// import { useSelector } from "react-redux";
// import { store } from './app/store'
// import { Provider } from 'react-redux'
const AppRout = () => {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);

  // const [user,setUser] = useState(false);
  // const [user, setUser] = useState();
    // const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <NavigationContainer>

<MainStack />

      {/* {isLoggedIn ? <MainStack /> : <Auth />} */}
    </NavigationContainer>
  );
};

export default AppRout;
