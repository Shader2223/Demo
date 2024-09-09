import { SafeAreaView, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Background from '../Background/Background'
const Edit = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <Background>
            <View style={styles.viewimage}>
            <Image source={require('./Picture1/userprofile.png')} style={styles.image1}></Image>
            </View>

            <View style={styles.viewbig}>
                <View style={styles.componet}>
                    <Text style={styles.text1}>User Name</Text>
                    <Image source={require('./Picture1/edit.png')} style={styles.image2}></Image>
                </View>
                <View style={styles.componet}>
                    <Text style={styles.text1}>Day of birth</Text>
                    <Image source={require('./Picture1/edit.png')} style={styles.image3}></Image>
                </View>
                <View style={styles.componet}>
                    <Text style={styles.text1}>Contact</Text>
                    <Image source={require('./Picture1/edit.png')} style={styles.image4}></Image>
                </View>
                <View style={styles.viewbutton}>
                    <Text style={styles.save}>Save</Text>
                </View>
            </View>
        </Background>
    </SafeAreaView>
  )
}

export default Edit

