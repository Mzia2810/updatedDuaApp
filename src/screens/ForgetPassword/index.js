import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';
const ForgetPassword =({navigation})=>{
    return(
        <View style={styles.container}>
            {/* <Text>hello forget</Text> */}
            <View style={styles.view}>
            <View style={{}}>
                <View style={{flexDirection:'row'}}>
                <View style={{paddingRight:10}}>
                <Image
                style={styles.image}
                source={require('../../../assets/email.png')}
                />
                </View>
                <Text style={styles.text}>Email</Text>
                </View>
            </View>
            <View style= {{flexDirection:'row'}}>
                <View style={{flexDirection:'column'}}>

                <TextInput
                style={styles.input}
                />
                <Image
                style={{marginRight:hp('2%'),position:'absolute',alignSelf:'flex-end',marginTop:hp('3%')}}
                source={require('../../../assets/eye.png')}
                />
                </View>
            </View>
            <View style={{width:'70%', justifyContent:'center', alignSelf:'center',paddingTop:30,}}>
            <View style={{alignSelf:'center'}}>
                        <TouchableOpacity
                        onPress={() =>navigation.navigate('Verification')}
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Send</Text>
                        </TouchableOpacity>
                        </View>
            </View>
            <View style={{alignSelf:'center',}}>
                <TouchableOpacity onPress={() =>navigation.goBack()}>
                <Text style={styles.login}>Back to login?</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );};
export default ForgetPassword;