import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import Ionicc from 'react-native-vector-icons/Fontisto'
import { useState } from 'react';
import axios from 'axios';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import validator from 'validator';

export default function Auth({ navigation }) {
  const baseUrl = 'https://medpro.onrender.com/api/v1/auth';
  const data = [
    { label: 'Nam', value: '1' },
    { label: 'Nữ', value: '2' },
  ];
  const [address, setAddress] = useState("");
  const [nameUser, setnameUser] = useState("");
  const [ageUser, setAgeUser] = useState("");
  const [sexUser, setSexUser] = useState("");
  const [email, setEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, sethidePassword] = useState(true);
  const [hideisPassword, sethideyPassword] = useState(true);
 
 
  const checkEmail=validator.isEmail(email);

  const onChangeUserEmailHandler = (email) => {
    setEmail(email);
  };
  const onChangePasswordHandler = (password) => {
    setPassword(password);
  };

  const onChangeisPasswordHandler = (isPassword) => {
    setIsPassword(isPassword);
  };

  const clearEmail = () =>
    setEmail('');
  const clearAddress = () =>
    setAddress('');
  const clearAge = () =>
    setAgeUser('');
  const clearName = () =>
    setnameUser('');

    const onSubmitFormHandler = async (event) => {
        if ( nameUser &&email &&ageUser &&address  &&sexUser && password  && isPassword ) {
          if(checkEmail){
            if(  password === isPassword){
              
              const response = await axios.post(`${baseUrl}`, {
                name: nameUser,
                email :email,
                diaChi: address,
                // namSinh : ageUser,
                gioiTinh: sexUser,
                password: password,
                sdt: ageUser
                 });
           
                 try {
                   if (response.data.access_token != null) {
                     Alert.alert(response.data.mess);
                     navigation.navigate("Login")
                   } else {
                     throw new Error(response.data.mess);
                   }
                 } catch (error) {
                   Alert.alert(response.data.mess);
             
                 }
           
          }
          else{
            Alert.alert("Vui lòng điền đầy đủ thông tin");
          }
          }
          else{
            Alert.alert("Vui lòng nhập đúng định dạng Email!!");
          }
         
        
       
        
      }
      else{
        Alert.alert("Vui lòng điền đầy đủ thông tin ");
      }

    };
  const [value, setValue] = useState("");
  const renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem} >{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={styles.icon}
            color="green"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };
  return (
    <View>
    <ImageBackground source={require("../Img/background_login.jpg")} style={{ height: '100%', opacity: 0.8 }}>
        <SafeAreaView>
        <View style={styles.headerAuth}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }} onPress={() => navigation.navigate("Login")}>
            <Ionic name={"chevron-back"} style={{ fontSize: 30, color: '#fff' }} />
            <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 45, color: '#fff', letterSpacing: 5 }}>MedPro</Text>
          </View>
          <View style={styles.titleContent}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff',paddingTop:20 }} >Đăng ký</Text>
          </View>
          <View style={{ flex: 0.9, padding: 30, flexDirection: 'column', gap: 15 }}>
            <View style={styles.inputCross}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Ionicc name="email" style={{ fontSize: 27, color: '#000' }} />
                <TextInput
                  style={styles.inputUser}
                  placeholder='Nhập vào email'
                  placeholderTextColor='gray'
                  onChangeText={(value) => onChangeUserEmailHandler(value)}
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
            <View style={styles.inputCross}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <AntDesign name="user" style={{ fontSize: 27, color: '#000' }} />
                <TextInput
                  style={styles.inputUser}
                  placeholder='Họ và Tên'
                  placeholderTextColor='gray'
                  onChangeText={(value) => setnameUser(value)}
                  value={nameUser}


                />
              </View>
              <View>

                <TouchableOpacity
                  onPress={clearName}>
                  <Ionic name={nameUser ? "close-sharp" : ''} style={{ fontSize: 24, color: '#000' }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputCross}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <AntDesign name="user" style={{ fontSize: 27, color: '#000' }} />
                <TextInput
                  style={styles.inputUser}
                  placeholder='Tuổi'
                  placeholderTextColor='gray'
                  onChangeText={(value) => setAgeUser(value)}
                  value={ageUser}
                  inputMode='tel'
                />
              </View>
              <View>

                <TouchableOpacity
                  onPress={clearAge}>
                  <Ionic name={ageUser ? "close-sharp" : ''} style={{ fontSize: 24, color: '#000' }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.inputCross}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Ionic name="home-outline" style={{ fontSize: 24, color: '#000' }} />
                <TextInput
                  style={styles.inputUser}
                  placeholder='Địa chỉ'
                  placeholderTextColor='gray'
                  onChangeText={(value) => setAddress(value)}
                  value={address}


                />
              </View>
              <View>

                <TouchableOpacity
                  onPress={clearAddress}>
                    <Ionic name={address ? "close-sharp" : ""} style={{ fontSize: 21, color: '#000' }} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                onChangeText={(prev)=>setSexUser(prev)}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={value}
                placeholder='Chọn giới tính'

                onChange={item => {
                  setValue(item.value);
                  setSexUser(item.label);
                }}
                renderLeftIcon={() => (
                  <AntDesign style={styles.icon} color="green" name="Safety" size={20} />
                )}

                renderItem={renderItem}
              />
            </View>
            <View style={styles.inputCross}>
              <View style={styles.inputPass}>
                <Ionic  name="lock-closed-outline" style={{ fontSize: 24, color: '#000' }} />
                <TextInput
                  style={styles.inputUser}
                  placeholder='Nhập vào mật khẩu'
                  placeholderTextColor={'gray'}
                  onChangeText={(value) => onChangePasswordHandler(value)}
                  value={password}
                  secureTextEntry={hidePassword}
                />
              </View>
              <View>

                <TouchableOpacity
                  onPress={() => {
                    sethidePassword((prev) => !prev);
                  }}
                >
                  <Ionic name={password ? "eye-off-sharp" : ""} style={{ fontSize: 21, color: '#000' }} />
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.inputCross}>
              <View style={styles.inputPass}>
                <Ionic name="lock-closed-outline" style={{ fontSize: 24, color: '#000' }} />
                <TextInput
                  style={styles.inputUser}
                  placeholder='Nhập vào mật khẩu'
                  placeholderTextColor={'gray'}
                  onChangeText={(value) => onChangeisPasswordHandler(value)}
                  value={isPassword}
                  secureTextEntry={hideisPassword}
                />
              </View>
              <View>

                <TouchableOpacity
                  onPress={() => {
                    sethideyPassword((prev) => !prev);
                  }}
                >
                  <Ionic name={isPassword ? "eye-off-sharp" : ""} style={{ fontSize: 21, color: '#000' }} />
                </TouchableOpacity>
              </View>

            </View>
            <View style={styles.btn}>
              <TouchableOpacity style={styles.button} onPress={onSubmitFormHandler}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Đăng ký</Text>
              </TouchableOpacity>
            </View>


          </View>

        </ScrollView>
        <View >

        </View>
      </SafeAreaView>
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
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  inputContent: {
    flexDirection: 'column',

  },
  inputUser: {
    fontSize: 16,
    width: '75%'
  },
  inputPass: {
    flexDirection: 'row',
    gap: 10

  },
  dropdown: {
    // margin: 16,
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    color:'gray'
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
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