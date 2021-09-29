// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import  React,{useState,useEffect} from 'react';
import { Button,View,ActivityIndicator,ImageBackground,Linking, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,FlatList,Image,ScrollView ,Alert,TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Communications from 'react-native-communications';


const AboutUs = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ImageBackground source={require('./backgroundimage.jpg')} style={{flex: 1,
    resizeMode: "cover",
    justifyContent: "center"}}>
	      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
	       <Text style={{textDecorationLine:'underline',textDecorationStyle:'solid',color:'#fff',fontSize:25,fontWeight:'bold'}}>About Us</Text>
		   
		   <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Owner:- Haresh Palvi.</Text>
		   <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Contact:-9260797679</Text>
		    <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Email:-haresh.palvi@gmail.com</Text>
			<Text style={{color:'#fff',fontSize:17,fontWeight:'bold',marginLeft:20,marginRight:20,textAlign:'center'}}>Simply put, we provide you with top-quality printed products at affordable prices. Sawali Creation, India, your one stop shop for all your printing needs. World Class Quality, On Time Delivery Everytime, Wide Range Of Designs, Equal Importance To Every Order Size. On our Facebook page, we will connect and interact with you about all things Sawali Creation. We love sharing our products and our philosophy with our ever-growing fan and customer base.</Text>
	
	     </View>
	</ImageBackground>
    </SafeAreaView>
  );
};

export default AboutUs;
