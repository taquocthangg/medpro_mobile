import { Text, StyleSheet, View, SafeAreaView ,Image, ImageBackground, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Notification () {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
    return (
      <View style= {{flex:1, backgroundColor: '#fff'}}>
       <ImageBackground source={require('../Img/Rectangle_2.png')} style={{flex: 0.15}} resizeMode="cover">
          <SafeAreaView style={{flex:1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: '#fff'}}>Danh sách thông báo</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      <View style={{flex: 0.85, alignItems: 'center', justifyContent: 'center'}}>
        <SafeAreaView style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('../icon_anh/Notification.png')} style={styles.Notification_img}/>
            <Text  style={styles.Notification_text}>Bạn chưa có thông báo nào!</Text>
        </SafeAreaView>
      </View>
      </View>
    )
  }

const styles = StyleSheet.create({
  Notification_img: {
    width: 250,
    height: 250
  },
  Notification_text: {
      fontSize: 20,
      color: '#F6B754'
  },
})