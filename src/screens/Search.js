import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View>
      <View style={styles.backgroundSearch}>

      </View>
      <View>
        <View style={styles.headerSearch}>

        </View>
        <View style={styles.contentSearch}>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundSearch:{
    position:'absolute',
    // top:0,
    height:'100%',
     
    backgroundColor:'red'
  }
})