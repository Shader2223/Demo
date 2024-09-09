import { SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import Background from '../Background/Background';

const Login = () => {
  const navigation = useNavigation();
  //Sign In Btn
  const handleSignin = () => {
    navigation.navigate('TabNavigator');
  }

  //Forgot link
  function ForgotPassword() {
    navigation.navigate('ForgotPass');
  };

  //Register Link
  function ToRegister() {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style = {{flex: 1}}>
      <Background>
        {/* *******************************Header************/}
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', }}>Sign in</Text>
          <Text style={{ color: 'white', fontSize: 16, marginTop: 15, }}> Sign in to continue. </Text>
        </View>

        {/* **********************Main****************** */}
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={{ marginVertical: 7, }}>
            <Text style={{ color: 'white' }}>NAME</Text>
            <TextInput style={styles.Name} placeholder='User name' />
          </View>
          <View style={{ marginVertical: 7, }}>
            <Text style={{ color: 'white' }}>PASSWORD</Text>
            <TextInput style={styles.Password} placeholder='***************' secureTextEntry />
            <TouchableOpacity onPress={ForgotPassword} >
              <Text style={{ color: 'white', fontStyle: 'italic', }}> Forgot password</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* **************************************** */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={{ color: 'white', marginBottom: 40, alignItems: 'center' }}>
            <TouchableOpacity style={styles.BtnSignIn} onPress={handleSignin}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20 }} onPress={ToRegister} >
              <Text style={{ color: 'white', fontStyle: 'italic', fontSize: 12, }}> Do not have account? Register here </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  )
}

export default Login;
