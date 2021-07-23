import React from 'react'
import { View, Text,Button,StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDisptach } from '../../redux/hooks';
import {logout} from '../../redux/Login/loginSlice'


const MyProfile = () => {

  const dispatch = useAppDisptach()

  const removeValue = async () => {
        try {
          await AsyncStorage.removeItem('token')
        } catch(e) {
          // remove error
        }
      
        console.log('Done.')
      }
    return(
        <View style={styles.container}>
            <Button title='Logout' onPress={()=>{
              dispatch(logout(null))
              removeValue()
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:100,
    }
})

export default MyProfile