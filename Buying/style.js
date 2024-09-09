import { Button, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    safe:{
        flex: 1,
    },
    image:{
        flex: 1,
    },
    image1:{
        width: 120,
        height: 120,
        marginTop:5,
        borderRadius: 5,
        margin: 5,
    },
    View:{
        width: 140,
        height: 200,
        backgroundColor:'rgba(216, 222, 233, 0.3)',
        alignItems: 'center',
        borderRadius: 5,
    },
    name:{
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 2,
        color: 'white',
       
    },
    price:{
        marginTop: 6,
        fontSize: 16,
        fontWeight: '400',
        color: 'white'
    },
    Product:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginBottom: 20,
    },
    TextInput:{
        fontSize: 15,
        width: '80%',
        height:40,
        backgroundColor:'rgba(216, 222, 233, 0.2)',
        borderRadius: 5,
        padding: 10,
        color: 'white',
    },
    viewsearch:{
        flexDirection: 'row',
        justifyContent:'flex-end',
        marginBottom: 20,
        borderRadius: 5,
    },
    imagesearch:{
     width: 20,
    height: 20,
       position:'absolute',
       marginTop: -50,
       marginLeft: 110,
    },
    view1:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: 20,
        height: 80,
        backgroundColor: 'lightgreen',
    }

})
export default styles;