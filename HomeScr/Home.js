import { View, Text, SafeAreaView, StatusBar, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar style="light-content" />
        {/* Content Below Header */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <ScrollView horizontal style={styles.imageScrollView} showsHorizontalScrollIndicator={false}>
            <Image source={require('./sancau.png')} style={styles.san}></Image>
            <Image source={require('./sancau.png')} style={styles.san}></Image>
            <Image source={require('./sancau.png')} style={styles.san}></Image>
            <Image source={require('./sancau.png')} style={styles.san}></Image>
            <Image source={require('./sancau.png')} style={styles.san}></Image>
          </ScrollView>
          <Text style={[styles.text1, { marginLeft: 15, marginTop: 10, fontSize: 25 }]}>Can Tho Skyline</Text>
          <View>
            <Text style={[styles.text1, { marginLeft: 15, marginTop: 10, fontSize: 20 }]}>Founder Name</Text>
            <Text style={[styles.text1, { marginLeft: 15, marginTop: 10, fontSize: 15 }]}>International qualification badminton court in Can Tho City</Text>
          </View>
          <View style={styles.get}>
            <Text style={[styles.text1, { margin: 'auto', fontSize: 18, fontWeight: 'bold', color: 'black' }]}>Get in Touch</Text>
          </View>
          
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1, // Đảm bảo rằng SafeAreaView chiếm toàn bộ màn hình
  },
  imageBackground: {
    flex: 1, // Đảm bảo rằng ImageBackground chiếm toàn bộ không gian của SafeAreaView
    resizeMode: 'cover', // Đảm bảo rằng hình ảnh nền bao phủ toàn bộ không gian
  },
  headerMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Nền bán trong suốt để nổi bật
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    zIndex: 1, // Đảm bảo menu trên cùng
  },
  text1: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
  },
  activeText: {
    fontWeight: 'bold',
    color: 'lightgreen', // Màu sắc để làm nổi bật mục được chọn
  },
  imageScrollView: {
    marginTop: 60, // Khoảng cách từ header
  },
  san: {
    width: 200,
    height: 150,
    marginLeft: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  get: {
    width: 180,
    height: 45,
    backgroundColor: 'lightgreen',
    borderRadius: 5,
    marginHorizontal: 'auto',
    marginTop: 40,
  },
  cau: {
    width: 50,
    height: 50,
    transform: [{ rotate: '60deg' }]
  },
  cauV: {
    alignSelf: 'flex-end', // Căn chỉnh hình ảnh về bên phải
    marginRight: 40, // Thêm khoảng cách xung quanh hình ảnh
  },
  contentContainer: {
    paddingTop: 40, // Đảm bảo nội dung không bị che khuất bởi header
  },
});
