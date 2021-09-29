// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import  React,{useState,useEffect} from 'react';
import { View, Text, SafeAreaView,TextInput,ActivityIndicator, StyleSheet,TouchableHighlight,FlatList,Image,ScrollView ,Alert,TouchableOpacity, Platform,ToastAndroid,PermissionsAndroid} from 'react-native';
import { Divider } from 'react-native-paper';
import DropdownMenu from 'react-native-dropdown-menu';
import DropDownPicker from 'react-native-dropdown-picker';
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import { Dropdown } from 'react-native-material-dropdown';
import Icon from 'react-native-ionicons';
//import Icon from 'react-native-vector-icons/FontAwesome';
import { ColorPicker } from 'react-native-color-picker'
//import Slider from '@react-native-community/slider';
//import Slider from "react-native-slider";
import { Slider,Button } from 'react-native-elements';

import DocumentPicker from 'react-native-document-picker';
//import basic react native components
import { BottomSheet } from 'react-native-btr';

//import to show social icons
import { SocialIcon } from 'react-native-elements'
import { SwipeablePanel } from 'rn-swipeable-panel';
import AsyncStorage from '@react-native-community/async-storage'
import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider
} from 'react-native-popup-menu';




const teamdetail= ({navigation,route}) => {
	  const [listItems, setListItems] = useState([]);
	  var myItems = [];
	  var colorlist=["#ff0066","#ff0000","#00ff00","#ffff00","#009900","#cc0099"];;
	  var n=0,len=30;
	  const [selectedSleeve, setselectedSleeve] = useState("HALF");
	  const [playername, setplayername ] = useState('');
	  const [backnumber, setbacknumber ] = useState('');
	   const [loading, setloading] = useState(true);
	  
	  const [sliderValue, setsliderValue] = useState(30);
	  const [cloth,setCloth]=useState('DryFit');
	  const [iscloth,setisCloth]=useState(false);
	  const [playerid , setplayerid ]= useState();
	  const [choice ,setchoice]=useState(0);
	  const [headername, setheadername]=useState('');
	  const [buttonname, setbuttonname]=useState('');
	
	
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

	
	
	
	
	 const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
	
	
	
	
	
	
	
	  
	  
	  
	   const [visible, setVisible] = useState(false);

		  const toggleBottomNavigationView = () => {
			//Toggling the visibility state of the bottom sheet
			//setVisible(!visible);
			 setIsPanelActive(true);
		  };
	  
	  
	  useEffect(()=>{
		  
		 GetPlayers();
			
		  
	  },[]);
	  
	  	
	 const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
	  setplayername('');
		setbacknumber('');
	  setchoice(0);
	  setheadername('Add Player');
	  setbuttonname('ADD PLAYER');
	  
    setModalVisible(!isModalVisible);
  };
	  
	  
	const GetPlayers=()=>{
		
		setloading(true);
		   fetch('http://onlylocals.in/api/OrderForm/GetPlayer?userid=1001&CustomerId='+route.params.CustomerId)
			.then((response) => response.json())
			.then((json) => {
		 
		AsyncStorage.setItem("dataKey", JSON.stringify(json))
		AsyncStorage.getItem("dataKey").then(data => {
		  if(data){
			  
			 let ourData = JSON.parse(data)
			 console.log(ourData)
			 ourData.forEach((item) => {
				 
				   if(ourData.length>=colorlist.length){
				 if(colorlist.length==n){
						 n=0;
					 }
										
				 }
				 
			  myItems.push({
				  PlayerId:item.PlayerId,
				 name:item.PlayerName,
				 backnumber: item.BackNumber,
				 size:item.Size,
				 sleeve:item.Slive,
				 color:colorlist[n]

				 });
				 n++;
		  }) 
			 
				setListItems(myItems);
			 
		  }
		  setloading(false);
		  
		  }).catch(err => console.log("error >>>>> ",err))
	  })
      .catch((error) => console.error(error))
	  };
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	   let clothdata = [{
      value: 'HALF'
    }, {
      value: 'FULL'
    }];
	
	
	
	
	
	
		const ItemViewdrop = (item, index) => {
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
	  
	  

  const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={styles.card}>
	  
	  <View style={{backgroundColor:item.color,width:6,borderBottomRightRadius:5,borderTopRightRadius:5,marginTop:8,marginBottom:8}}></View>
	   <View flexDirection='column' style={{padding:8}}>
	   <View  style={{ flexDirection:"row",justifyContent:'space-evenly'}}>
			<View style={{ flexDirection:"column",}}>
			  <Text  style={styles.label}>Back Name:  </Text>
			  <Text style={styles.lbl}>{item.name}</Text>
			</View>
			
			<View style={{ flexDirection:"column"}}>
			  <Text style={styles.label}>Back Number:  </Text>
			  <Text style={styles.lbl}>{item.backnumber}</Text>
			</View>
			
			<View style={{ flexDirection:"column",}}>
			  <Text style={styles.label}>Size:  </Text>
			  <Text style={styles.lbl}>{item.size}</Text>
			</View>
			
			<View style={{ flexDirection:"column",}}>
			  <Text style={styles.label}>Sleeve:  </Text>
			  <Text style={styles.lbl}>{item.sleeve}</Text>
			</View>
			<TouchableOpacity style={{justifyContent:"center",}} onPress={()=>{
				updateplayerdata(item.PlayerId,item.name,item.backnumber,item.sleeve,item.size)
			}}>
				<Image
				  source={require('./edit.png')}
				  style={{ height: 25, width: 25,justifyContent:'center', }}
				/>
			</TouchableOpacity>
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

  

			   const actualDownload = (imgname) => {
			
				let dirs = RNFetchBlob.fs.dirs;
				RNFetchBlob.config({
				  // add this option that makes response data to be stored as a file,
				  // this is much more performant.
				  path: dirs.DownloadDir + '/'+imgname,
				  fileCache: true,
				  notification: true,
				})
				  .fetch(
					'GET',
					'http://onlylocals.in/Photos/'+imgname,
					{},
				  )
				  .then((res) => {
					console.log('res -> ', JSON.stringify(res));
					ToastAndroid.showWithGravity(
					  'Your file has been downloaded to downloads folder!',
					  ToastAndroid.SHORT,
					  ToastAndroid.BOTTOM,
					);
				  });
			  };

			    const downloadFile = async (imgname) => {
					try {
					  const granted = await PermissionsAndroid.request(
						PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
						{
						  title: 'Storage Permission',
						  message: 'App needs access to memory to download the file ',
						},
					  );
					  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
						actualDownload(imgname);
					  } else {
						Alert.alert(
						  'Permission Denied!',
						  'You need to give storage permission to download the file',
						);
					  }
					} catch (err) {
					  console.log(err);
					}
				  };

			  const getExtention = filename => {
				// To get the file extension
				return /[.]/.exec(filename) ?
						 /[^.]+$/.exec(filename) : undefined;
			  };
			  
			  
			  const updateplayerdata=(PlayerId,playername,backnumber,sleeve,size)=>{
				  
				  setchoice(1);
				  setheadername('Update Player');
					setbuttonname('UPDATE PLAYER');
				
				 setplayername(playername);
				setbacknumber(backnumber);
				setselectedSleeve(sleeve);
				setsliderValue(size)
				setplayerid(PlayerId)
				
		    	 setModalVisible(!isModalVisible);
			 
			  };



			const updateplayer=()=>{
				
				
			
			
			if(playername =='' || backnumber ==''){
				
				alert('Enter all field.');
		     	}else{
			  
			  fetch('http://onlylocals.in/api/OrderForm/Updateplayer', {
					  method: 'POST',
					  headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					  },
					  body: JSON.stringify({
					 
						PlayerName: playername,
						
						BackNumber: backnumber,
						
						Slive: selectedSleeve,
						
						Size: Math.floor(sliderValue),
						
						PlayerId: playerid,
						
						userid: route.params.userid
					 
					  })
					 
					}).then((response) => response.json())
						  .then((responseJson) => {
					 
					
						          Alert.alert(
											  'Hello',
											  responseJson,
											  [
												{
												  text: 'Ok',
												  onPress: () => {
													 
													  GetPlayers();
													  setModalVisible(!isModalVisible);
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























       
		const addplayer=()=>{
			
			
			if(playername =='' || backnumber ==''){
				
				alert('Enter all field.');
			}else{
			  
			  fetch('http://onlylocals.in/api/OrderForm/AddPlayers', {
					  method: 'POST',
					  headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					  },
					  body: JSON.stringify({
					 
						CustomerId: route.params.CustomerId,
					 
						userid: route.params.userid,
					 
						PlayerName: playername,
						
						BackNumber: backnumber,
						
						Slive: selectedSleeve,
						
						Size: Math.floor(sliderValue)
					 
					  })
					 
					}).then((response) => response.json())
						  .then((responseJson) => {
					 
					
						          Alert.alert(
											  'Hello',
											  responseJson,
											  [
												{
												  text: 'Ok',
												  onPress: () => {
													  setplayername('');
													  setbacknumber('');
													  GetPlayers();
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
	
	  const ShareRecorde=()=>{
		  
		    fetch('http://onlylocals.in/api/OrderForm/downloadfile?userid=1001&CustomerId='+route.params.CustomerId)
      .then((response) => response.json())
      .then((json) => {
		   
		   if(json!=''){
			   alert('Send the data on email addresss')
		   }else{
			   alert('something went wrong');
		   }
		   
	  })
      .catch((error) => console.error(error))
		  
		  
	  };
	  
	
	
	
  return (
    <SafeAreaView style={{flex: 1}}>
	<View style={{height:50,backgroundColor:'#f4511e',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
	   <Text style={{textAlign:'center', color:'#fff',fontSize:20,fontWeight:'600'}}>Team Detail</Text>
	    
		<TouchableOpacity style={{backgroundColor:'transparent',borderRadius:20, marginRight:10,position:'absolute',right:0}} onPress={()=>{ShareRecorde()}}>
		 <Image 
				source={require('./share.jpg')} 
				style={{width: 30, height: 30,backgroundColor:'transparent',borderRadius:20}} 
			 />
	   
	   </TouchableOpacity>
	</View>
	<View flexDirection='column' style={{padding:8,justifyContent:'center',alignItems:'center'}}>
	
	
	
	
	
	
	
	   <View  style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text  style={styles.label}>Name:</Text>
			  <Text style={styles.lbl}>{route.params.CustomerName}</Text>
			</View>
			
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Order Date:</Text>
			  <Text style={styles.lbl}>{route.params.OrderDate}</Text>
			</View>
		</View>
		
		 <View style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Cloth Type:</Text>
			  <Text style={styles.lbl}>{route.params.ClothType}</Text>
			</View>
			
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Design Type:</Text>
			  <Text style={styles.lbl}>{route.params.DesignType}</Text>
			</View>
		</View>
		
		 <View style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Collar Type:</Text>
			  <Text style={styles.lbl}>{route.params.CollarType}</Text>
			</View>
			
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Chain or Flacket:</Text>
			  <Text style={styles.lbl}>{route.params.ChainFlaket}</Text>
			</View>
		</View>
		
		 <View style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Sleeve Color:</Text>
			  <Text style={{width:'90%',backgroundColor:route.params.SleeveColor,borderRadius:10,textAlign:'center',color:'#fff',padding:5}}>{route.params.SleeveColor}</Text>
			</View>
			
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>BackSide Color:</Text>
			  <Text style={{width:'90%',backgroundColor:route.params.BackSideColor,borderRadius:10,textAlign:'center',color:'#fff',padding:5}}>{route.params.BackSideColor}</Text>
			</View>
		</View>
		
		
		 <View style={{ flexDirection:"row"}}>
			<View style={{ flexDirection:"column",width:'50%',justifyContent:'center'}}>
			  <Text style={styles.label}>Team/Sponser LOGO:</Text>
				
			  <View style={{ flexDirection:"row"}}>
			  <Image 
				source={{uri: 'http://onlylocals.in/Photos/'+route.params.SponserLogo}} 
				style={{width: 100, height: 100}} 
			 />
			 <TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{
						downloadFile(route.params.SponserLogo);
			}}>
			  <Image 
				source={require('./downloadimg.jpg')} 
				style={{width: 30, height: 30,backgroundColor:'transparent',borderRadius:20,marginLeft:10}} 
			 />
			 </TouchableOpacity>
			</View>
		</View>
			
			<View style={{ flexDirection:"column",width:'50%',}}>
			  <Text style={styles.label}>Design Image:</Text>
			  
			  <View style={{ flexDirection:"row"}}>
			  <Image 
				source={{uri: 'http://onlylocals.in/Photos/'+route.params.DesignImage}} 
				style={{width: 100, height: 100}} 
			/>
		<TouchableOpacity style={{justifyContent:'center'}} onPress={()=>{
			downloadFile(route.params.DesignImage);
		}}>
			  <Image 
				source={require('./downloadimg.jpg')} 
				style={{width: 30, height: 30,backgroundColor:'transparent',borderRadius:20,marginLeft:10}} 
			 />
			 </TouchableOpacity>
			 </View>
			</View>
		</View>

</View>


		 <View style={{flex: 1,justifyContent:'space-between',}}>
		 <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:5}}>
		   <Text style={{fontSize:20,fontWeight:'bold'}}>   Player List</Text>
		   <Text onPress={toggleModal} style={{borderWidth:1, borderRadius:10,marginRight:12,textAlign:'center',alignSelf:'center',padding:10,backgroundColor:'#ff8533',color:'#fff'}}>ADD</Text>
	    </View>
	      <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
        />
		
		
		<ActivityIndicator style={{position:'absolute',alignSelf:'center'}} size="large" color="#0000ff" animating={loading}/>
       
      </View>
	  
	  
	  
	  
    
		
		
		
		 <Modal isVisible={isModalVisible} swipeDirection="left" style={{justifyContent:'center'}}>
	  <View style={{justifyContent:'center'}}>
	   
         <View style={{backgroundColor:'#fff',borderRadius:10,justifyContent:'center',padding:15}}>
		 <TouchableOpacity onPress={toggleModal} style={{position:'absolute',right:0,top:-1,}}>
           <Image 
           source={require('./exist.jpg')}  resizeMode={'stretch'}
		  style={{height:30,width:30,borderRadius:50}}
		/>
		</TouchableOpacity>
		   <Text style={{fontSize:20,textDecorationLine: "underline",textDecorationStyle: "solid",textDecorationColor: "#000",textAlign:'center'}}>{headername}</Text>
              <View
          style={{
            
			
            alignItems: 'center',
            justifyContent: 'center',
			
			
          }}>
		  
			<Text style={{alignSelf:'flex-start',}}>Player Name:</Text>
		  
		  <TextInput
			  value={playername}
			  onChangeText={(userName) => setplayername(userName)}
			  placeholder={'Player Name'}
			  style={styles.input}
			  
			/>
			
			<Text style={{alignSelf:'flex-start',}}>Back Number:</Text>
			
			<TextInput
			  value={backnumber}
			  onChangeText={(userName) => setbacknumber(userName)}
			  placeholder={'Back Number'}
			  style={styles.input}
			  keyboardType="phone-pad"
			  
			/>
			
			
		   
		   
		   
		   <Text style={{alignSelf:'flex-start',}}>Sleeve:</Text>
		   
		   
		    <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between'}}>
			 <Picker
        selectedValue={selectedSleeve}
       style={{ height: 50, width: 280,textAlign:'center',alignSelf:'center' }}
        onValueChange={(itemValue, itemIndex) => setselectedSleeve(itemValue)}
        >
        <Picker.Item label="HALF" value="HALF" />
        <Picker.Item label="FULL" value="FULL" />
      </Picker>
			
			
	
		</TouchableOpacity>
		  
		
		
		
			
		<Text style={{alignSelf:'flex-start',}}>Size:</Text>

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
                onValueChange={(value)=> setsliderValue(value)}
                maximumTrackTintColor='transparent'  
                minimumTrackTintColor='transparent'
				//thumbTintColor='#fff'
				thumbStyle={{ height: 20, width: 20, backgroundColor: '#fff' }}

                />  

            </View>
		
		  <Text>{Math.floor(sliderValue)}</Text>
       
		  
		  { /*  <TouchableOpacity style={styles.button} onPress={()=>{
			  
			  if(choice==0){
				  addplayer();
			  }else{
				  updateplayer();
			  }
			  
			  
			  }} >
	      <Text style={{fontWeight:'normal',letterSpacing:1}}>{buttonname}</Text>
	     
		  </TouchableOpacity > */}
		  
		   <Button title={buttonname}  containerStyle={{textAlign:'center',justifyContent: 'center',width:'100%',}} titleStyle={{textAlign:'center'}}  onPress={()=>{
			  
			  if(choice==0){
				  addplayer();
			  }else{
				  updateplayer();
			  }
			  
			  
			  }} >
	     
	     
		  </Button >
	   
	  
		  
		    

		 
        </View>
            
  </View>
     </View>
      </Modal>
		
        
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
	 container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
	borderTopRightRadius:15,
	borderTopLeftRadius:15,
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

export default teamdetail;
