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
import { Slider,Button } from 'react-native-elements';
//import Slider from "react-native-slider";
import RNRestart from 'react-native-restart';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage'




const order1 = ({navigation}) => {
	
	

	
	 var data = ["DryFit", "Nirmal Net", "Super Polly", "Advance"];
	 
	  let clothdata = [{
      value: 'DryFit'
    }, {
      value: 'Nirmal Net'
    }, {
      value: 'Super Polly'
    }, {
      value: 'Advance'
    }];
	
	
 let designtypedata = [{
      value: 'Pattern'
    }, {
      value: 'Front Sublamination'
    }, {
      value: 'Front Back Sublamination'
    }, {
      value: 'All Sublamination'
    }];
	
	let collartypedata = [{
      value: 'Normal Collar'
    }, {
      value: 'Chain Collar'
    }];
	
	let chainorflaketdata = [{
      value: 'Chain'
    }, {
      value: 'Flacket'
    }];
	 

	
	const [btnload,setbtnload]=useState(false);
	const [CustomerName,setCustomerName]=useState('');
	const [City,setCity]=useState('');
	const [Pincode,setPincode]=useState('');
	
	
	const [lname,setLname]=useState('');
	const [gender,setGender]=useState('male');
	const [age,setAge]=useState('');
	const [ContactNumber,setContactNumber]=useState('');
	const [Email,setEmail]=useState('');
	const [CustomerAddress,setCustomerAddress]=useState('');
	const [index,setindex]=useState(2);
	const [CustomerIdNumber,setCustomerIdNumber] = useState();
	
	const [bgcolor,setbgcolor]=useState(true);
	
	const [orderDate,setorderDate]=useState(new Date().toDateString());
	const [selectedLanguage, setSelectedLanguage] = useState();
	
	const [cloth,setCloth]=useState('DryFit');
	const [iscloth,setisCloth]=useState(false);
	
	const [designtype,setdesigntype]=useState('Pattern');
	const [isdesigntype,setisdesigntype]=useState(false);
	
	
	const [collartype,setcollartype]=useState('Normal Collar');
	const [iscollartype,setiscollartype]=useState(false);
	
	const [chainorflaket,setchainorflaket]=useState('Chain');
	const [ischainorflaket,setischainorflaket]=useState(false);
	
	const [showModal, setShowModal] = useState(false);
	const [showModal1, setShowModal1] = useState(false);
	const [sliderValue, setSliderValue] = useState(15);
	
	const [sleevecolor,setsleevecolor]=useState('');
	const [backsidecolor,setbacksidecolor]=useState('');
	 const [singleFile, setSingleFile] = useState(null);
	 const [singleFile1, setSingleFile1] = useState(null);
	 const [SponserLogo,setSponserLogo]=useState('');
	 const [DesignImage, setDesignImage]=useState('');
	 const [DesignName,setDesignName]=useState('');
	 const [SponserName,setSponserName]=useState('');
	 const [NumberOfJersies,setNumberOfJersies] = useState('');
	 
	 
	 useEffect(()=>{
		 
		  //RNRestart.Restart();
		  
		
	 },[]);
	
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
  
  
  const ItemViewdesigntype = (item, index) => {
    return (
      <View  key={index} style={{backgroundColor:'#fff',width:280,textAlign:'center',borderRadius:10}}>
	  <TouchableOpacity onPress={()=>{
		  setdesigntype(item.value)
		  setisdesigntype(false)
	  }}  style={{backgroundColor:'green'}}>
        <Text style=
		{{backgroundColor: '#fff',padding:15,textAlign:'center'}}>{item.value}</Text>
		
		<Divider/>
		</TouchableOpacity>
      </View>
    );
  };
  
  const ItemViewcollartype = (item, index) => {
    return (
      <View  key={index} style={{backgroundColor:'#fff',width:280,textAlign:'center',borderRadius:10}}>
	  <TouchableOpacity onPress={()=>{
		  setcollartype(item.value)
		  setiscollartype(false)
	  }}  style={{backgroundColor:'green'}}>
        <Text style=
		{{backgroundColor: '#fff',padding:15,textAlign:'center'}}>{item.value}</Text>
		
		<Divider/>
		</TouchableOpacity>
      </View>
    );
  };
  
  const ItemViewchainorflacket = (item, index) => {
    return (
      <View  key={index} style={{backgroundColor:'#fff',width:280,textAlign:'center',borderRadius:10}}>
	  <TouchableOpacity onPress={()=>{
		  setchainorflaket(item.value)
		  setischainorflaket(false)
	  }}  style={{backgroundColor:'green'}}>
        <Text style=
		{{backgroundColor: '#fff',padding:15,textAlign:'center'}}>{item.value}</Text>
		
		<Divider/>
		</TouchableOpacity>
      </View>
    );
  };
  
  
  
  
    const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', SponserLogo);
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
	  
      let res = await fetch(
        'http://onlylocals.in/api/uploadfile/SaveFile',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
	  console.log(responseJson)
      if (responseJson != '') {
      //  alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
    //  alert('Please Select File first');
    }
  };

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
	  console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      // Setting the state to show single file attributes
	  setSponserLogo(res.name);
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  
  
  
  
  
  const uploadImage1 = async () => {
    // Check if any file is selected or not
    if (singleFile1 != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile1;
      const data = new FormData();
      data.append('name', DesignImage);
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
	  
      let res = await fetch(
        'http://onlylocals.in/api/uploadfile/SaveFile',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
	  console.log(responseJson)
      if (responseJson != '') {
       // alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
     // alert('Please Select File first');
    }
  };

  const selectFile1 = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
	  console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
      // Setting the state to show single file attributes
	  setDesignImage(res.name);
      setSingleFile1(res);
    } catch (err) {
      setSingleFile1(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  
  
  
  const GetData=(CustomerName,OrderDate)=>{
	  
	  var userid='1001';
			  
			  fetch('http://onlylocals.in/api/OrderForm/GetDataList?CustomerName='+CustomerName+'&OrderDate='+OrderDate+'&userid=1001', {
					  method: 'GET',
					  headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					  },
				
					 
					}).then((response) => response.json())
						  .then((responseJson) => {
					 
					
						         AsyncStorage.setItem("dataKey", JSON.stringify(responseJson))
									AsyncStorage.getItem("dataKey").then(data => {
									  if(data){
										  
										 let ourData = JSON.parse(data);
										 
										 console.log("In Method value: ",ourData.CustomerId);
										
										
										 global.CustomerId = ourData.CustomerId;
										 
										
										 
									  }
							  
							  
								})
						  }).catch((error) => {
							console.error(error);
						  });
			
		};
  
  
  
  
  
  
  
  
  
  
  
  
  
  const adddata=()=>{
	  
	   var userid = '1001';
	   
	   
	   if(CustomerName==''||CustomerAddress==''||ContactNumber==''||Email==''||NumberOfJersies==''){
		   alert('Enter all field');
	   }else{
	   
	        setbtnload(true);
	   
			  
			  fetch('http://onlylocals.in/api/OrderForm/SaveOrderForm', {
					  method: 'POST',
					  headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					  },
					  body: JSON.stringify({
					 
						userid: userid,
					 
						CustomerName: CustomerName,
					 
						CustomerAddress: CustomerAddress,
						
						City: City,
						
						Pincode: Pincode,
						
						ContactNumber: ContactNumber,
						
						Email: Email,
					 
						OrderDate: new Date().toDateString(),
					 
						ClothType: cloth,
						
						DesignType: designtype,
						
						CollarType: collartype,
						
						ChainFlaket: chainorflaket,
						
						SleeveColor: sleevecolor,
					 
						BackSideColor: backsidecolor,
					 
						SponserLogo:SponserLogo,
						
						DesignImage: DesignImage,
						
						DesignName: DesignName,
						
						SponserName: SponserName,
					 
						NumberOfJersies: parseInt(NumberOfJersies)
					 
					 
					  })
					 
					}).then((response) => response.json())
						  .then((responseJson) => {
					 
					             console.log(responseJson);
						          Alert.alert(
											  '',
											  responseJson,
											  [
												{
												  text: 'Ok',
												  onPress: () => {
													  
													  
													 uploadImage1();
													 uploadImage();
													 
													 GetData(CustomerName,new Date().toDateString());
													 
													 setCustomerName('');
													 setCustomerAddress('');
													 setCity('');
													 setPincode('');
													 setContactNumber('');
													 setEmail('');
													 setSponserLogo('');
													 setDesignImage('');
													 setDesignName('');
													 setSponserName('');
													 setNumberOfJersies('');
													 
													// console.log('CustomerIdNumber: ',CustomerIdNumber)
													 
													 navigation.navigate('order2')
													 
												  } 
												},
												
											  ],
											  {cancelable: false},
											  //clicking out side of alert will not cancel
											);
							  
							   setbtnload(false);
					 
						  }).catch((error) => {
							console.error(error);
						  });
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
		 
		 
		   <Text style={{alignSelf:'flex-start',marginLeft:20}}>CUSTOMER NAME:</Text>
		   <TextInput
			  value={CustomerName}
			  onChangeText={(customername) =>{ setCustomerName(customername)
			  
			  
			  }}
			  placeholder={'Enter Customer Name'}
			  style={{...styles.input}}
			  
			/>
			
		
         	 
		 
		 
		 
		 
		   <Text style={{alignSelf:'flex-start',marginLeft:20}}>ADDRESS:</Text>
			
				<TextInput
			  value={CustomerAddress}
			  onChangeText={(text) => setCustomerAddress(text)}
			  placeholder={'Address'}
			  style={styles.input1}
			  multiline={true}
			numberOfLines={3}
			
			underlineColorAndroid='transparent'
			require={true}
			  
			/> 
			
			
			
			<View style={{flexDirection:'row'}}>
			<TextInput
			  value={City}
			  onChangeText={(no) => setCity(no)}
			  placeholder={'City'}
			  style={{...styles.input,width:138}}
			
			  require={true}
			  
			/>
			
			<TextInput
			  value={Pincode}
			  onChangeText={(no) => setPincode(no)}
			  placeholder={'Pin Code'}
			  style={{...styles.input,marginLeft:10,width:138}}
			  keyboardType="phone-pad"
			  require={true}
			  
			/>
			</View>
	
	
			<Text style={{alignSelf:'flex-start',marginLeft:20}}>CONTACT NUMBER:</Text>
          	
			<TextInput
			  value={ContactNumber}
			  onChangeText={(no) => setContactNumber(no)}
			  placeholder={'Contact Number'}
			  style={styles.input}
			  keyboardType="phone-pad"
			  require={true}
			  
			/>
			<Text style={{alignSelf:'flex-start',marginLeft:20}}>EMAIL:</Text>
			<TextInput
			  value={Email}
			  onChangeText={(text) => setEmail(text)}
			  placeholder={'Email'}
			  style={{...styles.input}}
			  keyboardType="email-address"
			   require={true}
			  
			/>
			
			<Text style={{alignSelf:'flex-start',marginLeft:20}}>ORDER DATE:</Text>
			<Text  style={styles.input}>{new Date().toDateString()}</Text>
				{	/* <View style={{flexDirection:'row'}}>
			  <DropdownMenu
         
         // bgColor={'white'}
          tintColor={'#666666'}
          activityTintColor={'green'}
          //arrowImg={}      
          // checkImage={}   
		  
          optionTextStyle={{color: '#333333'}}
          titleStyle={{...styles.input}} 
           maxHeight={300} 
          handler={(selection, row) => alert(data[selection][row])}
          data={data}
			>

        

			</DropdownMenu>
</View> */}	
			
			<Text style={{alignSelf:'flex-start',marginLeft:20,marginTop:0}}>CLOTH TYPE:</Text>
			
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
			
			<Text style={{alignSelf:'flex-start',marginLeft:20,marginTop:5}}>DESIGN TYPE:</Text>
			
			
			 <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
				if(isdesigntype){
					setisdesigntype(false);
				}else{
					setisdesigntype(true);
				}
			}}>
			
			<Text >{designtype}</Text>
			
			<Image 
				source={require('./dropdown_arrow.png')}  
				style={{width: 15, height: 25,}} 
			/>
			
			</TouchableOpacity>
			
			{isdesigntype?designtypedata.map(ItemViewdesigntype ):null}
			
			
			<Text style={{alignSelf:'flex-start',marginLeft:20,marginTop:5}}>COLLAR TYPE:</Text>
			 <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between'}}  onPress={()=>{
				if(iscollartype){
					setiscollartype(false);
				}else{
					setiscollartype(true);
				}
			}}>
			<Text >{collartype}</Text>
			
			<Image 
				source={require('./dropdown_arrow.png')}  
				style={{width: 15, height: 25,}} 
			/>
			</TouchableOpacity>
			
			{iscollartype?collartypedata.map(ItemViewcollartype ):null}
			
			<Text style={{alignSelf:'flex-start',marginLeft:20,marginTop:5}}>CHAIN OR FLACKET:</Text>
			
			 <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between'}}  onPress={()=>{
				if(ischainorflaket){
					setischainorflaket(false);
				}else{
					setischainorflaket(true);
				}
			}}>
			<Text >{chainorflaket}</Text>
			
			<Image 
				source={require('./dropdown_arrow.png')}  
				style={{width: 15, height: 25,}} 
			/>
			</TouchableOpacity>
			{ischainorflaket?chainorflaketdata.map(ItemViewchainorflacket ):null}




        
		  
		  
	<View>
	
	
	<Text style={{alignSelf:'flex-start',marginLeft:0,marginTop:5}}>SLEEVE COLOR:</Text>
	
	 <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between',backgroundColor:sleevecolor}}  onPress={() => {
            setShowModal(!showModal);
          }}>
			<Text >{sleevecolor}</Text>
			
			</TouchableOpacity>
	
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
           
			
			 <ColorPicker
			onColorSelected={color =>{ setsleevecolor(color);
		
                setShowModal(!showModal);
             
			}}
			style={{width:300,height:300}}
		  />
			
           
          </View>
        </Modal>
       
      </View>
	  
	  
	  
	  <View>
	
	   <Text style={{alignSelf:'flex-start',marginLeft:0,marginTop:5}}>BACK SIDE COLOR:</Text>
	
	 <TouchableOpacity  style={{...styles.dropdown,flexDirection:'row',justifyContent:'space-between',backgroundColor:backsidecolor}}  onPress={() => {
            setShowModal1(!showModal1);
          }}>
			<Text >{backsidecolor}</Text>
			
			</TouchableOpacity>
	
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={showModal1}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
           
			
			 <ColorPicker
			onColorSelected={color =>{ setbacksidecolor(color);
		
                setShowModal1(!showModal1);
             
			}}
			style={{width:300,height:300}}
		  />
			
           
          </View>
        </Modal>
       
      </View>
	  
	  
	  
	  <Text style={{alignSelf:'flex-start',marginLeft:20,marginTop:5}}>TEAM/SPONSER LOGO:</Text>
		  
		  <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
		    <TouchableOpacity
        style={{width: '45%', borderRadius:15,height:40}}
        activeOpacity={0.5}
        onPress={selectFile}>
		
		
		   <Image 
				source={require('./upload-button.jpg')}  
				style={{width: '100%', borderRadius:15,height:40}} 
				
				
			/>
			  </TouchableOpacity>
			  
			  
			   

		
		  </View>
		  <Text>{SponserLogo}</Text>
		  
		  
		   <View style={{flexDirection:'row',justifyContent:'space-between'}}>
		   <View style={{flexDirection:'column',width: '40%'}}>
		   <Text>DESIGN IMAGE:</Text>
		    <TouchableOpacity
        style={{width: '100%', borderRadius:15,height:40,marginTop:10}}
        activeOpacity={0.5}
        onPress={selectFile1}>
		
		
		   <Image 
				source={require('./upload-button.jpg')}  
				style={{width: '100%', borderRadius:15,height:40}} 
				
				
			/>
			  </TouchableOpacity>
			  <Text>{DesignImage}</Text>
			  
		</View>
			  
			<View style={{flexDirection:'column',width:139,marginLeft:5}}>
			  <Text>DESIGN NAME:</Text>
			  <TextInput
			  value={DesignName}
			  onChangeText={(no) => setDesignName(no)}
			  placeholder={'Design Name'}
			  style={{...styles.input,width:139}}
			
			  require={true}
			  
			/>
			   
         </View>
		
		  </View>
		  
		  <Text style={{alignSelf:'flex-start',marginLeft:20}}>SPONSER NAME:</Text>
		  	<TextInput
			  value={SponserName}
			  onChangeText={(text) => setSponserName(text)}
			  placeholder={'Sponser Name'}
			  style={styles.input1}
			  multiline={true}
			numberOfLines={3}
			
			underlineColorAndroid='transparent'
			require={true}
			  
			/> 
		  
		  <Text style={{alignSelf:'flex-start',marginLeft:20}}>NUMBER OF JERSIES:</Text>
		  <TextInput
			  value={NumberOfJersies}
			  onChangeText={(no) => setNumberOfJersies(no)}
			  placeholder={'Number of jersies'}
			  style={{...styles.input}}
			keyboardType="phone-pad"
			  require={true}
			  
			/>
		  
		 
 

		 
		  
		  
		  
		  
		  
		  
		  
		  
		
        </View>
		
		
		
	   
	    <Button title="SUBMIT FORM" loading={btnload}  containerStyle={{width:'90%',marginLeft:15}} titleStyle={{textAlign:'center'}}  onPress={()=>{
			  
			 adddata();
			  
			  }} >
	     
	     
		  </Button >

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
  
   dropdown: {
    width: 280,
    height: 44,
    padding: 10,
    marginTop: 10,
   
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
   width: 280,
    alignSelf:'center',
	marginTop:16
	
  },
   modal: {
   margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 25
    
  },
});

export default order1;
