import React,{useEffect,useState} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import LoginNavigation from './src/navigation/PublicScreen/LoginNavigation';
import HomeNavigation from './src/navigation/ProtectedScreen/HomeNavigation';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import {useAppSelector,useAppDisptach} from './src/redux/hooks'
import { addToken  } from './src/redux/Login/loginSlice'; 
import AsyncStorage from '@react-native-async-storage/async-storage';



const ConfigureAppNavigation  = () =>{

  
  const token = useAppSelector(state=> state.login.token)
  const dispatch = useAppDisptach()


  // useEffect(()=>{

  //   const getData = async () => {
  //     let userToken;

  //     try {
  //      userToken =await AsyncStorage.getItem('token')
  //      dispatch(addToken(userToken))

  //     } catch(e) {
  //     }

  //   }
    
  
  //   getData()


  // },[token])

  return( 
  
 
    <NavigationContainer>
      
      {token == null ? 
       <LoginNavigation/>
    :
    
    <HomeNavigation/>
    }
        
     
 
  </NavigationContainer>
  )
}
  
export default function App() { 

  return ( 
    <Provider store={store}>
      <ConfigureAppNavigation/>
    </Provider>

  );
}
 
 