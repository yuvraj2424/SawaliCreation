// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer
import  React,{useState,useEffect} from 'react';
import { Button,View,ActivityIndicator,ImageBackground,Linking, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,FlatList,Image,ScrollView ,Alert,TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import Communications from 'react-native-communications';


const ContactUs = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
	<ImageBackground source={require('./backgroundimage.jpg')} style={{flex: 1,
    resizeMode: "cover",
    justifyContent: "center"}}>
     
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
	     <Image 
				source={require('./palvi.jpg')} 
				style={{width:130,height:130,borderRadius:100}} 
			 /> 
			 
	  <View style={{flexDirection:'row',marginTop:50}}>
	  
	  
	  <TouchableOpacity
          activeOpacity={0.7}
         
          onPress={
            () => Communications.phonecall('9892956080',true)
          }>
          <Image 
				source={require('./contact.png')} 
				style={{width:55,height:55,borderRadius:100}} 
			 />
        </TouchableOpacity>
	      <TouchableOpacity
          activeOpacity={0.7}
          style={{marginLeft:20}}
          onPress={
            () => {
				
				  let url =
				  'whatsapp://send?text=Hii&phone=919892956080';
				Linking.openURL(url)
				  .then((data) => {
					console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      })
			}
          }>
		  
		  
		  
			  <Image 
				source={require('./whatsapp.png')} 
				style={{width:45,height:45,borderRadius:100}} 
			 /> 
			 
		</TouchableOpacity>	 
		
		<TouchableOpacity
          activeOpacity={0.7}
          style={{marginLeft:20}}
          onPress={
            () => {
				
				  let url =
				  'https://www.youtube.com/channel/UCib2G9S9sSGr01puS2ljgEg';
				Linking.openURL(url)
				  .then((data) => {
					
				  })
				  .catch(() => {
				 
				  })
			}
          }>
		
		
		
			  <Image 
				source={require('./youtube.png')} 
				style={{width:45,height:45,borderRadius:100,}} 
			 /> 
			 
			</TouchableOpacity> 
			
			<TouchableOpacity
          activeOpacity={0.7}
          style={{marginLeft:20}}
          onPress={
            () => {
				
				  let url =
				  'https://www.facebook.com/sawalicreation';
				Linking.openURL(url)
				  .then((data) => {
					
				  })
				  .catch(() => {
				 
				  })
			}
          }>
			
			
			  <Image 
				source={require('./fb.png')} 
				style={{width:45,height:45,borderRadius:100}} 
			 /> 
			 
			 
	    </TouchableOpacity>
	  </View>
	  
	  <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',marginTop:10}}>Address:</Text>
	  
	   <Text style={{color:'#fff',fontSize:15,fontWeight:'bold',flexWrap:'wrap',marginLeft:40,marginRight:40}}>Sawali Creation, Real Academy Building, Wada, Dist-Palghar, Maharashtra, 421303</Text>
			 
			 
			 	<TouchableOpacity
          activeOpacity={0.7}
          style={{marginLeft:20}}
          onPress={
            () => {
				
				  let url =
				  'https://goo.gl/maps/iHv5aQGgSQqSvuPa6';
				Linking.openURL(url)
				  .then((data) => {
					
				  })
				  .catch(() => {
				 
				  })
			}
          }>
			 
	    <Image 
				source={require('./location.png')} 
				style={{width:45,height:45,borderRadius:100,marginTop:20}} 
			 /> 
			 
			 </TouchableOpacity>
	</View>
	</ImageBackground>
    </SafeAreaView>
  );
};

export default ContactUs;
