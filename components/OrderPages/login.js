// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import  React ,{useState,useEffect} from 'react';
import {Button, View, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,Image,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import RNRestart from 'react-native-restart';
const login = ({navigation}) => {
	
	const [userName,setUserName]=useState('');
	const [password,setPassword]=useState('');
	
	
	useEffect(()=>{
         AsyncStorage.getItem("userdata").then(data=>{
			
			let ourData = JSON.parse(data)
			//console.log("data: ",ourData)
			
			if(ourData!=null){
				navigation.navigate('order1');
			}
		})
	},[]);
	
	
   const Submit=()=>{
	   
	   if(userName != '' && password !=''){
		   
		   
		    fetch('http://onlylocals.in/api/OrderForm/Login?username='+userName+'&userpassword='+password)
			.then((response) => response.json())
						  .then((responseJson) => {
					           // console.log(responseJson.userId);
								if(responseJson.userId != 0){
									AsyncStorage.setItem("userdata", JSON.stringify(responseJson));
									
									global.username="1001";
									navigation.navigate('order1');
								}
								
						  }).catch((error) => {
							console.error(error);
						  });
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   // navigation.navigate('order1');
		   // setUserName('');
		   // setPassword('');
	   }else{
		   alert("Invalid username and password")
	   }
	   
		
		
	};
	
	const regist=()=>{
		navigation.navigate('registration');
		
	};
	
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 5}}>
        <View
          style={{
            flex:1,
			
            alignItems: 'center',
            justifyContent: 'center',
			
			
          }}>
		  
			<Image 
			style={{width: 90, height: 90,}} 
			source={require('./profile.png')}/>
		  
		  <TextInput
			  value={userName}
			  onChangeText={(userName) => setUserName(userName)}
			  placeholder={'Username'}
			  style={styles.input}
			  
			/>
			
			 <TextInput
			  value={password}
			  onChangeText={(pass) => setPassword(pass)}
			  placeholder={'Password'}
			  style={styles.input}
			  secureTextEntry={true}
			/>
		  
       
		  
		  <TouchableOpacity style={styles.button}  onPress={Submit}>
	      <Text style={{fontWeight:'normal',letterSpacing:1}}>SIGN IN</Text>
	     
	   </TouchableOpacity >
		  
		  
		  <View style={{flexDirection:'row'}}>
		   <Text style={{textDecorationLine: 'underline',textAlign:'right',marginTop:10,color:'#4169e1'}}
	   onPress={()=>{navigation.navigate('forgotpassword')}}
	   >Forgot password?</Text>
	   
			<Text style={{textAlign:'right',marginTop:10}}>{'  ||  '}</Text>
		
		 <Text style={{textDecorationLine: 'underline',textAlign:'right',marginTop:10,color:'#4169e1'}}
	   onPress={regist}
	   > Registration here</Text>
	   
	   
	   </View>
		 
        </View>
       
		 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  input: {
    width: 280,
    height: 44,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
     backgroundColor: '#fff',
	borderRadius:10,
	borderWidth:1,
	borderRadius:10,
	elevation:2,
	
	
	
	
  },
  fullWidthButton:{
	  backgroundColor:'red',
	  padding:20,
	  color:'#fff',
	  
  },
  img:{
	  marginTop:20
  },
    button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
	
  },
});

export default login;
