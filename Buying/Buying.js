import { SafeAreaView, ScrollView, Text, View, Image, StatusBar, TextInput, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const Buying = () => {
  return (
    <TouchableWithoutFeedback>
        <SafeAreaView style={styles.safe}>
        <StatusBar style='light-content'></StatusBar>
            <View style={styles.view1}> 
            <View style={styles.viewsearch}>
               <TextInput placeholder='Search for items' placeholderTextColor='white' style={styles.TextInput}></TextInput >
            </View>
              <TouchableOpacity style={styles.search}>
              <Image source={require('./Items/search.png')} style={styles.imagesearch}></Image>
             </TouchableOpacity>
              

            
            </View>
            <ScrollView>
                <View style={styles.Product}>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/haiyen.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Hai Yen Shuttlecocks S70</Text>
                        <Text style={styles.price}>270.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/haiyendo.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Hai Yen Shuttlecocks S70</Text>
                        <Text style={styles.price}>260.000 VND</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Product}>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/thanhcong.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Hai Yen Shuttlecocks S70</Text>
                        <Text style={styles.price}>270.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/yonexcau.png')} style={styles.image1}></Image>
                        <Text style={styles.name}> Yonex Arosensa Shuttlecocks</Text>
                        <Text style={styles.price}>999.000 VND</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Product}>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/badabu.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Badubu Shuttlecocks VietNam</Text>
                        <Text style={styles.price}>270.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/bainmot.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Yonex High Quality Grip 3in1</Text>
                        <Text style={styles.price}>120.000 VND</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Product}>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/lining.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Lining High Quality Grip</Text>
                        <Text style={styles.price}>20.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/vai.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>T and T High Quality Grip</Text>
                        <Text style={styles.price}>20.000 VND</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Product}>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/aqua.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Aquafina</Text>
                        <Text style={styles.price}>7.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/sting.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Sting</Text>
                        <Text style={styles.price}>12.000 VND</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Product}>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/revive.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Revive</Text>
                        <Text style={styles.price}>12.000 VND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.View}>
                        <Image source={require('./Items/revivecam.png')} style={styles.image1}></Image>
                        <Text style={styles.name}>Revive Salt Lemon</Text>
                        <Text style={styles.price}>12.000 VND</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Buying

