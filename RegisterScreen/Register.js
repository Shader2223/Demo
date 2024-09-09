import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import Background from '../Background/Background';
const Register = () => {
  const navigation = useNavigation();
  const [EmailInput,setEmail] = useState('');
  const [NameInput,setName] = useState('');
  const [PasswordInput,setPassword] = useState('');
  function handleRegister(){
    let ToLogin = true;
    setEmail('');
    setName('');
    setPassword('');
    if (ToLogin == true){
      navigation.navigate('Login')
    }
  }


  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black', }}>
      <Background>
          {/* *******************************Header************/}
          <View style = {{flex:1 , justifyContent : 'center' , alignItems: 'center'}}>
            <Text style = {{ fontSize: 35, color : 'white', fontWeight:'bold'}}>Create new account</Text>
            <TouchableOpacity onPress={handleRegister}>
              <Text style = {{color: '#00bf2a', fontStyle: 'italic'}}> Already Registered? Login here </Text>
            </TouchableOpacity>
          </View>

          {/* **********************Main****************** */}
          <View style = {{flex:1,  flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
            <View>
              <Text style = {{color:'white'}}>Name</Text>
              <TextInput style = {styles.Name} placeholder=' User name' value= {NameInput} onChangeText={(text)=> setName(text)} />
            </View>
            <View>
              <Text style = {{color:'white'}} >Email</Text>
              <TextInput style = {styles.Email} placeholder=' trangiathinh0309@gmail.com' value= {EmailInput} onChangeText={(text) => setEmail(text)} />
            </View>
            <View>
              <Text style = {{color:'white'}} >Password</Text>
              <TextInput style = {styles.Password} placeholder=' ***************' secureTextEntry value= {PasswordInput} onChangeText={(text)=> setPassword(text)}  />
            </View>
          </View>

          {/* *****************REGISTER BUTTON*********************** */}
          <View style = {{flex:1,}}>
            <View style = {{color:'white', marginTop: 40, alignItems:'center'}}>
              <TouchableOpacity style={styles.BtnSignUp} onPress={handleRegister}>
                <Text style = {{color:'white', fontWeight:'bold', fontSize:18, textAlign:'center'}}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Background>
    </SafeAreaView>
  )
}

export default Register

