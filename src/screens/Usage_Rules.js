import { Text, StyleSheet, View, ScrollView, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React, { Component } from 'react'
import Header from '../componnets/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Usage_Rules () {
  const navigation1 = useNavigation();

  const handleGoBack = () => {
    navigation1.pop();
  };
  return (
    <View style={{flex:1}}>
    <ImageBackground source={require('../Img/Rectangle_2.png')} style={{flex: 0.15}} resizeMode="cover">
          <SafeAreaView style={{flex:1, flexDirection: 'row', justifyContent:'space-around', alignItems: 'center'}}>
            <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: '#fff'}}>Quy định sử dụng</Text>
            <TouchableOpacity  onPress={() => navigation.navigate("Home")}>
          <AntDesign name="home" style={{fontSize: 30, color: '#fff'}}/>
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      <View style={styles.container}>
   <ScrollView>
    <Text style={styles.text_Header}>
         QUY ĐỊNH CHUNG
    </Text>
    <Text style={styles.text_Regular}>
    Chào mừng bạn đến với<Text style={styles.text_Active}> phần mềm MEDPRO - Đặt lịch khám bệnh
     </Text> (gọi chung là  <Text style={styles.text_Active}> "Phần mềm"</Text>). Vui lòng đọc kỹ
      các Quy Định Sử Dụng dưới đây trước khi tiếp tục truy cập hoặc sử dụng các dịch vụ của Phần mềm,
       để bạn biết được các quyền lợi và nghĩa vụ hợp pháp của mình liên quan đến các vấn đề về việc
        đăng ký khám bệnh, thanh toán, nhận phiếu khám bệnh, tạo hồ sơ bệnh nhân, quản lý và sử dụng thông
         tin trong hồ sơ bệnh nhân, quản lý phiếu khám bệnh, hoàn tiền, hủy phiếu khám bệnh, sửa thông tin
          phiếu khám bệnh, cách giải quyết các sự cố.... trong quá trình sử dụng Phần mềm.
    </Text>
    <Text style={styles.text_Header}>Các định nghĩa</Text>
    <Text style={styles.text_Regular}>
    <Text style={styles.text_dot}>● {"\t"}</Text>
    <Text style={styles.text_Active_Italic}>Chúng tôi:</Text>  theo ngữ cảnh có thể là công ty cổ phần ứng dụng PKH, và/hoặc các bên đơn vị khác có liên kết trên Phần mềm.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text> <Text style={styles.text_Active_Italic}>Dịch vụ:</Text> là một hoặc một phần hoặc tất cả các tính năng và tiện ích được triển khai trên phần mềm.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>  <Text style={styles.text_Active_Italic}>Bạn:</Text> theo ngữ cảnh có thể là người dùng, hoặc bệnh nhân, hoặc người được bệnh nhân đã ủy quyền bằng văn bản, 
    lời nói hoặc một hình thức khác, để truy cập Phần mềm hoặc đăng ký sử dụng các Dịch Vụ trên Phần mềm giúp 
    cho bệnh nhân.
    </Text>
    <Text style={styles.text_Header}>ĐĂNG NHẬP</Text>
    <Text style={styles.text_Regular}>
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Bạn phải đăng nhập mới có thể sử dụng đầy đủ các Dịch vụ của Phần mềm.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Phần mềm định danh tài khoản của bạn bằng số điện thoại di động bạn đang sử dụng,
     vì vậy trong trường hợp bạn không còn hoặc mất quyền kiểm soát hay sở hữu đối với
      số điện thoại di động của mình, bạn hãy liên hệ ngay với chúng tôi qua tổng đài 1900 2115 
      hoặc email hotro@medpro.com.vn, chúng tôi sẽ hỗ trợ bạn.
    </Text>
    <Text style={styles.text_Header}>THÔNG TIN BỆNH NHÂN</Text>

    <Text style={styles.text_Regular}>
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Bạn phải cung cấp thông tin bệnh nhân trước khi thực hiện đặt hẹn khám bệnh:
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Nếu đã từng khám tại bệnh viện: Bạn phải chọn <Text style={styles.text_Active}>"đã từng khám"</Text> {'>'} nhập mã số bệnh nhân (hay còn gọi là <Text style={styles.text_Active}> số hồ sơ</Text>) {'>'} bấm Xác nhận.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text> Nếu Bạn chưa từng khám tại bệnh viện: Bạn phải chọn <Text style={styles.text_Active}> "chưa từng khám" </Text>{'>'} điền đầy đủ, chính xác các thông tin {'>'} bấm Xác nhận.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Các thông tin về giấy tờ tùy thân như chứng minh nhân dân, passport, thẻ căn cước....: bạn phải nhập để chúng tôi xác định đúng bệnh nhân trước khi vào phòng khám. Nếu Bạn không có thông tin về các giấy tờ trên, vui lòng liên hệ với chúng tôi qua tổng đài 19002115 để được hỗ trợ.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Địa chỉ email và số điện thoại di động: Bạn nên nhập đầy đủ và chính xác để Phần mềm gửi thông báo, hoặc thông tin phiếu khám bệnh cho bạn qua hình thức email và tin nhắn sms.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text> Bệnh viện sẽ<Text style={styles.text_Active}> từ chối khám chữa bệnh và không hoàn tiền</Text> nếu Thông tin bệnh nhân khi đăng ký không đúng với thực tế, vì vậy vui lòng kiểm tra thật kỹ các thông tin trước khi bấm tiếp tục.
    </Text>
    <Text style={styles.text_Header}>
        TÍNH NĂNG “NHẬP VÀ TÌM LẠI MÃ SỐ BỆNH NHÂN”</Text>
    <Text style={styles.text_Regular}>
    Chúng tôi cho phép bạn có thể <Text style={styles.text_Active}>nhập và tra cứu</Text> hoặc <Text style={styles.text_Active}>tìm lại mã số bệnh nhân</Text> (hay còn gọi “số hồ sơ”) của mình, để xem được các thông tin tương ứng với số hồ sơ vừa nhập hoặc vừa tra cứu được.
    Tính năng này chỉ giới hạn ở <Text style={styles.text_Active}>một mục đích duy nhất là: để bạn xem, kiểm tra và xác định được chính xác hồ sơ bệnh nhân của mình khi đăng ký khám bệnh hoặc xem lịch hẹn tái khám của bản thân.</Text>
    Bạn sẽ chịu hoàn toàn trách nhiệm và trách nhiệm pháp lý nếu có hành vi sử dụng tính năng <Text style={styles.text_Active}>nhập và tìm lại mã số bệnh nhân</Text> không đúng với mục đích nêu trên.
    </Text>

    <Text style={styles.text_Header}>
    SỐ CHUYÊN KHOA ĐĂNG KÝ</Text>
    <Text style={styles.text_Regular}>
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Trong cùng một lượt đăng ký khám, bạn có thể đăng ký nhiều chuyên khoa với điều kiện:
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Phải đăng ký cùng 1 ngày khám.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Không được trùng nhau.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Khi đăng ký nhiều chuyên khoa trong một lượt bạn chỉ trả một lần phí tiện ích, giá khám bệnh sẽ thay đổi tùy theo chuyên khoa và số lượng chuyên khoa được đặt.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Với mỗi chuyên khoa, bạn sẽ nhận được một phiếu khám bệnh tương ứng. Khi bạn hủy một trong các phiếu khám bệnh này, thì các phiếu khám bệnh còn lại (trong cùng lượt đăng ký đó) cũng sẽ bị hủy, tổng tiền khám sẽ được hoàn lại theo quy định hoàn tiền.
    </Text>
   
    <Text style={styles.text_Header}>
    THỜI GIAN ĐĂNG KÝ</Text>
    <Text style={styles.text_Regular}>

    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Thời gian đăng ký trước ngày khám từ 01 đến 30 ngày.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Nếu muốn chọn khám vào ngày hôm sau, Bạn phải thực hiện việc đăng ký và hoàn tất thanh toán trước 16h30 của ngày hôm nay, sau 16h30 Bạn không thể đăng ký khám vào ngày hôm sau được nữa.
  </Text>
    <Text style={styles.text_Header}>
    TIỀN VÀ PHÍ ĐĂNG KÝ KHÁM</Text>
    <Text style={styles.text_Regular}>
    Khi đăng ký khám trên Phần mềm, bạn sẽ trả các khoản tiền và phí bao gồm:
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text> <Text style={styles.text_Active}>Tiền khám bệnh:</Text> là tiền bạn trả cho việc sử dụng dịch vụ khám chữa bệnh của bệnh viện. Giá khám bệnh sẽ thay đổi tùy theo chuyên khoa và do bệnh viện quy định, cụ thể như sau:
    Chuyên khoa Tư Vấn tâm Lý: 500,000 vnđ.
    Chuyên khoa Tâm Thần Kinh: 250,000 vnđ.
    Chuyên khoa Tiêm Ngừa: 100,000 vnđ.
    Các chuyên khoa còn lại: 150,000 vnđ.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text><Text style={styles.text_Active}>Phí tiện ích + TGTT:</Text> là tiền hỗ trợ cho việc sử dụng dịch vụ đăng ký khám bệnh trực tuyến (đã bao gồm phí các tin nhắn, email...) và phí trung gian thanh toán. Hình thức thanh toán bằng thẻ khám bệnh của Bệnh viện sẽ có mức Phí tiện ích +TGTT thấp nhất, tuy nhiên để sử dụng được phương thức thanh toán này, bạn phải đảm bảo Thẻ Khám Bệnh của mình đã kích hoạt tính năng thanh toán trực tuyến.
    Bạn vui lòng kiểm tra Tổng tiền thanh toán trước khi thực hiện việc thanh toán.
    <Text style={styles.text_Active}>
    {'\n'}Khi bạn thực hiện việc thanh toán, đồng nghĩa với với việc bạn hoàn toàn đồng ý, tự nguyện và không có bất kỳ khiếu nại hoặc khiếu kiện nào về bất kỳ một khoản tiền hoặc phí nào trong quá trình sử dụng phần mềm về sau.
    </Text>
  </Text>

    <Text style={styles.text_Header}>
    PHƯƠNG THỨC THANH TOÁN</Text>
    <Text style={styles.text_Regular}>
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Bạn có thể thanh toán các khoản tiền và phí (nếu có) trong quá trình sử dụng phần mềm bằng hình thức thanh toán trực tuyến thông qua:
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Thẻ khám bệnh của Bệnh viện đã kích hoạt tính năng thanh toán trực tuyến
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Thẻ ATM nội địa đã kích hoạt tính năng thanh toán trực tuyến
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Thẻ thanh toán quốc tế Visa/MasterCard...
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Nếu không có các loại thẻ trên/ hoặc bạn gặp vấn đề trong quá trình thanh toán vui lòng liên hệ tổng đài 19002115 để được hỗ trợ

  </Text>
    <Text style={styles.text_Header}>
    CÁCH THỨC NHẬN PHIẾU KHÁM BỆNH</Text>
    <Text style={styles.text_Regular}>
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Sau khi đăng ký và thanh toán thành công, Bạn sẽ nhận được Phiếu Khám Bệnh Điện Tử qua ba hình thức:
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Trên Phần mềm: Bạn có thể vào mục Thông Tin Tài Khoản {'>'} Phiếu khám bệnh {'>'} và tìm thấy phiếu khám bệnh được gửi đến tài khoản của bạn trên Phần mềm.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Qua email: Nếu trong hồ sơ bệnh nhân bạn có cung cấp địa chỉ email, phiếu khám bệnh cũng sẽ được gửi ngay đến địa chỉ email của bạn, bạn có thể kiểm tra hộp thư đến hoặc Spam để nhận phiếu khám bệnh.
    <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Tin nhắn sms: Bạn cũng có thể yêu cầu nhận thông tin phiếu khám bệnh qua tin nhắn sms, bằng cách: chọn "Gửi tin nhắn sms" {'>'} nhập số điện thoại muốn nhận tin {'>'} bấm "Xác nhận". Phần mềm gửi thông tin phiếu khám bệnh đến số điện thoại bạn vừa nhập qua tin nhắn sms.
    Mỗi phiếu khám bệnh bạn có thể yêu cầu gửi tin nhắn sms hai lần, và hoàn toàn miễn phí.

    Khi đến ngày khám:
    Người bệnh không BHYT sẽ đến trực tiếp phòng khám trước giờ hẹn 15 - 30 phút để khám bệnh..
    Người bệnh BHYT vui lòng có mặt tại các quầy 12,13,14 Khu A trước giờ hẹn 15 - 30 phút để xác nhận BHYT trước khi vào phòng khám.
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