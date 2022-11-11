import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
 container:{
    flex:1,
    height:height,
    width:width,

 },
 text:{
    width:wp('90'),
    height:48,
    fontSize:16,
    fontWeight:"400",
    color:'#FFFFFF',
    alignSelf:'center',
    padding:hp('3%'),
    padding:wp('3%'),
  },
  heading:{
    fontSize:24,
    fontWeight:"500",
    color:'#FFFFFF',
    alignSelf:'center',
    padding:hp('2%'),
    padding:wp('2%'),
  },
  button:{
    backgroundColor:'#A044FF',
    borderRadius:10,
    padding:hp('3%'),
    justifyContent:'center',
    alignContent:'center',
    width:wp('85%'),
    height:hp('7%'),
},
buttontxt:{
    color:'white',
    padding:3,
    alignSelf:'center'
},
});
export default styles;