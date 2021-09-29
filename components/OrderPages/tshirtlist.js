// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import  React,{useState,useEffect} from 'react';
import { Button,View,ActivityIndicator, Text, SafeAreaView,TextInput,StyleSheet,TouchableHighlight,FlatList,Image,ScrollView ,Alert,TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';



const tshirtlist = ({navigation}) => {
	
	const [listItems, setListItems] = useState([]);
	  var arrayItems= [];
	
	const [SaibgColor,setSaibgColor]=useState(false);
	const [GanaptibgColor,setGanaptibgColor]=useState(false);
	const [JaybgColor,setJaybgColor]=useState(false);
	const [DuragabgColor,setDuragabgColor]=useState(false);
	const [BhimbgColor,setBhimbgColor]=useState(false);
	const [MusicbgColor,setMusicbgColor]=useState(false);
	const [maharajbgColor,setmaharajbgColor]=useState(false);
	const [ShivbgColor,setShivbgColor]=useState(false);
	const [SportbgColor,setSportbgColor]=useState(false);
	
	
	 const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = (item) => {
	  global.image=item.photo;
    setModalVisible(!isModalVisible);
  };
	
	
	useEffect(()=>{
		
	  GanaptiBabaImages();
		
	},[]);
	
	const JayMalharImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(true);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=37;i<46;i++)
		{			
			arrayItems.push({
				photo:"http://onlylocals.in/Photos/JAYMALHAR/"+i+".jpg"
			});
		}
		
		setListItems(arrayItems);
	
	}
	const DuragaMataImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(true);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=1;i<46;i++){
		arrayItems.push({
		photo: "http://onlylocals.in/Photos/DURGAMATA/"+i+".jpg"
		});
		
		}
		
		setListItems(arrayItems);
	
	}
	const BhimJayantiImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(true);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=1;i<16;i++){
	     arrayItems.push({
		photo:"http://onlylocals.in/Photos/BHIMJAYNTI/"+i+".jpg"
		 });
		
		}
		
		setListItems(arrayItems);
	
	}
	const MusicImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(true);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=1;i<31;i++){
		arrayItems.push({
		photo: "http://onlylocals.in/Photos/Music/"+i+".jpg"
		});
		
		}
		
		setListItems(arrayItems);
	
	}
	const SaiBabaImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(true);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=1;i<23;i++){
	 arrayItems.push({
		         photo: "http://onlylocals.in/Photos/SAIBABA/"+i+".jpg"
		 });
		
		}
		
		setListItems(arrayItems);
	
	}
	const ShivajiMaharajImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(true);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=1;i<46;i++){
		arrayItems.push({
		 photo: "http://onlylocals.in/Photos/SHIVAJIMAHARAJ/"+i+".jpg"
		});
		
		}
		
		setListItems(arrayItems);
	
	}
	const ShivBholeImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(true);
	  setSportbgColor(false);
	
		for(var i=23;i<37;i++){
		arrayItems.push({
		photo:"http://onlylocals.in/Photos/SHIVBHOLE/"+i+".jpg"
		});
		
		}
		
		setListItems(arrayItems);
	
	}
	
	
	const SportImages=()=>{
	arrayItems =[];
    setListItems(arrayItems);
	  setGanaptibgColor(false);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(true);
	
			for(var i=11;i<31;i++){
		arrayItems.push({
		photo: "http://onlylocals.in/Photos/Sport/sawali S "+i+".jpg"
		});
		
		}
		
	 for(var i=1;i<10;i++)
		{
			
			
			arrayItems.push({
			photo:"http://onlylocals.in/Photos/Sport/sawali S 0"+i+".jpg"
			});
		}
		
		setListItems(arrayItems);
	
	}
	
	
	const GanaptiBabaImages=()=>{
		
		arrayItems =[];
       setListItems(arrayItems);
	  setGanaptibgColor(true);
	  setSaibgColor(false);
	  setmaharajbgColor(false);
	  setJaybgColor(false);
	  setDuragabgColor(false);
	  setBhimbgColor(false);
	  setMusicbgColor(false);
	  setShivbgColor(false);
	  setSportbgColor(false);
	
		for(var i=10;i<100;i++)
		{
			arrayItems.push({
			photo: "http://onlylocals.in/Photos/GANPATI/"+i+".jpg"
			});
		}
		
		for(var i=1;i<10;i++)
		{
			
			
			arrayItems.push({
			photo:"http://onlylocals.in/Photos/GANPATI/sawali G 0"+i+".jpg"
			});
		}
		
		for(var i=10;i<100;i++)
		{
			
			
			arrayItems.push({
			photo:"http://onlylocals.in/Photos/GANPATI/sawali G "+i+".jpg"
			});
		}
		
		setListItems(arrayItems);
		
	}
	
	
	
	const ItemView = ({item}) => {
    return (
      // FlatList Item
      <View style={{justifyContent:'space-around'}} >
	  
	  <ScrollView horizontal>
	  <TouchableHighlight onPress={()=>toggleModal(item)}>
	   <Image 
        source={{uri: item.photo}}  resizeMode={'stretch'}
      style={{width:180, height:200}}
    />
			 </TouchableHighlight>
	 </ScrollView>
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
  return (
    <SafeAreaView style={{flex: 1}}>
	 <View >
       <View style={{flexDirection:"row"}}>
	    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
	     
		  <Text style={{...styles.tab,backgroundColor:GanaptibgColor?'#344955':'#ff9933',color:GanaptibgColor?'#fff':'black',textTransform:'uppercase'}} onPress={GanaptiBabaImages} >Ganpati</Text>
		  <Text style={{...styles.tab,backgroundColor:JaybgColor?'#344955':'#ff9933',color:JaybgColor?'#fff':'black',textTransform:'uppercase'}} onPress={JayMalharImages}>Jay Malhar</Text>
		  <Text style={{...styles.tab,backgroundColor:DuragabgColor?'#344955':'#ff9933',color:DuragabgColor?'#fff':'black',textTransform:'uppercase'}} onPress={DuragaMataImages}>Duraga Mata</Text>
		  <Text style={{...styles.tab,backgroundColor:BhimbgColor?'#344955':'#ff9933',color:BhimbgColor?'#fff':'black',textTransform:'uppercase'}} onPress={BhimJayantiImages}>Bhim Jayanti</Text>
		  <Text style={{...styles.tab,backgroundColor:MusicbgColor?'#344955':'#ff9933',color:MusicbgColor?'#fff':'black',textTransform:'uppercase'}} onPress={MusicImages}>Music</Text>
		  <Text style={{...styles.tab,backgroundColor:SaibgColor?'#344955':'#ff9933',color:SaibgColor?'#fff':'black',textTransform:'uppercase'}} onPress={SaiBabaImages}>Sai Baba</Text>
		   <Text style={{...styles.tab,backgroundColor:maharajbgColor?'#344955':'#ff9933',color:maharajbgColor?'#fff':'black',textTransform:'uppercase'}} onPress={ShivajiMaharajImages}>Shivaji Maharaj</Text>
		    <Text style={{...styles.tab,backgroundColor:ShivbgColor?'#344955':'#ff9933',color:ShivbgColor?'#fff':'black',textTransform:'uppercase'}} onPress={ShivBholeImages}>Shiv Bhole</Text>
			 <Text style={{...styles.tab,backgroundColor:SportbgColor?'#344955':'#ff9933',color:SportbgColor?'#fff':'black',textTransform:'uppercase'}} onPress={SportImages}>Sport</Text>
		 
	   </ScrollView>
	   </View>
	  
	 
	  
	  
	      <FlatList
          data={listItems}
          //data defined in constructor
          ItemSeparatorComponent={ItemSeparatorView}
          //Item Separator View
          renderItem={ItemView}
          keyExtractor={(item, index) => index.toString()}
		  numColumns={2}
        />
       
   
	  
	  
	  
	  
	  
	  <Modal isVisible={isModalVisible} swipeDirection="left" style={{justifyContent:'center'}}>
	  <View style={{justifyContent:'center'}}>
	   
        <View style={{backgroundColor:'#fff',borderRadius:10,height:350,width:320,justifyContent:'center'}}>
        
		 <Image 
        source={{uri: global.image}}  
		  style={{height:350,width:320,resizeMode:'stretch'}}
		/>   
		<TouchableOpacity onPress={toggleModal} style={{position:'absolute',right:0,top:-5,}}>
           <Image 
           source={require('./exist.jpg')}  
		  style={{height:30,width:30,borderRadius:50}}
		/>
		</TouchableOpacity>
        
        </View>
		</View>
      </Modal>
	  
	  
	  
	  
	  
	  
	 </View>
	 
    </SafeAreaView>
  );
};

export default tshirtlist;
let styles=StyleSheet.create({ 
 
 tab:{
	 borderRadius:10,
	 borderWidth:1,
	 padding:10,
	 margin:8,
	 fontWeight:'bold'
 }



});