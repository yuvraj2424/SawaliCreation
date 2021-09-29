// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import  React,{useState} from 'react';
import {Button, View, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,Image,ScrollView ,Alert,TouchableOpacity} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

import SearchableDropdown from 'react-native-searchable-dropdown';

// Item array for the dropdown



const forgotpassword = ({navigation}) => {
	
	const [username,setusername]=useState('');
	const [password,setpassword]=useState('');
	const [cpassword,setcpassword]=useState('');

	

	
	
	const Submit=()=>{
		if(username =='' || password==''){
			alert('Enter username and password');
		}else{
		if(password == cpassword){
		 fetch('http://onlylocals.in/api/OrderForm/ForgotPassword?username='+username+'&userpassword='+password)
			.then((response) => response.json())
						  .then((responseJson) => {
					            console.log(responseJson);
								if(responseJson=='Password Changed Successfully!'){
									
									alert(responseJson);
									
									setusername('');
									setpassword('');
									setcpassword('');
								}else{
									alert('something went wrong.');
								}
								
						  }).catch((error) => {
							console.error(error);
						  });
		}
		else{
			alert('password does not match')
		}
	}
	};
	

	
	
  return (
    <SafeAreaView style={{flex: 1}}>
	<ScrollView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
		  
			
		
		
			
			   <TextInput
			  value={username}
			  onChangeText={(name) => setusername(name)}
			  placeholder={'Username'}
			  style={styles.input}
			  
			/>
			
			
			   <TextInput
			  value={password}
			  onChangeText={(name) => setpassword(name)}
			  placeholder={'New Password'}
			  style={styles.input}
			  secureTextEntry={true}
			/>
			
			   <TextInput
			  value={cpassword}
			  onChangeText={(name) => setcpassword(name)}
			  placeholder={'Confirm New Password'}
			  style={styles.input}
			  secureTextEntry={true}
			/>
			
			
			

       <TouchableOpacity style={styles.button} onPress={Submit}>
	      <Text style={{fontWeight:'normal',letterSpacing:1}}>SUBMIT</Text>
	     
	   </TouchableOpacity >


		
        </View>

      </View>
	</ScrollView>
    </SafeAreaView>
  );
};


const styles =StyleSheet.create({
	 input: {
    width: 280,
    height: 44,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
	borderRadius:10,
	borderWidth:1,
	
	
	
  },
   input1: {
    width: 280,
    height: 80,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
	borderWidth:1,
	borderRadius:10,
	
	
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
	
  },
});

export default forgotpassword;

