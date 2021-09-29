// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import  React,{useState} from 'react';
import {Button, View, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,Image,ScrollView ,Alert,TouchableOpacity} from 'react-native';
import DropdownMenu from 'react-native-dropdown-menu';

import SearchableDropdown from 'react-native-searchable-dropdown';

// Item array for the dropdown



const registration = ({navigation}) => {
	
	const [fname,setFname]=useState('');
	const [username,setusername]=useState('');
	const [password,setpassword]=useState('');
	const [cpassword,setcpassword]=useState('');
	const [gender,setGender]=useState('male');
	const [age,setAge]=useState('');
	const [contactno,setContactno]=useState('');
	const [email,setEmail]=useState('');
	const [address,setAddress]=useState('');
	const [index,setindex]=useState(2);
	
	const items = [
  // name key is must. It is to show the text in front
  {id: 1, name: 'angellist'},
  {id: 2, name: 'codepen'},
  {id: 3, name: 'envelope'},
  {id: 4, name: 'etsy'},
  {id: 5, name: 'facebook'},
  {id: 6, name: 'foursquare'},
  {id: 7, name: 'github-alt'},
  {id: 8, name: 'github'},
  {id: 9, name: 'gitlab'},
  {id: 10, name: 'instagram'},
];
	 var data = [["C", "Java", "JavaScript", "PHP"]];
	
	
	const Submit=()=>{
		
		
		if(fname==''||contactno==''||email==''||address==''||username==''||password==''){
			alert("Enter all field");
		}else if(password !=cpassword){
			alert("password does not match.");
		}else{
		
		
		fetch('http://onlylocals.in/api/OrderForm/AddNewUser', {
					  method: 'POST',
					  headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					  },
					  body: JSON.stringify({
					 
						fullname: fname,
					 
						contactnumber: contactno,
					 
						email: email,
						
						useraddress: address,
						
						username: username,
						
						userpassword: password,
						
						userotp: '',
					 
					  })
					 
					}).then((response) => response.json())
						  .then((responseJson) => {
					 
					          if(responseJson=='Registration Successfully!'){
						       alert(responseJson);
							   setFname('');
							   setContactno('');
							   setEmail('');
							   setAddress('');
							   setusername('');
							   setpassword('');
							   setcpassword('');
							   
							   navigation.navigate('login');
							  }else{
								  alert('something went wrong.');
							  }
							   
							  
							  
					 
						  }).catch((error) => {
							console.error(error);
						  });
		}
	};
	
	const setData=(item)=>{
		setGender(item.name);
		
	}
	
	
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
			  value={fname}
			  onChangeText={(fname) => setFname(fname)}
			  placeholder={'Full Name'}
			  style={styles.input}
			  
			/>
			
			
			<View style={{flexDirection:'row'}}>
			
			
			
			{	/*   <DropdownMenu
          style={{flex: 1}}
          bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          // arrowImg={}      
          // checkImage={}   
		  useNativeDriver={false}
          optionTextStyle={{color: '#333333'}}
          titleStyle={{color: '#333333'}} 
           maxHeight={300} 
          handler={(selection, row) => alert(data[selection][row])}
          data={data}
        >

        

</DropdownMenu> */}
			
	
			
			
		</View>
          	
			<TextInput
			  value={contactno}
			  onChangeText={(no) => setContactno(no)}
			  placeholder={'Contact Number'}
			  style={styles.input}
			  keyboardType="phone-pad"
			  require={true}
			  
			/>
			
			<TextInput
			  value={email}
			  onChangeText={(text) => setEmail(text)}
			  placeholder={'Email'}
			  style={styles.input}
			  keyboardType="email-address"
			   require={true}
			  
			/>
			<TextInput
			  value={address}
			  onChangeText={(text) => setAddress(text)}
			  placeholder={'Address'}
			  style={styles.input1}
			  multiline={true}
			numberOfLines={3}
			
			underlineColorAndroid='transparent'
			require={true}
			  
			/> 
			
			   <TextInput
			  value={username}
			  onChangeText={(lname) => setusername(lname)}
			  placeholder={'Username'}
			  style={styles.input}
			  
			/>
			
			
			   <TextInput
			  value={password}
			  onChangeText={(lname) => setpassword(lname)}
			  placeholder={'Password'}
			  style={styles.input}
			  secureTextEntry={true}
			/>
			
			   <TextInput
			  value={cpassword}
			  onChangeText={(lname) => setcpassword(lname)}
			  placeholder={'Confirm Password'}
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

export default registration;

