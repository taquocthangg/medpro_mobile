import { Text, StyleSheet, View, ScrollView, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
export default function Dieukhoan() {
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
            <Text style={{fontSize: 20, color: '#fff'}}>Điều khoản dịch vụ</Text>
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
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chào mừng bạn đến với phần mềm MEDPRO - Đặt lịch khám bệnh
       (gọi chung là "Phần mềm"). Vui lòng đọc kỹ các Điều Khoản Dịch Vụ sau đây trước khi tiếp tục truy cập hoặc
        sử dụng các dịch vụ của Phần mềm, để bạn biết được các quyền lợi và nghĩa vụ hợp pháp của mình liên quan đến
         Công ty cổ phần ứng dụng PKH, các Bệnh viện và các bên thứ ba có liên kết (gọi chung là “chúng tôi” hoặc
          “của chúng tôi”).
          <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>“Các Dịch Vụ” chúng tôi cung cấp hoặc phát hành bao gồm:
          Phần mềm này,các tính năng hoặc tiện ích được cung cấp trên Phần mềm,mọi thông tin, các Phần mềm được liên kết,
           các tính năng, dữ liệu, văn bản, hình ảnh, hình chụp, đồ họa, nhạc, âm thanh, video, thông báo, tag, nội dung, 
           lập trình, phần mềm, các dịch vụ ứng dụng (bao gồm nhưng không giới hạn ở bất kỳ dịch vụ ứng dụng di động nào)
            hoặc các tài liệu khác được cung cấp thông qua Phần mềm hoặc các dịch vụ liên quan của nó (gọi chung là “Nội Dung”). 
            Bất kỳ tính năng mới nào được thêm vào hoặc để tăng cường Các Dịch Vụ đều phải tuân thủ các Điều Khoản Dịch Vụ này.
          <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>BẰNG VIỆC SỬ DỤNG CÁC DỊCH VỤ HOẶC TIẾP TỤC TRUY CẬP 
          TRANG WEB, BẠN CHO BIẾT RẰNG BẠN CHẤP NHẬN, KHÔNG RÚT LẠI, CÁC ĐIỀU KHOẢN DỊCH VỤ NÀY. NẾU BẠN KHÔNG ĐỒNG Ý
           VỚI CÁC ĐIỀU KHOẢN NÀY, VUI LÒNG KHÔNG SỬ DỤNG CÁC DỊCH VỤ CỦA CHÚNG TÔI HAY TIẾP TỤC TRUY CẬP PHẦN MỀM.
           <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi có quyền chỉnh sửa các Điều Khoản Dịch Vụ này
            vào bất kỳ lúc nào mà không cần thông báo cho người dùng. Việc bạn tiếp tục sử dụng Các Dịch Vụ, Phần mềm
            , hoặc Tài Khoản Của Bạn sẽ được xem là sự chấp nhận, không rút lại đối với các điều khoản chỉnh sửa đó.
           <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi có quyền thay đổi, điều chỉnh, đình chỉ hoặc 
           ngưng bất kỳ phần nào của Phần mềm này hoặc Các Dịch Vụ vào bất kỳ lúc nào. Chúng tôi có thể ra mắt Các
            Dịch Vụ nhất định hoặc các tính năng của chúng trong một phiên bản beta, phiên bản này có thể không
             hoạt động chính xác hoặc theo cùng cách như phiên bản cuối cùng, và chúng tôi sẽ không chịu trách 
             nhiệm pháp lý trong các trường hợp đó. Chúng tôi cũng có thể toàn quyền áp dụng giới hạn đối với 
             các tính năng nhất định hoặc hạn chế quyền truy cập của bạn đối với một phần hoặc toàn bộ Phần mềm 
             hoặc Các Dịch Vụ mà không cần thông báo hoặc phải chịu trách nhiệm pháp lý.
           <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi có quyền từ chối cho phép bạn truy
            cập Phần mềm hoặc Các Dịch Vụ vì bất kỳ lý do gì.
    </Text>
      <Text style={styles.text_Header}>
      BẢO MẬT
      </Text>
      <Text style={styles.text_Regular}>
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi rất coi trọng việc bảo mật thông tin của bạn. Để bảo vệ các quyền của bạn một cách hiệu quả hơn
      , chúng tôi đã cung cấp Chính Sách Bảo Mật trên Phần mềm để giải thích chi tiết về các cách thức bảo mật thông tin của chúng tôi. Vui lòng xem Chính Sách
       Bảo Mật để hiểu được cách thức chúng tôi thu thập và sử dụng thông tin liên kết với Tài Khoản của bạn và/hoặc việc bạn sử dụng Các Dịch Vụ. Bằng việc sử dụng Các
        Dịch Vụ hoặc đồng ý với các Điều Khoản Dịch Vụ này, bạn đồng ý cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý Nội Dung và dữ liệu cá nhân của bạn như mô tả trong Chính Sách Bảo Mật của chúng tôi.
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Người dùng nào lưu giữ dữ liệu cá nhân của một người dùng khác (“Bên Nhận Thông Tin”) phải:
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>tuân thủ mọi điều luật bảo vệ dữ liệu cá nhân hiện hành;
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>phải được Bên Tiết Lộ Thông Tin cho phép truy cập và lưu giữ bằng văn bản hoặc lời nói hoặc bất kỳ mội phương thức nào; và
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>chỉ sử dụng thông tin của Bên Tiết Lộ Thông Tin để đăng ký sử dụng Các Dịch Vụ giúp cho Bên Tiết Lộ Thông Tin trên Phần mềm.
      </Text>
      <Text style={styles.text_Header}>
      GIỚI HẠN VỀ QUYỀN SỬ DỤNG
      </Text>
      <Text style={styles.text_Regular}>
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi cấp cho bạn quyền sử dụng có giới hạn để truy cập và sử dụng
       Các Dịch Vụ tuân theo các điều khoản và điều kiện của Điều Khoản Dịch Vụ này vì mục đích sử dụng cá nhân.
        Việc cấp quyền này không cho phép bạn sử dụng vì bất kỳ mục đích thương mại nào hay sử dụng vì mục đích 
        phái sinh đối với Các Dịch Vụ này (bao gồm nhưng không giới hạn ở bất kỳ yếu tố riêng lẻ nào hay Nội Dung
         của nó). Tất cả Nội Dung, thương hiệu, nhãn hiệu dịch vụ, tên thương hiệu, logo và tài sản trí tuệ khác 
         được hiển thị trên Phần mềm là tài sản của Chúng tôi và của các chủ sở hữu bên thứ ba được chỉ rõ trên 
         Phần mềm, nếu có. Bất kỳ đối tượng nào truy cập vào Phần mềm đều không có quyền hoặc được cấp phép một 
         cách trực tiếp hoặc gián tiếp sử dụng hoặc sao chép bất kỳ Nội dung, thương hiệu, nhãn hiệu dịch vụ,
          tên thương hiệu, logo hay bất kỳ tài sản trí tuệ nào khác và cũng không có đối tượng nào truy cập vào
           Phần mềm được yêu cầu bất kỳ quyền, quyền sở hữu hay quyền lợi nào liên quan đến các đối tượng trên.
            Bằng việc sử dụng hoặc truy cập Các Dịch Vụ, bạn đồng ý tuân thủ các qui định pháp luật về sở hữu trí 
            tuệ hiện hành đối với vấn đề bảo hộ bản quyền, thương hiệu, nhãn hiệu dịch vụ, Các Dịch Vụ, Phần mềm 
            và Nội Dung của nó. Bạn đồng ý không sao chép, phát tán, tái xuất bản, gửi, trưng bày công khai, trình
             diễn công khai, điều chỉnh, sửa đổi, cho thuê, bán, hay tạo phó bản của bất kỳ phần nào của Các Dịch Vụ,
              Phần mềm hoặc Nội Dung của nó. Nếu không có sự đồng ý trước bằng văn bản của chúng tôi, Bạn cũng không 
              được nhân bản hoặc chỉnh sửa một phần hay toàn bộ nội dung của Phần mềm này trên máy chủ khác hoặc như 
              một phần của bất kỳ Phần mềm nào khác. Ngoài ra, bạn đồng ý rằng bạn sẽ không sử dụng bất kỳ công cụ
               robot, spider hay bất kỳ thiết bị tự động hay quy trình thủ công nào khác để theo dõi hay sao chép 
               Nội Dung của chúng tôi, nếu không có sự đồng ý trước bằng văn bản của chúng tôi (thỏa thuận này áp 
               dụng cho các công cụ tìm kiếm cơ bản trên các webside kết nối người dùng trực tiếp đến website đó).
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Chúng tôi hoan nghênh bạn liên kết đến Phần mềm này từ Phần
       mềm của bạn, miễn là Phần mềm của bạn không ngụ ý rằng Chúng tôi ủng hộ hay liên kết với Phần mềm của bạn. 
       Bạn thừa nhận rằng Chúng tôi, vào bất kỳ lúc nào, có thể tự quyền quyết định về việc ngưng cung cấp bất kỳ 
       phần nào của Các Dịch Vụ mà không cần thông báo.
      </Text>
      <Text style={styles.text_Header}>
      PHẦN MỀM
      </Text>
      <Text style={styles.text_Regular}>
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Trừ phi kèm theo một thỏa thuận cấp phép riêng, bất kỳ phần mềm nào được chúng tôi
       cung cấp cho bạn như một phần của Các Dịch Vụ sẽ tuân thủ các điều khoản của Điều Khoản Dịch Vụ này. Phần mềm được cấp phép sử dụng,
        không bán, và Chúng tôi bảo lưu tất cả các quyền đối với phần mềm mà Chúng tôi không cấp. Bất kỳ lệnh hay mã nào của bên thứ ba,
         được liên kết đến hoặc được tham chiếu từ Các Dịch Vụ, đều được cấp phép cho bạn bởi các bên thứ ba sở hữu các mã script hoặc mã đó, không phải bởi Chúng tôi.
      </Text>
      <Text style={styles.text_Header}>
      TÀI KHOẢN VÀ BẢO MẬT**
      </Text>
      <Text style={styles.text_Regular}>
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Một số chức năng trong Các Dịch Vụ của chúng tôi yêu cầu phải đăng nhập bằng cách chọn
       số điện thoại định danh người dùng duy nhất (“ID Người Dùng”) và nhập code xác nhận, và bằng cách cung cấp một số thông tin cá nhân nhất định.
        Bạn có thể sử dụng Tài Khoản của mình để tiếp cận/truy cập các chức năng, Phần mềm hoặc Dịch vụ mà chúng tôi đã cho phép truy cập hoặc chúng tôi
         đã có liên kết hay hợp tác. Chúng tôi đã không xem xét, hay nhận trách nhiệm đối với bất kỳ nội dung, chức năng, bảo mật, dịch vụ, chính sách
          bảo mật nào của bên thứ ba, hay các hoạt động khác của các sản phẩm, Phần mềm hoặc dịch vụ đó. Trong trường hợp đó, điều khoản dịch vụ dành 
          cho những sản phẩm, website, dịch vụ đó, gồm cả chính sách bảo mật tương ứng, vẫn được áp dụng khi bạn sử dụng sản phẩm, website, dịch vụ đó 
          ngay cả khi những điều khoản bảo mật khác với Điều khoản dịch vụ/Chính sách bảo mật của chúng tôi.
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Bạn đồng ý
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>bảo mật thông tin Tài Khoản của bạn và chỉ sử dụng ID Người Dùng của bạn khi đăng nhập,
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>đảm bảo rằng bạn đăng xuất ra khỏi tài khoản của mình vào cuối mỗi phiên truy cập trên Phần mềm,
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>thông báo ngay cho Chúng tôi bất kỳ trường hợp nào sử dụng trái phép ID Người Dùng và/hoặc thông tin của bạn, và
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>đảm bảo rằng thông tin Tài Khoản của bạn là chính xác và cập nhật. Bạn hoàn toàn chịu trách nhiệm 
      đối với mọi hoạt động diễn ra dưới tên ID Người Dùng và Tài Khoản của bạn ngay cả khi các hoạt động hay việc sử dụng đó không phải do bạn thực hiện.
       Chúng tôi sẽ không chịu trách nhiệm pháp lý đối với bất kỳ tổn thất hay thiệt hại nào phát sinh từ việc tài khoản của bạn bị sử dụng trái phép hoặc 
       việc bạn không tuân thủ điều khoản này.
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>Bạn đồng ý rằng Chúng tôi có thể, vì bất kỳ lý do gì, tự quyền quyết định và không cần thông báo hay
       chịu trách nhiệm pháp lý đối với bạn hay bất kỳ bên thứ ba nào, ngay lập tức chấm dứt Tài Khoản và ID Người Dùng của bạn, và xóa hay gỡ bỏ bất kỳ Nội 
       Dung nào liên kết với Tài Khoản và ID Người Dùng của bạn ra khỏi Trang Web. Căn cứ chấm dứt tài khoản có thể bao gồm, nhưng không giới hạn:
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>vi phạm nội dung hoặc tinh thần của các Điều Khoản Dịch Vụ này,
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>có hành vi gian lận, quấy rối, lăng mạ, đe dọa hoặc xúc phạm hoặc
      <Text style={styles.text_dot}>{"\n"}●{"\t"}</Text>có hành vi gây hại cho người dùng khác, các bên thứ ba, hoặc lợi ích của Chúng tôi. 
      Hành vi sử dụng Tài Khoản cho mục đích phi pháp, gian lận, quấy rối, lăng mạ, đe dọa hay xúc phạm có thể bị báo cho các cơ quan thực 
      thi pháp luật mà không cần thông báo cho bạn.
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