import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert, SafeAreaView, Image ,TouchableHighlight} from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import Ionicc from 'react-native-vector-icons/Fontisto'
import { ScrollView } from 'react-native';
import axios from 'axios';
import Header from '../componnets/Header';
import Iconcn from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Home({navigation}) {
  const baseUrl = 'https://medpro.onrender.com/api/v1/auth/getAllUser';
  return (
    <View style={{ height: '100%'}}>
      <View style={styles.backgroundHome}>
        <TouchableHighlight style={styles.imageBackground}>
        <Image source={require('../Img/background.jpg')} style={styles.imagebox_Background}   />
        </TouchableHighlight>
        
      </View>
      <View style={styles.Home}>
      <ImageBackground >
        <SafeAreaView>
          <View style={styles.containerHome}>
            <View style={styles.headerHome}>
              <View style={{flexDirection:'row'}}>
              <View style={styles.logoHome}>
                <TouchableOpacity onPress={()=>navigation.navigate("Account")}>
                <Image style={{
                  width:50,
                  height:50
                }}
                  source={require('../icon_anh/Ellipse_1.png')}
                />
                </TouchableOpacity>
              </View>
              <View style={styles.headerText}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: '#fff', letterSpacing: 3 }}>Medpro</Text>
                <Text style={{ fontSize: 17, color: '#fff',paddingLeft:5,fontWeight:'bold' }}>xin chào</Text>
              </View>

              </View>
              <View>
              <View style={styles.logo2Home}>
              <Image style={{
                 height:80,
                 width:80,
                 
                }}
                resizeMode='contain'
                  source={require('../icon_anh/Vector_2.png')}
                />
              </View>
              </View>
            
            </View>
            <View>
            <View style={[styles.inputSearch,styles.SearchShadown]}>
               <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
               <View style={styles.Search}>
                  <Text style={styles.TextSearch}>
                    Tìm CSYT/bác sĩ/chuyên khoa/dịch vụ
                  </Text>
                 
                      <Ionic name='search-sharp' style={{fontSize:30,color:'gray'}}></Ionic>
                  
                </View>
               </TouchableOpacity>
              </View>
            </View>
            
            <ScrollView>
            <View style={styles.contentHome}>
              
              <View style={[styles.optionHome,styles.HomeShadown]}>
                <View style={[styles.optionItemTopLeft,styles.optionItem]}>
                <Image style={styles.imageItem}
                resizeMode='contain'
                  source={require('../icon_anh/icon_dat_lich.webp')}
                />
                <Text style={styles.textItem}>Đặt khám tại cơ sở</Text>
                </View>
                <View style={styles.optionItem}>
                <Image style={styles.imageItem}
                resizeMode='contain'
                  source={require('../icon_anh/icon_dat_bacsi.webp')}
                />
                <Text style={styles.textItem}>Đặt khám bác sĩ</Text>
                </View>
                <View style={[styles.optionItemTopRight,styles.optionItem]}>
                <Image style={styles.imageItem}
                resizeMode='contain'
                  source={require('../icon_anh/icon_tuvanxa.webp')}
                />
                <Text style={styles.textItem}>Tư vấn khám bệnh từ xa</Text>
                </View>
                <View style={styles.optionItem}>
                <Image style={styles.imageItem}
                resizeMode='contain'
                  source={require('../icon_anh/icon_suckhoe.webp')}
                />
                <Text style={styles.textItem}>Gói sức khỏe toàn diện</Text>
                </View>
                <View style={styles.optionItem}>
                <Image style={styles.imageItem}
                resizeMode='contain'
                  source={require('../icon_anh/icon_xetnghiem.webp')}
                />
                <Text style={styles.textItem}>Xét nghiêm tại nhà</Text>
                </View>
                <View style={styles.optionItem}>
                <Image style={styles.imageItem}
                resizeMode='contain'
                  source={require('../icon_anh/icon_thanhtoan.webp')}
                />
                <Text style={styles.textItem}>Thanh toán viện phí</Text>
                </View>
                <View style={[styles.optionItemBottomLeft,styles.optionItem]}>
                <Iconcn name='clipboard-text-search-outline' style={styles.iconDatLich} />
                <Text style={styles.textItemIcon}>Tra cứu kết quả khám bệnh</Text>
                </View>
                <View style={styles.optionItem}>
                <Iconcn name='phone-dial' style={styles.iconPhone} />
                <Text style={styles.textItemIcon}>Đặt khám 1900-2115</Text>
                </View>
                <View style={[styles.optionItemBottomRight,styles.optionItem]}>
                <AntDesign name='book'style={styles.iconHuongDan} />
                <Text style={styles.textItemIcon}>Hướng dẫn đặt khám</Text>
                </View>
               
              </View>
              <View style={styles.content_News}>
                <View style={{height:150}} >
                  <Image source={require('../Img_doctor/home_banner_222.png')}  style={{flex:1, height: undefined, width: undefined,borderRadius:10}}  resizeMode="stretch"/>
                </View>
                <View style={{flexDirection:'row',flex:1,height:115,gap:10,marginTop:10}}>
                  <View style={{flex:1,height:'100%'}}>
                  <Image source={require('../Img_doctor/noisoi.jpg')}  style={{ flex:1, height: undefined, width: undefined,borderRadius:10}} resizeMode="stretch" />
                  </View>
                  <View style={{flex:1,height:'100%'}}>
                  <Image source={require('../Img_doctor/lgbt.jpg')}  style={{flex:1, height: undefined, width: undefined}} resizeMode='stretch' />
                  </View>
                  
                  {/* <View style={{flex:1}}>
                  <Image source={require('../Img_doctor/noisoi.jpg')}  style={{height:150,width:'100%',borderRadius:20}} />
                  </View> */}
                </View>
                <View style={{flexDirection:'row',flex:1,height:115,gap:10,marginTop:10}}>
                  <View style={{flex:1,height:'100%'}}>
                  <Image source={require('../Img_doctor/DaoThuyHien.jpg')}  style={{ flex:1, height: undefined, width: undefined,borderRadius:10}} resizeMode="stretch" />
                  </View>
                  <View style={{flex:1,height:'100%'}}>
                  <Image source={require('../Img_doctor/hieuphuc_68df842984.png')}  style={{flex:1, height: undefined, width: undefined}} resizeMode='stretch' />
                  </View>
                  
                  
                </View>
              </View>
            </View>
            </ScrollView>
           
          </View>
        </SafeAreaView>
      </ImageBackground>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerHome: {
    height: '100%',
    // backgroundColor: 'red',
  },
  Home:{
    position:'absolute',
    top:10,
    height:'100%'
  },
  backgroundHome:{
    position:'absolute',
    top:0,
    height:"100%",
    width:'100%'
  },
  imageBackground:{
    height:'45%',
    borderRadius:40
  },
  imagebox_Background:{
    height:'100%',
    width:'100%',
    borderBottomLeftRadius:80,
    borderBottomRightRadius:80
  },
  headerHome: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:65,
    paddingRight: 15,
    paddingLeft: 15,
    // borderBottomWidth:0.3,
    // borderColor:'#ccc',
    
    
  },
  headerText: {
    flexDirection: 'row',
    
    alignItems: 'center',
    paddingLeft:10
  },
  TextSearch:{
    color:'gray',
    fontSize:16,
    paddingLeft:5
  },
  logo2Home:{

  },
  logoHome: {
    paddingRight:10,
  },
  contentHome:{
    paddingRight:15,
    paddingLeft:15,
    marginBottom:60,
  },
  inputSearch:{
    padding:15,
  },
  Search:{

    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#fff',
    padding:8,
    borderRadius:25,

  },
  optionItem:{
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#fff',
    paddingTop:10,
    borderWidth:0.2,
    alignItems:'center',
    borderColor:"#e4dede",
    width:'33.3333%',
    backgroundColor:'#f0f0f0',
    
  
  },
  optionItemTopLeft:{
    borderTopLeftRadius:30,
  },
  optionItemTopRight:{
    borderTopRightRadius:30,
  },
  optionItemBottomRight:{
    borderBottomRightRadius:30,
  },
  optionItemBottomLeft:{
    borderBottomLeftRadius:30,

  },
  optionHome:{
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%',
   paddingTop:30,
   borderRadius:35
  
  },
  imageItem:{
    width:30,
    height:30,
    margin:10,
  },
  // imageItem1:{
  //   height:80
  // },
  textItem:{
    width:'80%',
    textAlign:'center',
    paddingBottom:20,
    fontWeight:'400',
   
  },
  textItemIcon:{
    width:'80%',
    textAlign:'center',
    paddingBottom:20,
    fontWeight:'400',
   paddingTop:10,
  },
  HomeShadown:{
    shadowColor:'#33333',
    shadowOffset:{
      width:0,
      height:1,
    },
    shadowOpacity:0.2,
    shadowRadius:8,
  },
  SearchShadown:{
    shadowColor:'#33333',
    shadowOffset:{
      width:1,
      height:0.1,
    },
    shadowOpacity:0.1,
    shadowRadius:8,
  },
  iconDatLich:{
    fontSize:37,
    color:"#1da1f2",
    marginTop:5,
    
  },
  iconPhone:{
    fontSize:38,
    color:"#1da1f2",
    
  },
  iconHuongDan:{
    fontSize:36,
    color:"#1da1f2",
  },
  content_News:{
    marginTop:20,
    flexDirection:'column'
  },
})
