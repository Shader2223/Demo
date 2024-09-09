import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const Navigation = useNavigation();
  return (
   <SafeAreaView style={styles.safe}>
    <StatusBar style='light-content'></StatusBar>
       <View style={{marginLeft:20}}>
       <View style={styles.viewuser}>
         <Image source={require('./Picture2/userprofile.png')} style={styles.imageuser}/>
       </View>

       <View style={styles.username}>
        <Text style={styles.text}>User Name</Text>
       </View>

       <TouchableOpacity style={styles.button} onPress={ () => Navigation.navigate('EditProfile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
       </TouchableOpacity>
       </View>
        <View style = {{alignItems: 'center'}}>
         <View style={styles.general}>
            <View style={styles.Viewtext}>
            <Text style={styles.buttonText1}>General Settings</Text>


            </View>
            <TouchableOpacity style={styles.component}>
                <Image source={require('./Picture2/key.png')} style={styles.image}></Image>
                <Text style={styles.text1}>Chang Password</Text>
                <Image source={require('./Picture2/direction.png')} style={styles.image1}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.component}>
                <Image source={require('./Picture2/language.png')} style={styles.image}></Image>
                <Text style={styles.text1}>Language</Text>
                <Image source={require('./Picture2/direction.png')} style={styles.image2}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.component}>
                <Image source={require('./Picture2/ask.png')} style={styles.image}></Image>
                <Text style={styles.text1}>About</Text>
                <Image source={require('./Picture2/direction.png')} style={styles.image3}></Image>
            </TouchableOpacity>
          </View>


        <View style={styles.general1}>
            <View style={styles.Viewtext}>
            <Text style={styles.buttonText1}>Services</Text>
            </View>
            <TouchableOpacity style={styles.component}>
                <Image source={require('./Picture2/booking.png')} style={styles.image}></Image>
                <Text style={styles.text1}>Booking</Text>
                <Image source={require('./Picture2/direction.png')} style={styles.image4}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.component}>
                <Image source={require('./Picture2/pay.png')} style={styles.image}></Image>
                <Text style={styles.text1}>Credit Payment</Text>
                <Image source={require('./Picture2/direction.png')} style={styles.image5}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.component}>
                <Image source={require('./Picture2/contact.png')} style={styles.image}></Image>
                <Text style={styles.text1}>Contact</Text>
                <Image source={require('./Picture2/direction.png')} style={styles.image6}></Image>
            </TouchableOpacity>
        </View>
        </View>
   </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  safe: {
    flex: 1,
   
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  imageuser: {
    width: 60,
    height: 60,
    marginLeft: 4,
  },
  viewuser:{
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor:'white',
    marginTop: 70,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft: 20,
  },
  username:{
    marginTop: 5,
  },
  text:{
    marginLeft: 20,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  button:{
    width: 100,
    height: 40,
    backgroundColor: '#4d9773',
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',    
    marginTop: 10,
    marginLeft: 15,
  },
  buttonText: {
    color: 'black',          
    fontWeight: 'bold',      
  },
  general: {
    width: '85%',
    height: 180,
    backgroundColor: 'rgba(216, 222, 233, 0.6)',
    marginTop: 20,
    position: 'relative',
   
      // Vị trí tương đối để chứa văn bản
  },
  buttonText1: {
    position: 'absolute',   // Đặt văn bản ra ngoài để không bị ảnh hưởng bởi độ mờ
    color: 'black',         // Đặt màu cho văn bản
    fontWeight: '600',
    fontSize: 16,
  },
  Viewtext:{
    width: '100%',
    height: 40,
    backgroundColor:'#4d9773',
    borderRadius: 0,
    justifyContent:'center',
    alignItems: 'center',
  },
  component:{
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop: 15,
    marginLeft: 10,
  },
  image:{
    width: 22,
    height: 22,
  },
  text1:{
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 1,
  },
  image1:{
    width: 20,
    height: 20,
    marginLeft: 95,
    marginTop: 2,
  },
  image2:{
    width: 20,
    height: 20,
    marginLeft: 146,
    marginTop: 2,

  },
  image3:{
    width: 20,
    height: 20,
    marginLeft: 173,
    marginTop: 2,
  },
  image4:{
    width: 20,
    height: 20,
    marginLeft: 157,
    marginTop: 2,
  },
  image5:{
    width: 20,
    height: 20,
    marginLeft: 104,
    marginTop: 2,
  },
  image6:{
    width: 20,
    height: 20,
    marginLeft: 159,
    marginTop: 2,
  },
  general1: {
  
    width: '85%',
    height: 180,
    backgroundColor: 'rgba(216, 222, 233, 0.6)',
    borderRadius: 10,
    borderRadius: 5,
    position: 'relative',
     // Vị trí tương đối để chứa văn bản
  },
})
