import { StyleSheet, Text, View, Button, TextInput, Image, Alert, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Ionicc from 'react-native-vector-icons/Fontisto'
import { useState } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import validator from 'validator';
export default function FogotPassword({ navigation }) {
    // const checkEmail=validator.isEmail(email);
    const [email, setEmail] = useState("");
    const baseUrl = 'https://medpro.onrender.com/api/v1/auth';
    const checkEmail=validator.isEmail(email);
    const onSubmitFormHandler = async (event) => {
        if(checkEmail){
            if (!email.trim() ) {
                Alert.alert("Vui lòng điền đầy đủ thông tin");
                return;
              }
          
              
              const response = await axios.post(`${baseUrl}/forgot-password`, {
                email,
              });
          
              try {
          
                if (response.data.message != null) {
                  
                  Alert.alert(response.data.message);
                  navigation.navigate("Login")
                } else {
                  throw new Error(response.data.message);
                }
              } catch (error) {
                Alert.alert(response.data.message);
          
              }
        }
        else{
            Alert.alert("Vui lòng nhập đúng định dạng Email!!!");
        }
        
      };

    const clearEmail = () =>
        setEmail('');
    return (
        <View>
            <ImageBackground source={require("../Img/background_login.jpg")} style={{ height: '100%', opacity: 0.8 }}>
                <View style={styles.headerAuth}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} onPress={() => navigation.navigate("Login")}>
                        <Ionic name={"chevron-back"} style={{ fontSize: 30, color: '#fff' }} />
                        <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView >

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 45, color: '#fff', letterSpacing: 5 }}>MedPro</Text>
                    </View>
                    <View style={{ padding: 30, flexDirection: 'column', justifyContent: 'center'}}>
                        <View style={styles.titleContent}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff' }} >Quên mật khẩu</Text>
                        </View>
                        <View style={styles.inputCross}>
                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                <Ionicc name="email" style={{ fontSize: 27, color: '#000' }} />
                                <TextInput
                                    style={styles.inputUser}
                                    placeholder='Nhập vào email'
                                    placeholderTextColor='gray'
                                    onChangeText={(value) => setEmail(value)}
                                    value={email}


                                />
                            </View>
                            <View>

                                <TouchableOpacity
                                    onPress={clearEmail}>
                                    <Ionic name={email ? "close-sharp" : ''} style={{ fontSize: 24, color: '#000' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.button} onPress={onSubmitFormHandler}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerAuth: {
        padding: 20,

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputCross: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: "space-between",
        alignItems: 'center',
    },
    inputUser: {
        fontSize: 16,
        width: '80%'
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 45,
        
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
        color: "#0093E1",
        alignItems: 'center',
      },
    btn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    
      },
})