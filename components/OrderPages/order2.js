// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import  React,{useState,useEffect} from 'react';
import { View, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,Image,ScrollView ,Alert,TouchableOpacity,Modal} from 'react-native';
import { Divider } from 'react-native-paper';
import DropdownMenu from 'react-native-dropdown-menu';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Picker} from '@react-native-picker/picker';

import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { ColorPicker } from 'react-native-color-picker'
//import Slider from '@react-native-community/slider';
//import Slider from "react-native-slider";

import { Slider ,Button} from 'react-native-elements';

import DocumentPicker from 'react-native-document-picker';
const order2 = ({navigation,route}) => {
	
	const [sliderValue, setSliderValue] = useState(15);
	const [playername,setplayername]=useState('');
	const [backnumber,setbacknumber]=useState('');
	const [cloth,setCloth]=useState('HALF');
	const [iscloth,setisCloth]=useState(false);
	
	
	
	useEffect(()=>{
	//	console.log(global.CustomerId)
		
	});
	
	
	
	 let clothdata = [{
      value: 'HALF'
    }, {
      value: 'FULL'
    }];
	
		 const sliderStyle = {
            sliderDummy: {
                backgroundColor: '#d3d3d3',
                width: 280,
                height:16,
                borderRadius: 50,
                position: 'absolute',                
            },
            sliderReal: {
                backgroundColor: 'green',
                width: (sliderValue/100) * 280,
                height:16,
            }
        }
	
           	const addplayer=()=>{
				var userid='1001';
				
				if(playername==''||backnumber=='')
				{
					alert('Enter all field');
				}else{
			  
			  fetch('http://onlylocals.in/api/OrderForm/AddPlayers', {
					  method: 'POST',
					  headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					  },
					  body: JSON.stringify({
					 
						CustomerId: global.CustomerId,
					 
						userid: userid,
					 
						PlayerName: playername,
						
						BackNumber: backnumber,
						
						Slive: cloth,
						
						Size: Math.floor(sliderValue)
					 
					  })
					 
					}).then((response) => response.json())
						  .then((responseJson) => {
					 
					
						          Alert.alert(
											  '',
											  responseJson,
											  [
												{
												  text: 'Ok',
												  onPress: () => {
													  setplayername('');
													  setbacknumber('');
													
												  } 
												},
												
											  ],
											  {cancelable: false},
											  //clicking out side of alert will not cancel
											);
							  
							  
					 
						  }).catch((error) => {
							console.error(error);
						  });
				}
			
		};
	
	const regist=()=>{
		navigation.navigate('registration');
		
	};
	
	
		const ItemView = (item, index) => {
    return (
      <View  key={index} style={{backgroundColor:'#fff',width:280,textAlign:'center',borderRadius:10}}>
	  <TouchableOpacity onPress={()=>{
		  setCloth(item.value)
		  setisCloth(false)
	  }}  style={{backgroundColor:'green'}}>
        <Text style=
		{{backgroundColor: '#fff',padding:15,textAlign:'center'}}>{item.value}</Text>
		
		<Divider/>
		</TouchableOpacity>
      </View>
    );
  };
	
	
	
	
	
  return (
     <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex:1,
			
            alignItems: 'center',
            justifyContent: 'center',
			
			
          }}>
		  
			<Text style={{alignSelf:'flex-start',marginLeft:30}}>Player Name:</Text>
		  
		  <TextInput
			  value={playername}
			  onChangeText={(userName) => setplayername(userName)}
			  placeholder={'Player Name'}
			  style={styles.input}
			  
			/>
			
			<Text style={{alignSelf:'flex-start',marginLeft:30}}>Back Number:</Text>
			<TextInput
			  value={backnumber}
			  onChangeText={(userName) => setbacknumber(userName)}
			  placeholder={'Back Number'}
			  style={styles.input}
			  keyboardType="phone-pad"
			  
			/>
			
			<View>
			<Text style={{alignSelf:'flex-start',marginLeft:0}}>Sleeve:</Text>
			 <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
				if(iscloth){
					setisCloth(false);
				}else{
					setisCloth(true);
				}
			}}>
			<Text style={{alignSelf: "flex-start",}} >{cloth}  
			
				</Text>
			
			<Image 
				source={require('./dropdown_arrow.png')}  
				style={{width: 15, height: 25,}} 
			/>
			
	
		</TouchableOpacity>
		   {iscloth?clothdata.map(ItemView ):null}
		   
		   </View>
		
		<Text style={{alignSelf:'flex-start',marginLeft:30}}>Size:</Text>
			
			 <View style={{borderRadius: 50, overflow: 'hidden',marginTop:10}}>       
           <View style={{flexDirection: 'row', position: 'absolute'}}>
                <View style={sliderStyle.sliderDummy}></View>
                <View style={sliderStyle.sliderReal}></View>
            </View>
            <Slider 
			
                style={{width: 280, height: 16, borderRadius: 50}}
                minimumValue={0}
                maximumValue={100}
                value={sliderValue}
                onValueChange={(value)=> setSliderValue(value)}
                maximumTrackTintColor='transparent'  
                minimumTrackTintColor='transparent'
				//thumbTintColor='#fff'
				thumbStyle={{ height: 20, width: 20, backgroundColor: '#fff' }}

                />  

            </View>
		
		  <Text>{Math.floor(sliderValue)}</Text>
		  
       
	    <Button title="ADD PLAYER"  containerStyle={{textAlign:'center',justifyContent: 'center',width:'90%',}} titleStyle={{textAlign:'center'}}  onPress={()=>{
			  
			  addplayer()
			  
			  
			  }} >
	     
	     
		  </Button >
		  
		 
	   
	  
		  
		  

		 
        </View>
       
		 
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

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
     dropdown: {
    width: 280,
    height: 44,
    padding: 10,
    marginTop: 10,
   
    backgroundColor: '#fff',
	borderRadius:10,
	borderWidth:1,
	

	
  },
});
export default order2;
