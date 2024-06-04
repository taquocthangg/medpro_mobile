import { StyleSheet, Text, View, Button, TextInput, Image, Alert, TouchableOpacity ,ImageBackground} from 'react-native'
import React, { useEffect } from 'react'
import { Input } from 'react-native-elements';
import Ionic from 'react-native-vector-icons/Ionicons'
import { useState } from 'react';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

export default function Login({ navigation }) {
  const baseUrl = 'https://medpro.onrender.com/api/v1/auth';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword,sethidePassword]= useState(true);
  const onChangeUserHandler = (email) => {
    setEmail(email);
  };
  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };
  const clearEmail = () =>
    setEmail('');


   
  const onSubmitFormHandler = async (event) => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Vui lòng điền đầy đủ thông tin");
      return;
    }

    
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });

    try {

      if (response.data.access_token != null) {
       
        Alert.alert(response.data.mess);
        navigation.navigate("NavigationTag")
        setEmail("");
        setPassword("");
      } else {
        throw new Error(response.data.mess);
      }
    } catch (error) {
      Alert.alert(response.data.mess);

    }
  };
  
  return (
    <ImageBackground source={require("../Img/background_login.jpg")} style={{ height: '100%', opacity: 0.8 }}>
          <View style={styles.containerLogin}>
      
      <View style={{flex:1.3}}>
      <View style={styles.logoLogin}>
        <Text style={styles.titleLogoLogin}>MedPro</Text>
      </View>
      <View style={styles.inputLogin}>
        <Text style={{ textAlign: 'center', paddingBottom: 25, color: '#fff', fontSize: 24, fontWeight: 'bold' }}>Đăng nhập</Text>
        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.inputCross}>
            <TextInput
              style={styles.inputUser}
              placeholder='Nhập vào email'
              onChangeText={(value) => onChangeUserHandler(value)}
              value={email}
              placeholderTextColor={'#fff'}

            />
            <View>

              <TouchableOpacity
                onPress={clearEmail}>
                <Ionic name={email ? "close-sharp" : ''} style={{fontSize:25,color:'#fff',marginTop:8}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.inputCross}>
            <TextInput
              style={styles.inputUser}
              placeholder='Nhập vào mật khẩu'
              placeholderTextColor={'#fff'}
              onChangeText={(value) => onChangePasswordHandler(value)}
              value={password}
              secureTextEntry={hidePassword}
            />
            <View>

              <TouchableOpacity
              onPress={()=>{
                sethidePassword((prev)=>!prev);
              }}
                >
                <Ionic name={password ? "eye-off-sharp" : ""} style={{fontSize:21,color:'#fff',marginTop:8}} />
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.button} onPress={onSubmitFormHandler}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.fogotPassword}>
          <TouchableOpacity onPress={()=>navigation.navigate("FogotPassword")}>
            <Text style={styles.textFogotPassword}>Quên mật khẩu</Text>
          </TouchableOpacity>
        </View>
     
      </View>
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15,flex:0.12}} >
        <Text style={{ fontSize: 15, color: '#fff' }}>Bạn chưa có tài khoản?</Text>
        <Text onPress={() => navigation.navigate("Auth")} style={{ fontSize: 15, textDecorationLine: 'underline', fontWeight: '700' }}> Đăng ký</Text>
      </View>

    </View>
      </ImageBackground>
  

  )

}

const styles = StyleSheet.create({
  containerLogin: {
    height:'100%',
    

  },
  logoLogin: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogoLogin:{
    fontWeight: 'bold', 
    fontSize: 45, 
    color: '#fff', 
    letterSpacing: 5
  },
  btnLogin: {
    flex: 1,
  },
  inputLogin: {
    width: '100%',
    color: 'while',
  },
  inputCross: {
    width: "80%",
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#fff',
    height: 60,
    justifyContent: "space-between",
    alignItems: 'center',
    // marginBottom:'20',
  },
  inputUser: {
    color: '#fff',
    fontSize: 17,
    width: '90%',
    paddingTop: 5,
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
  btnUser: {

  },
  lableAuth: {
    fontSize: 18,
  },
  password:{
    display:'flex'
  },
  fogotPassword:{
    flexDirection:'row',
    justifyContent:'flex-end',
    paddingRight:50,
    marginTop:20
  },
  textFogotPassword:{
    fontSize:15,
    textDecorationLine: 'underline',
    fontWeight:'bold'
  }
})