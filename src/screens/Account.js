import { StyleSheet, Text, View,Button, Image ,TouchableOpacity,StatusBar, ScrollView,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Login from '../componnets/Login'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PhoneCall from 'react-native-phone-call';
import { useNavigation } from '@react-navigation/native';
export default function Account() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  const makePhoneCall = () => {
    const args = {
      number: '19002115',
      prompt: true,
    };
    PhoneCall(args);
  };
  return (
    <ImageBackground style={{ flex: 1}} source={require('../Img/background.jpg')}>
      <View style={{flex:0.15, justifyContent: 'center', }}>
      <ImageBackground source={require('../Img/Rectangle_2.png')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{position: 'absolute', left: 12,top: 50}} onPress={handleGoBack}>
        <Image source={require('../icon_anh/arrow-left.png') }style={{width: 20, height:20}} ></Image>
        </TouchableOpacity>

        </ImageBackground>
      </View>
      <ScrollView style={{flex:1}}>
      <View style={{ borderBottomRightRadius: 40,borderBottomLeftRadius:40,overflow: 'hidden', flex:0.7 }}>
      <ImageBackground source={require('../Img/Rectangle_1.png')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{ justifyContent: 'center', alignItems: 'center'}} >
          <Image source={require('../icon_anh/Ellipse_1.png')} style= {{width: 100, height: 100, marginBottom: 10}}/>
          <Text style={{fontSize: 16, color: '#fff', marginBottom: 15, fontWeight: 600}}>Khách</Text>
          <View style={styles.login_regester}> 
          <TouchableOpacity onPress={ () => navigation.navigate("Login")}>
            <Text style={{fontSize: 16, color: '#fff', paddingBottom: 30}}>Đăng nhập/</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("Auth")}>
            <Text style={{fontSize: 16, color: '#fff', paddingBottom: 30}}>Đăng kí</Text>
          </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      </View>

      <View style={{paddingLeft:15, backgroundColor: '#fff'}}>
        <Text style = {{marginTop: 12,marginBottom: 12, fontSize: 18, fontWeight: 'bold'}}>Điều khoản và quy định</Text>
        <TouchableOpacity style={styles.butston} onPress={() => navigation.navigate("Usage_Rules")}>
          <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/shield.png')} />
          <Text style={styles.account_text}>Quy định sử dụng</Text>
          </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>

      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston} onPress={() => navigation.navigate("Insurance_Policy")}>
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/security.png')} />
          <Text style={styles.account_text}>Chính sách bảo mật</Text>
        </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>

      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston} onPress={() => navigation.navigate("Dieukhoan")}>
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/ico_certification.png')} />
          <Text style={styles.account_text}>Điều khoản dịch vụ</Text>
        </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>

      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston} onPress={makePhoneCall}>
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/Holine.png')} />
          <Text style={styles.account_text}>Tổng đài CSKH 19002115</Text>
        </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>

      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston} >
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/shield.png')} />
          <Text style={styles.account_text}>Đánh giá ứng dụng</Text>
        </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>

      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston}>
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/search.png')} />
          <Text style={styles.account_text}>Chia sẻ sử dụng</Text>
        </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>

      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston} onPress={() => navigation.navigate("Questions")}>
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/question-mark.png')} />
          <Text style={styles.account_text}>Một số câu hỏi thường gặp</Text>
        </View>
           <AntDesign name="right" style={styles.accout_icon_right}/>
          
      </TouchableOpacity> 
      <TouchableOpacity style={styles.butston}>
        <View style={styles.accoutt_view}>
          <Image style={styles.account_icon} source={require('../icon_anh/language.png')} />
          <Text style={styles.account_text}>Ngôn ngữ</Text>
        </View>
        <Text style={{padding: 5, backgroundColor: '#e5e5e5', position: 'absolute', right: '10%'}}>Tiếng Việt</Text>
           <AntDesign name="right" style={styles.accout_icon_right}/>
         
      </TouchableOpacity> 
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#e5e5e5'}}>
        <Image source={require('../Img/Vector_3.png')} style={{flex: 0.5}} resizeMode="contain"/>
        <View style={{flex: 1}}>
          <Text style={styles.accout_text}>234 Hoàng Quốc Việt, Bắc Từ Liêm, Hà Nội</Text>
          <Text style={styles.accout_text}>Email: contact@medpro.vn</Text>
          <Text style={styles.accout_text}>Số điện thoại: (086) 9956733</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 10, paddingRight: 10, backgroundColor: '#e5e5e5'}}>
      <Image source={require('../Img/dathongbao.png')}  resizeMode="contain" style={{width: 150}}/>
      <Text style={{fontSize:14,color: '#57ABC9'}}>Phiên bản 1.2.32</Text>
      </View>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  account_container: {
    flex : 1,
    paddingTop: StatusBar.currentHeight,
  },
  account_header : {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: 50
  },
  accout_logo: {
    width : '100%',
    height: 50,
  },
  butston: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingTop: 15,
     paddingBottom: 15,
  },
  account_icon: {
    width: 25, 
    height: 25,
    marginRight: 10,
  },
  account_text : {
    fontSize:16
  }, 
   accoutt_view: {
      flexDirection: 'row',
   },
   accout_icon_right: {
      fontSize: 12,
      marginRight: 10
   },
   accout_text: {
      color: '#57ABC9',
      fontWeight: 'bold',
      fontSize: 12
   },
   login_regester: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
   },
  
});