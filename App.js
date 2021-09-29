// React Native Navigation Drawer – Example using Latest Navigation Version
// https://aboutreact.com/react-native-navigation-drawer

import 'react-native-gesture-handler';

import  React,{useEffect,useState} from 'react';
import {View, TouchableOpacity, Image,Text,SafeAreaView,style,Button,TouchableHighlight,TouchableNativeFeedback} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';


import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-community/async-storage'

import order1 from './components/OrderPages/order1';
import order2 from './components/OrderPages/order2';
import tshirtlist from './components/OrderPages/tshirtlist';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';

import login from './components/OrderPages/login';
import registration from './components/OrderPages/registration';
import forgotpassword from './components/OrderPages/forgotpassword';
import ContactUs from './components/OrderPages/ContactUs';
import AboutUs from './components/OrderPages/AboutUs';
import teamlist from './components/TeamsList/teamlist';
import teamdetail from './components/TeamsList/teamdetail';
import { MenuProvider } from 'react-native-popup-menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
	   <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{width: 25, height: 25, marginLeft: 5}}
			/> 
      </TouchableOpacity>
    </View>
  );
};

// function LoginScreenStack({navigation}) {
  // return (
    // <Stack.Navigator initialRouteName="login" >
   

	  
	 
	  
	  
	  
    // </Stack.Navigator>
  // );
// }


function OrderScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="login"
      
    >
	
	
	
 <Stack.Screen
        name="login"
        component={login}
        options={{
          title: 'Login', //Set Header Title
         
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
		
        }}
      />
	  
	  <Stack.Screen
        name="registration"
        component={registration}
		
        options={{
          title: 'Registration', //Set Header Title
         
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
	  
	  
	  	  <Stack.Screen
        name="forgotpassword"
        component={forgotpassword}
        options={{
          title: 'Forgot Password', //Set Header Title
         
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
	   
	
	
	
	
	
	
	
	
	
	
	   <Stack.Screen
        name="order1"
        component={order1}
        options={{
          title: 'Order Form', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
		
		
      />
	  
	  
	      <Stack.Screen
        name="order2"
        component={order2}
        options={{
          title: 'Add Player', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }
		
		}
		
		
      />
	  
	  
	  
	      <Stack.Screen
        name="tshirtlist"
        component={tshirtlist}
        options={{
          title: 'T-Shirt List', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }
		
		}
		
		
      />
	  
	  
	  
      
    </Stack.Navigator>
  );
}





function tshirtlistScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="tshirtlist"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
		 
       
      }}
    >
	  
	  
	  
	  
	      <Stack.Screen
        name="tshirtlist"
        component={tshirtlist}
        options={{
          title: 'T-Shirt List', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }
		
		}
		
		
      />
	  
	  
	  
      
    </Stack.Navigator>
  );
}






function ContactUsScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="ContactUs"

    >
	  
	  
	  
	  
	      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
			headerShown: false,
          title: 'Contact Us', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }
		
		}
		
		
      />
	  
	  
	  
      
    </Stack.Navigator>
  );
}




function AboutUsScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="AboutUs"
    >
	  
	  
	  
	  
	      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
			headerShown: false,
          title: 'About Us', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }
		
		}
		
		
      />
	  
	  
	  
      
    </Stack.Navigator>
  );
}















function TeamListStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="teamlist"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
		 
       
      }}
    >
	   <Stack.Screen
        name="teamlist"
        component={teamlist}
        options={{
          title: 'Teams', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
		
		
      />
	  
	   <Stack.Screen
        name="teamdetail"
        component={teamdetail}
        options={{
			headerShown: false,
          title: 'Team Details', //Set Header Title
		 // headerShown: false,
          headerLeft: null,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
		  headerTitleAlign: 'center',
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
		
		
      />
	  
	  
	     
	  
	  
	  
      
    </Stack.Navigator>
  );
}




function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        }
      }}
    >
	  
	    
	  
	  
	  
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App({navigation}) {
	
	const [visible,setVisible]= useState(false);
	const [logging,setlogging]= useState(false);
	const [fullName,setfullName] = useState('');
	const [email,setemail] = useState('');
	const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';
	
	useEffect(()=>{
		
		AsyncStorage.getItem("userdata").then(data=>{
			
			let ourData = JSON.parse(data);
			console.log(ourData);
			setfullName( ourData.fullname);
			setemail(ourData.email)
			
			if(ourData.userpassword=='sawali9111' || ourData.userpassword=='charu@123'||ourData.userpassword=='Sawali123'){
				setVisible(true);
			}else{
				setVisible(false);
			}
		})
	
		
	
	
		
	});
	
	
  return (
  <MenuProvider>
    <NavigationContainer>
	
	
	
	
      <Drawer.Navigator
	   
       
        drawerContentOptions={{
          activeTintColor: 'blue',
          itemStyle: {marginVertical: 8,},
        }}
		
     drawerContent={(props) => {
        return (
          <SafeAreaView>
		  <View>
            <View
              style={{
                height: 150,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("./images/icons/user.png")}
                 style={{height:90,width:90}}
              />
			  <Text>{fullName}</Text>
			  <Text>{email}</Text>
			  
			  <View style={{
                height: 1,
				width:'100%',
				backgroundColor:'black',
                marginTop:30,
              }}></View>
            </View>
            <DrawerItemList {...props}/>
			
			<TouchableOpacity style={{flexDirection:"row",padding:10,marginLeft:10}} onPress={()=>{
				AsyncStorage.getAllKeys()
					.then(keys => AsyncStorage.multiRemove(keys))
					.then(() => props.navigation.navigate('login'));
                 
				
				
			}}>
			 <Image
			  source={require('./images/icons/logout.png')}
			  style={{height:25,width:25}}
			/>
			
			<Text style={{marginLeft:28,color:'gray'}}>LogOut</Text>
			</TouchableOpacity>
			
		</View>
          </SafeAreaView>
        );
      }}
    >
	  
	  
	   
	  
	  
	
		
	
            <Drawer.Screen
          name="order1"
          options={{drawerLabel: 'Order Form',
		  swipeEnabled: false,
		  drawerIcon: ({ focused, size }) => (
			<Image
			  source={require('./images/icons/form.png')}
			  style={[{ height: size, width: size }]}
			/>)
		  }}
          component={OrderScreenStack}
        />
		
		
		 {visible? <Drawer.Screen
          name="teamlist"
          options={{drawerLabel: 'Admin Panel',
		  drawerIcon: ({ focused, size }) => (
			<Image
			  source={require('./images/icons/home.png')}
			  style={[{ height: size, width: size }]}
			/>)
		  
		  }}
          component={TeamListStack}
        />:null}
		
		 <Drawer.Screen
          name="tshirtlist"
          options={{drawerLabel: 'T-Shirt List',
		  drawerIcon: ({ focused, size }) => (
			<Image
			  source={require('./images/icons/shirt.png')}
			  style={[{ height: size, width: size }]}
			/>)}}
          component={tshirtlistScreenStack}
        />
		
		
	   <Drawer.Screen
          name="ContactUs"
          options={{drawerLabel: 'ContactUs',
		  drawerIcon: ({ focused, size }) => (
			<Image
			  source={require('./images/icons/contact.png')}
			  style={[{ height: size, width: size }]}
			/>)
		  }}
          component={ContactUsScreenStack}
        />
		
		 <Drawer.Screen
          name="AboutUs"
          options={{drawerLabel: 'AboutUs',
		  drawerIcon: ({ focused, size }) => (
			<Image
			  source={require('./images/icons/about.png')}
			  style={[{ height: size, width: size }]}
			/>)}}
          component={AboutUsScreenStack}  
		  
		   
        />
				

	
      </Drawer.Navigator>
    </NavigationContainer>
	</MenuProvider>
  );
}

export default App;

