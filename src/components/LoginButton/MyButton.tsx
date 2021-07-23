import React from 'react'
import { Text,TouchableOpacity,StyleSheet, ColorValue } from 'react-native'

interface IMyButtonProps{
    backgroundColor?: ColorValue,
    text?:string,
    textColor?: ColorValue,
    goToSignUp?: () => void

}

const MyButton:React.FC<IMyButtonProps> = ({backgroundColor,text,textColor,goToSignUp}) =>{
    return (
     <TouchableOpacity 
     onPress={goToSignUp}
     style={{
         ...styles.buton,
         backgroundColor: backgroundColor? backgroundColor : undefined
     }}>
         <Text style={{
             ...styles.textButton,
             color: textColor? textColor: undefined
         }}>
           {text}
         </Text>
     </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    buton:{
        width:167,
       backgroundColor:'#404CB3',
        paddingVertical:15,
        borderRadius:4
    },
    textButton:{
        textAlign:'center',
        fontSize:16,
        color:'#fff',
        fontFamily:'Nunito_400Regular'
    }
})


export default MyButton