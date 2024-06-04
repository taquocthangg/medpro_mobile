import React, { useEffect } from 'react';
import {View, SafeAreaView, StyleSheet, Text, Platform, UIManager, TouchableOpacity} from 'react-native';
import {AccordionList} from 'react-native-accordion-list-view';
import { ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export default function Questions() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.pop();
  };
  const data = [
    {
        id: 0,
        title: 'Lợi ích khi sử dụng phần mềm đăng ký khám bệnh trực tuyến này là gì?',
        body: "Đặt lịch khám bệnh theo hẹn, mọi lúc mọi nơi, mà không cần đến bệnh viện Không xếp hàng chờ đợi để lấy số tiếp nhận khám bệnh Giảm thời gian chờ khám tại bệnh viện.Thanh toán trực tuyến từ xa, không sử dụng tiền mặt Nhận thông tin phiếu khám bệnh điện tử qua phần mềm Chủ động chọn lịch khám ( ngày khám, khung giờ khám, bác sỹ khám )",
    },
    {
        id: 1,
        title: 'Làm sao để sử dụng được phần mềm đăng ký khám bệnh trực tuyến?',
        body: "Có thể truy cập và sử dụng phần mềm trên tất cả thiết bị có thể truy cập mạng internet. ( 3G,4G,5G,Wifi, dây mạng…..) Máy tính bàn, laptop: truy cập website Hầu hết điện thoại thông minh: tải ứng dụng phần mềm tại kho tải Gplay hoặc AppStore Máy tính bảng và các thiết bị khác ……",
    },
    {
        id: 2,
        title: 'Đăng ký khám bệnh online có mất phí không?',
        body: "Có phí tiện ích, khi sử dụng dịch vụ đăng ký khám bệnh trực tuyến qua phần mềm ( tương tự phí cước viễn thông qua tổng đài ) Hiện tại chỉ mất phí khi đăng ký khám bệnh thành công, ngoài ra việc sử dụng ứng dụng và các tính năng khác là hoàn toàn miễn phí.",
    },
    {
        id: 3,
        title: 'Tôi có thể dùng phần mềm để đăng ký và lấy số thứ tự khám cho bệnh nhân khác không?',
        body: "Phần mềm khuyến cáo người dân, tự sử dụng phần mềm để đăng ký khám bệnh cho bản thân. Để tự quản lý thông tin, hồ sơ bệnh, lịch sử khám chữa bệnh, kết quả khám chữa bệnh… Trường hợp nhờ người khác đăng ký qua phần mềm, hoặc chủ động đăng ký giúp người khác ( như thân nhân, họ hàng, ông bà cha mẹ, người thân, bạn bè , đồng nghiệp……) vẫn có thể được, nếu người đó thực sự không có khả năng tiếp cận phần mềm. Nhưng những trường hợp này là trái với quy định của phần mềm và an toàn bảo mật thông tin của ngành y, các vấn đề phát sinh, người đặt khám dùm người khác và người nhờ người khác đặt khám sẽ tự chịu trách nhiệm trước pháp luật.",
    },
    {
      id: 4,
      title: 'Phần mềm có hỗ trợ đăng ký khám 24/7 không?',
      body: 'Phần mềm cho phép bạn thực hiện việc đăng ký khám vào bất kỳ thời điểm nào trong ngày và bất cứ ngày nào trong tuần, đảm bảo bạn có thể sử dụng Phần mềm để đăng ký khám bệnh mọi lúc mọi nơi, mà không cần phải đến trực tiếp bệnh viện để thực hiện',
    },
    {
      id: 5,
      title: 'Sau khi đăng ký khám thành công tôi nhận được phiếu khám bệnh như thế nào?',
      body: 'Bạn sẽ nhận được phiếu khám bệnh điện tử trực tiếp trên phần mềm. Mục quản lý “ phiếu khám bệnh”. Đồng thời bạn có thể sử dụng tính năng gửi tin nhắn, để nhận thông tin về phiếu khám bệnh được gửi qua tin nhắn điện thoại SMS. Nếu hồ sơ bệnh của bạn có khai báo thông tin email, hoặc sử dụng email để đăng nhập phần mềm, bạn cũng sẽ nhận được phiếu khám bệnh điện tử gửi qua email.',
    },
    {
      id: 6,
      title: 'Có thể thanh toán trực tuyến chi phí khám chữa bệnh bằng những phương thức nào?',
      body: 'Thẻ quốc tế Visa , Master ,JCB Thẻ ATM nội địa/ InternetBanking (thẻ phải được kích hoạt tính năng thanh toán trực tuyến Ví điện tử MOMO,SMART PAY Quét QRCode/ Mobile BankingThanh toán đại lý (các cửa hàng tiện lợi) Hỗ trợ thanh toán (chuyển khoản)',
    },
    {
      id: 7,
      title: 'Làm sao tôi biết được là đã thanh toán thành công?',
      body: 'Khi thanh toán thành công, tiền khám chữa bệnh sẽ được trừ thành công trên  tài khoản thanh toán của bạn qua phương thức thanh toán bạn đã chọn. Đồng thời sẽ có thông tin xác nhận giao dịch thành công, biên lai thanh toán, mã giao dịch, mã thanh toán cho giao dịch thành công. Hệ thống cũng sẽ cấp ngay phiếu khám bệnh điện tử khi bạn đặt khám thành công.',
    },
];
useEffect(() => {
    if (Platform.OS === 'android') {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
}, []);
return (
  <View style={{flex:1}}>
  <ImageBackground source={require('../Img/Rectangle_2.png')} style={{flex: 0.15}} resizeMode="cover">
          <SafeAreaView style={{flex:1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: '#fff'}}>Một số câu hỏi thường gặp</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
  <View style={styles.container}>
  <SafeAreaView>
    <AccordionList
      data={data}
      customTitle={item => <Text style={{maxWidth: '90%'}}>{item.title}</Text>}
      customBody={item => <Text style={styles.answerText}>{item.body}</Text>} 
      defaultOpenIndices={[0, 2]}
      expandMultiple={true}
      containerItemStyle={styles.containerItem} 
      pressableProps={{
        style: ({ pressed }) => [
          {
            padding: '5%',
            backgroundColor:
              pressed && Platform.OS == 'ios'
                ? 'rgb(210, 230, 255)'
                : 'transparent',
          },
        ],
        android_ripple: {
          color: 'rgb(210, 230, 255)',
        },
      }}
    />
</SafeAreaView>
  </View>
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    marginRight: 5,
    flex: 0.85,
    paddingBottom: 20
  },
answerText: {
  padding: 10,
  textAlign: 'justify'
},
containerItem: {
  borderBottomWidth: 1, // Thêm đường kẻ ngăn cách các mục trong danh sách
  borderBottomColor: '#ccc',
},
});
