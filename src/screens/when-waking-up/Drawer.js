import React, { useState } from "react";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Dimensions,
  SafeArray,
  FlatList,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");
// You can import from local files
// import AssetExample from "./components/AssetExample";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
// or any pure javascript modules available in npm
import { Card } from "react-native-paper";

export default function DrawerComponent({show,setShow}) {
//   const [show, setShow] = useState(false);
  const [playIcon, setPlay] = useState(false);
  const [press, setPress] = useState(false);
  //  const onPress = () => setPlay(true);
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const renderItem = ({ title }) => (
    <Pressable
      style={[styles.button, styles.buttonClose]}
      onPress={() => setShow(!show)}
    >
      <View style={{ flexDirection: "row" }}>
        {playIcon == false ? (
          <TouchableOpacity onPress={() => setPlay(true)}>
            <Ionicons
              name="play"
              size={30}
              color="black"
              style={{ marginRight: 40 }}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setPlay(false)}>
            <Ionicons
              name="pause"
              size={30}
              color="black"
              style={{ marginRight: 40 }}
            />
          </TouchableOpacity>
        )}

        <Text style={styles.textStyle}>my item</Text>
      </View>
    </Pressable>
  );

  return (
    
    <Pressable
      style={styles.centeredView}
      onPress={() => {
             setShow(!show);
            alert("im presses")
      }
    }
    >
      <View
        
        onPress={() => setShow(!show)}
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={show}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setShow(!show);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setShow(true)}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    position:'absolute',
    width:wp('100%'),
    height:hp('100%'),
    zIndex:5,

    backgroundColor: "transparent",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor:'red',
    marginTop: 15,
  },
  modalView: {
    //  margin: 20,
   
    backgroundColor: "white",
    // borderRadius: 20,
    // padding: 35,
    width: 210,
    // height:'100%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: height,
  },
  button: {
    //  borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: width / 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {},
  textStyle: {
    color: "black",
    top: 5,
    right: 20,
    // fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: "center"
  },
});
