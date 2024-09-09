import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import Background from '../Background/Background';

const ForgotPass = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        {/***********************Header************/}
        <View style={{ flex: 1, alignItems: 'center', }}>
          <Text style={{ fontSize: 33, color: 'white', fontWeight: 'bold', marginTop: 70 }}> Forgot Your Password </Text>
          {/* <Text style = {{color: 'white', fontSize: 16, marginTop: 15,}}> Sign in to continue. </Text> */}
        </View>

        {/* **********************Main*******************/}
        <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
          <View style={{ marginVertical: 7, }}>
            <Text style={{ color: 'white' }}>Email</Text>
            <TextInput style={styles.Name} placeholder=' trangiathinh0309@gmail.com' />
          </View>

          <View style={{ color: 'white', marginBottom: 40, alignItems: 'center', justifyContent: 'flex-start' }}>
            <TouchableOpacity style={styles.BtnSignUp}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}> Get Code</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Background>
    </SafeAreaView>
  )
}

export default ForgotPass

