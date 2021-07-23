import React, { ChangeEvent } from 'react'
import { View,TextInput,StyleSheet,ToastAndroid } from 'react-native'

interface IMyTextInputProps {
    underline?: boolean
    icon: ()=> unknown
    placeholder?: string,
    handleChangeText?: (e:any)=>void,
    value?:string,
    handleBlurEvent?:(e:any)=>void,
    password?:boolean

}
  

const  MyTextInput:React.FC<IMyTextInputProps> = ({underline,icon,placeholder,handleChangeText,value,handleBlurEvent,password}) =>{

     return(
        <View style={{
            ...styles.containerView,
            borderBottomWidth: underline? 1:0
        }}>
            {icon()}
            <TextInput 
            onBlur={handleBlurEvent}
            style={styles.input} 
            onChangeText={handleChangeText}
            placeholder={placeholder}
            value={value}
            secureTextEntry={password}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        fontSize:18,
        fontFamily: 'Nunito_400Regular',
        flex:1,
        paddingLeft:10
    },
    containerView:{
        flexDirection:'row',
        alignItems:'flex-start',
        borderBottomWidth:0,
        borderBottomColor:'#DDDDDD',
        paddingBottom:15,
        paddingTop:15
    }

})

export default MyTextInput