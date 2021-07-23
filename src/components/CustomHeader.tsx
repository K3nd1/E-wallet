import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Pressable } from 'react-native'

interface ICustomHeaderProps {
    leftFunc?: () => void
    rightFunc?: () => void
    headerTitle?: string
    rightTextName?:string
    leftTextName?:string
}

const CustomHeader:React.FC<ICustomHeaderProps> = ({headerTitle,leftFunc,leftTextName,rightFunc,rightTextName}) =>{
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.leftText}>{leftTextName}</Text>
            </TouchableOpacity>

            <Text style={styles.headerText}>{headerTitle}</Text>

            <TouchableOpacity onPress={rightFunc}>
                <Text style={styles.rightText}>{rightTextName}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:17
    },
    leftText:{
        fontSize:16,
        color:'#404CB3'
    },
    rightText:{
        fontSize:16,
        color:'#404CB3'
    },
    headerText:{
        fontSize:20,
        color:'#3D6670'
    }
})

export default CustomHeader