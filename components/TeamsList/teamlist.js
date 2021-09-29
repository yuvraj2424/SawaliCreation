// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import  React,{useState,useEffect} from 'react';
import { Button,View,ActivityIndicator, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,FlatList,Image,ScrollView ,Alert,TouchableOpacity,Modal} from 'react-native';
import { Divider } from 'react-native-paper';
import DropdownMenu from 'react-native-dropdown-menu';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Picker} from '@react-native-picker/picker';

import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { ColorPicker } from 'react-native-color-picker'
import Slider from '@react-native-community/slider';
//import Slider from "react-native-slider";
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
  renderers
} from 'react-native-popup-menu';
const { SlideInMenu,Popover } = renderers;


const teamlist = ({navigation}) => {
	
	  const [listItems, setListItems] = useState([]);
	  const [loading, setloading] = useState(true);
	  var myItems = [];
	  var colorlist=["#ff0066","#ff0000","#00ff00","#ffff00","#009900","#cc0099"];;
	  var n=0,len=30;
	  var id="1001";
	  
	  useEffect(()=>{
		  
		  myItems = [];
		 
		  fetch('http://onlylocals.in/api/OrderForm/GetOrder?userid='+id)
      .then((response) => response.json())
      .then((json) => {
		  
		  let data=JSON.stringify(json);
		  
		
			

		 
		AsyncStorage.setItem("dataKey", JSON.stringify(json))
		AsyncStorage.getItem("dataKey").then(data => {
		  if(data){
			  
			 let ourData = JSON.parse(data)
			
		//	console.log("parse: ",JSON.parse(data));
			
			 ourData.forEach((item) => {
				 
				   if(ourData.length>=colorlist.length){
				 if(colorlist.length==n){
						 n=0;
					 }
										
				 }
				 
			  myItems.push({
				 CustomerName:item.CustomerName,
				 OrderDate: item.OrderDate,
				 ContactNumber:item.ContactNumber,
				 Email:item.Email,
				 CustomerAddress:item.CustomerAddress,
				 color:colorlist[n],
				 Id:item.Id,
				 CustomerId:item.CustomerId,
				 userid:item.userid,
				 City:item.City,
				 Pincode:item.Pincode,
				 ClothType:item.ClothType,
				 DesignType:item.DesignType,
				 CollarType:item.CollarType,
				 ChainFlaket:item.ChainFlaket,
				 SleeveColor:item.SleeveColor,
				 BackSideColor:item.BackSideColor,
				 SponserLogo:item.SponserLogo,
				 DesignImage:item.DesignImage,
				 DesignName:item.DesignName,
				 SponserName:item.SponserName,
				 NumberOfJersies:item.NumberOfJersies

				 });
				 n++;
		  }) 
			 
				setListItems(myItems);
			 
		  }
		  setloading(false);
		  
		  }).catch(err => console.log("error >>>>> ",err))
	  })
      .catch((error) => console.error(error))
      
	  });
	  
	  
	  const DeleteRecorde=(CustomerId)=>{
		  
		    fetch('http://onlylocals.in/api/OrderForm/DeleteOrder?userid='+id+'&CustomerId='+CustomerId)
      .then((response) => response.json())
      .then((json) => {
		   
		   if(json!=''){
			   alert(json)
		   }else{
			   alert('something went wrong');
		   }
		   
	  })
      .catch((error) => console.error(error))
		  
		  
	  };
	  

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={styles.card} >
	  
	  <View style={{backgroundColor:item.color,width:6,borderBottomRightRadius:5,borderTopRightRadius:5,marginTop:10,marginBottom:10}}></View>
	   <View flexDirection='column' style={{padding:8}}>
	   
	
	
	   <View  style={{ flexDirection:"row"}}>
	   <TouchableOpacity style={{position:'absolute',right:0,padding:5}}>
				
			  
	    
			 <Menu renderer={Popover}>
			   <MenuTrigger>
			   <Image 
				source={require('./optionimg.png')} 
				style={{width: 25,height: 25,backgroundColor:'transparent',}} 
			 /></MenuTrigger>
			   <MenuOptions>
				
				 <MenuOption onSelect={() => {getItem(item)}} >
				   <Text style={{padding:5,width:120}}>More</Text>
				 </MenuOption>
				 
				  <MenuOption onSelect={() =>{DeleteRecorde(item.CustomerId)}} >
				   <Text style={{color: 'red',padding:8}}>Delete</Text>
				 </MenuOption>
				
			   </MenuOptions>
			 </Menu>
		   
	  
			 
			 
			 
			</TouchableOpacity>
	   
	   
			<View style={{ flexDirection:"column",width:'45%',}}>
			  <Text  style={styles.label}>Name:</Text>
			<TouchableOpacity  onPress={()=>{getItem(item)}}>
			  <Text style={{...styles.lbl,color:'blue',textDecorationLine:'underline',textDecorationStyle:'solid'}}>{item.CustomerName}</Text>
			</TouchableOpacity>
			</View>
			<View style={{ flexDirection:"column",width:'48%'}} >
			  <Text style={styles.label}>Order Date:</Text>
			  <Text style={styles.lbl}>{item.OrderDate}</Text>
			</View>
			
		</View>
		
		 <View style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",width:'45%',}}>
			  <Text style={styles.label}>Phone Number:</Text>
			  <Text style={styles.lbl}>{item.ContactNumber}</Text>
			</View>
			
			<View style={{ flexDirection:"column",width:'55%',}}>
			  <Text style={styles.label}>Email:</Text>
			  <Text style={styles.lbl}>{item.Email}</Text>
			</View>
		</View>
		
		 <View style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",}}>
			  <Text style={styles.labeladd}>Address:</Text>
			  <Text style={styles.lbladd}>{item.CustomerAddress} {item.City?', '+item.City:null}  {item.Pincode?', '+item.Pincode:null}</Text>
			</View>
			
			
		</View>
			
         </View>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // FlatList Item Separator
      <View
          style={{
              height: 0,
              width: '100%',
              backgroundColor: '#fff'
          }}
      />
    );
  };

  const getItem = (item) => {
    //Function for click on an item
   // alert('Name: ' + item.CustomerName + ' Number: ' + item.ContactNumber);
	navigation.navigate('teamdetail',{
				CustomerName:item.CustomerName,
				 OrderDate: item.OrderDate,
				 ContactNumber:item.ContactNumber,
				 Email:item.Email,
				 CustomerAddress:item.CustomerAddress,
				 Id:item.Id,
				 CustomerId:item.CustomerId,
				 userid:item.userid,
				 City:item.City,
				 Pincode:item.Pincode,
				 ClothType:item.ClothType,
				 DesignType:item.DesignType,
				 CollarType:item.CollarType,
				 ChainFlaket:item.ChainFlaket,
				 SleeveColor:item.SleeveColor,
				 BackSideColor:item.BackSideColor,
				 SponserLogo:item.SponserLogo,
				 DesignImage:item.DesignImage,
				 DesignName:item.DesignName,
				 SponserName:item.SponserName,
				 NumberOfJersies:item.NumberOfJersies
	});
  };
	
	
	
	
	
	
	
	
	
  return (
    <SafeAreaView style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
	
	
	
	
	
	 
	
	
	
	  <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
	  
	  
	      <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
	/>
       <ActivityIndicator style={{position:'absolute',alignSelf:'center'}} size="large" color="#0000ff"  animating={loading}/>
	 
	   
      </View>
    </SafeAreaView>
  );
};

let styles=StyleSheet.create({
	card:{
		backgroundColor:'#fff',
		borderRadius:12,
		elevation:10,
		
		marginBottom:10,
		marginLeft:15,
		marginRight:15,
		marginTop:10,
		
		minWidth:'90%',
		justifyContent:'space-between',
		alignContent:"space-between",
		flexDirection:'row'
	},
	label:{
		fontSize:15,
		color:'gray',
		fontWeight: "bold",
	},
	
	lbl:{
		fontSize:15,
		color:'black',
		fontWeight:'bold',
		 flexWrap: "wrap",
	},
	labeladd:{
		fontSize:15,
		color:'gray',
		fontWeight: "bold",
	},
	
	lbladd:{
		fontSize:15,
		color:'black',
		fontWeight:'bold',
		 flexWrap: "wrap",
	},
});

export default teamlist;
