import { Text, StyleSheet, View, ScrollView, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';

export default function Insurance_Policy() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={{flex:1}}>
      <ImageBackground source={require('../Img/Rectangle_2.png')} style={{flex: 0.15}} resizeMode="cover">
          <SafeAreaView style={{flex:1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: '#fff'}}>Chính sách bảo mật</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      <View style={styles.container}>
      <ScrollView>
      <Text style={styles.text_Header}>
      GIỚI THIỆU
      </Text>
      <Text style={styles.text_Regular}>
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chào mừng bạn đến với <Text style={styles.text_Active}>phần mềm MEDPRO - Đặt lịch khám bệnh</Text>  (gọi chung là "Phần mềm") được vận hành bởi công ty
     cổ phần ứng dụng PKH (gọi chung là <Text style={styles.text_Active}>"chúng tôi"</Text> hoặc<Text style={styles.text_Active}>"của chúng tôi"</Text> ). Chúng tôi nghiêm túc thực hiện trách nhiệm
      của mình liên quan đến bảo mật thông tin theo các quy định về bảo vệ bí mật thông tin cá nhân của pháp luật Việt Nam
       và cam kết tôn trọng quyền riêng tư và sự quan tâm của tất cả người dùng đối với Phần mềm (chúng tôi gọi các dịch vụ
        chúng tôi cung cấp trên Phần mềm là <Text style={styles.text_Active}>“Các Dịch Vụ”</Text>). Chúng tôi nhận biết tầm quan trọng của dữ liệu cá nhân mà bạn đã
        tin tưởng giao cho chúng tôi và tin rằng chúng tôi có trách nhiệm quản lý, bảo vệ và xử lý dữ liệu cá nhân của bạn một
         cách thích hợp. Chính Sách Bảo Mật này (<Text style={styles.text_Active}>“Chính Sách Bảo Mật”</Text> hay <Text style={styles.text_Active}>“Chính Sách”</Text>) được thiết kế để giúp bạn hiểu được cách
          thức chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân mà bạn đã cung cấp cho chúng tôi và/hoặc lưu giữ
           về bạn, cho dù là hiện nay hoặc trong tương lai, cũng như để giúp bạn đưa ra quyết định đúng trước khi cung cấp cho chúng
            tôi bất kỳ dữ liệu cá nhân nào của bạn. Vui lòng đọc kỹ Chính Sách Bảo Mật này. Nếu bạn có bất kỳ thắc mắc nào về thông tin
             này hoặc các phương pháp bảo mật thông tin của chúng tôi, vui lòng liên hệ với chúng tôi qua tổng đài <Text style={styles.text_Active}>19002115</Text> hoặc gửi email
              đến địa chỉ <Text style={styles.text_Active}>info@medpro.vn.</Text>
              <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>“Dữ liệu cá nhân” có nghĩa là dữ liệu, dù đúng hay không về một cá nhân mà thông qua đó có thể được xác định được
     danh tính, hoặc từ dữ liệu đó và thông tin khác mà một tổ chức có hoặc có khả năng tiếp cận. Các ví dụ thường gặp về dữ liệu cá nhân có thể gồm có tên,
      số chứng minh nhân dân và thông tin liên hệ.
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Bằng việc sử dụng Các Dịch Vụ, đăng ký một tài khoản với chúng tôi, truy cập Phần mềm của chúng tôi, hoặc tiếp cận Các Dịch Vụ, bạn xác nhận và đồng ý
     rằng bạn chấp nhận các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong Chính Sách Bảo Mật này, và theo đây bạn đồng ý cho phép chúng tôi thu thập
     , sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn như mô tả trong đây. NẾU BẠN KHÔNG ĐỒNG Ý CHO PHÉP XỬ LÝ DỮ LIỆU CÁ NHÂN CỦA BẠN NHƯ MÔ TẢ TRONG CHÍNH 
     SÁCH NÀY, VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY TRUY CẬP PHẦN MỀM CỦA CHÚNG TÔI. Nếu chúng tôi thay đổi Chính Sách Bảo Mật của mình, chúng tôi
      sẽ đăng những thay đổi đó hoặc Chính Sách Bảo Mật sửa đổi trên Phần mềm. Chúng tôi có quyền sửa đổi bổ sung Chính Sách Bảo Mật này vào bất kỳ lúc nào.
  </Text> 
    <Text style={styles.text_Header}>
    KHI NÀO CHÚNG TÔI SẼ THU THẬP DỮ LIỆU CÁ NHÂN?
      </Text>
      <Text style={styles.text_Regular}>
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi sẽ/có thể thu thập dữ liệu cá nhân về bạn khi:
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn đăng ký và/hoặc sử dụng Các Dịch Vụ hoặc truy cập Phần mềm của chúng tôi, hoặc tạo một tài khoản với chúng tôi;
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text> bạn gửi bất kỳ biểu mẫu nào, bao gồm nhưng không giới hạn ở bảng đăng ký hoặc các bảng khác liên quan đến bất kỳ tiện ích và dịch vụ nào của chúng tôi, bằng hình thức trực tuyến trên Phần mềm hay dưới hình thức khác;
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài liệu hoặc thông tin khác liên quan đến tương tác giữa bạn với chúng tôi, hoặc khi bạn sử dụng các tiện ích và dịch vụ của chúng tôi;
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn tương tác với chúng tôi, chẳng hạn như thông qua các cuộc gọi điện thoại (có thể được ghi âm lại), thư từ, fax, gặp gỡ trực tiếp, các nền ứng dụng truyền thông xã hội và email;
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn sử dụng các dịch vụ điện tử của chúng tôi, hoặc tương tác với chúng tôi qua Phần mềm của chúng tôi hoặc sử dụng các dịch vụ trên Phần mềm của chúng tôi. Trường hợp này bao gồm, nhưng không giới hạn, thông qua tập
     tin cookie mà chúng tôi có thể triển khai khi bạn tương tác với các ứng dụng hoặc Phần mềm của chúng tôi;
     <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn thực hiện các giao dịch thông qua Phần mềm hoặc sử dụng các Dịch Vụ của chúng tôi;
     <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn cung cấp ý kiến phản hồi hoặc gửi khiếu nại cho chúng tôi;
     <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bạn gửi dữ liệu cá nhân của bạn cho chúng tôi vì bất kỳ lý do gì.
    trên đây chỉ là một số trường hợp phổ biến mà chúng tôi thu thập dữ liệu cá nhân của bạn, không phản ánh hết toàn bộ các trường hợp mà chúng tôi sẽ thu thập dữ liệu cá nhân của bạn.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Khi bạn truy cập, sử dụng hoặc tương tác với Phần mềm hoặc các ứng dụng di động của chúng tôi, chúng tôi có thể thu thập những thông tin nhất định bằng cách thức tự động hoặc thụ động
     dùng các công nghệ khác nhau, các công nghệ này có thể được tải về thiết bị của bạn và có thể thiết lập hoặc sửa đổi cài đăt trên thiết bị của bạn. Thông tin mà chúng tôi thu thập có thể
      bao gồm, nhưng không giới hạn, địa chỉ Giao Thức Internet (IP), hệ điều hành máy tính/thiết bị di động và loại trình duyệt, loại thiết bị di động của bạn, đặc điểm của thiết bị di động,
       mã danh định duy nhất của thiết bị (UDID) hoặc mã danh định thiết bị di động (MEID) của thiết bị di động của bạn, địa chỉ của một trang web giới thiệu (nếu có), và các trang bạn truy cập
        trên Phần mềm và các ứng dụng di động của chúng tôi và số lần truy cập. Chúng tôi chỉ có thể thu thập, sử dụng, tiết lộ và/hoặc xử lý thông tin này cho Các Mục Đích (được định nghĩa dưới đây).
        <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Các ứng dụng di động của chúng tôi có thể thu thập thông tin chính xác về vị trí của thiết bị di động của bạn bằng cách sử dụng các công nghệ như GPS, Wi-Fi, v.v. Chúng tôi thu thập, sử dụng,
     tiết lộ và/hoặc xử lý thông tin này vì một hoặc nhiều Mục Đích, bao gồm nhưng không giới hạn các dịch vụ dựa trên địa điểm mà bạn yêu cầu hoặc để cung cấp cho bạn những thông tin liên quan tới
      địa điểm đó hoặc cho phép bạn chia sẻ vị trí của bạn với những đối tác khác của chúng tôi như là một phần của Dịch vụ của chúng tôi Đối với hầu hết các thiết bị di động, bạn có thể hủy việc 
      cho phép chúng tôi thu thập thông tin về vị trí của bạn bằng cách sửa đổi lại mục cài đặt điện thoại. Nếu bạn có thắc mắc về cách vô hiệu dịch vụ định vị vị trí của bạn trên thiết bị di đông của bạn,
       vui lòng liên hệ với nhà cung cấp dịch vụ thiết bị di động hoặc nhà sản xuất thiết bị.
    </Text>
      </ScrollView>
    </View>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    flex: 0.85,
    paddingBottom: 20
  },
  text_Header: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 20,
      paddingBottom: 10,
  },
  text_Active: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: 'bold'
  },
  text_Active_Italic: {
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    lineHeight: 20
  },
  text_Regular: {
    fontSize: 17,
    lineHeight: 22,
    textAlign: 'justify'
  },
  text_dot: {
    fontSize: 10
  }
})