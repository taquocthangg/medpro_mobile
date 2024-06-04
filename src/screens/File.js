import { Text, StyleSheet, View, SafeAreaView ,Image, ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function File() {
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
            <Text style={{fontSize: 20, color: '#fff'}}>Hồ sơ bệnh nhân</Text>
            <TouchableOpacity>
          <AntDesign name="adduser" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
        <View style={{flex: 0.85}}>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({})