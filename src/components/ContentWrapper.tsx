import React from 'react'
import { View, Text, StyleSheet } from 'react-native'



interface IContentWrapperProps{
    children?:any,
    topMargin?: unknown
}


const ContentWrapper:React.FC<IContentWrapperProps> = ({children,topMargin}) =>{
    return(
        <View style={{
            ...styles.wrapper,
            marginTop: topMargin ? -30 : 0
        }}>
           {children}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{   
        marginHorizontal:15,
        borderRadius:12,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        marginTop:-30,
        marginBottom:50
    }   
})


export default ContentWrapper