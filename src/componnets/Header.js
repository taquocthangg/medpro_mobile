import { Text, StyleSheet, View, ImageBackground, SafeAreaView,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { BackgroundImage } from 'react-native-elements/dist/config'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Header ({navigation}){
    return (
        <BackgroundImage source={require('../Img/Rectangle_2.png')} style={{flex: 0.15}} resizeMode="cover">
          <SafeAreaView>
            <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}}>
          <AntDesign name="arrowleft" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{position: 'absolute', top: 60, right: 20}}>
          <AntDesign name="home" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </BackgroundImage>

    )
}

const styles = StyleSheet.create({})