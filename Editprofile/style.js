import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
    },
    image:{
        flex: 1,

    },
    text: {
        color: 'white',
        fontSize: 24,
    },
    text1: {
        color: 'white',
        fontSize: 18,
    },
    viewimage:{
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor:'white',
        marginTop: 130,
        justifyContent: 'center',
        alignItems:'center',
        marginLeft: 20,
      },
    image1: {
        width: 60,
        height: 60,
    },
    componet:{
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 20,
    },
    image2:{
        width: 22,
        height: 22,
        marginLeft: 181,
        marginTop: 2,
    },
    image3:{
        width: 22,
        height: 22,
        marginLeft: 177,
        marginTop: 2,
    },
    image4:{
        width: 22,
        height: 22,
        marginLeft: 206,
        marginTop: 2,
    },
    viewbig:{
        marginTop:20,
        marginLeft: 15,
        width: '90%',
        height: 220,
        backgroundColor:'rgba(216, 222, 233, 0.3)',
        elevation: 0,
        borderRadius: 20,
    },
    viewbutton:{
        width: 130,
        height: 40,
        backgroundColor:'#4d9773',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginHorizontal: 'auto',
    },
    save:{
        fontSize: 16,
        fontWeight: '500'
    }
})

export default styles;