import React,{useState} from 'react'
import { View, Text,StyleSheet,FlatList,ScrollView } from 'react-native'
import {StatusBar} from 'expo-status-bar'
import Card from '../../components/svg/Card'
 
const Wallets = ({navigation}) => {


    const [loop, setLoop] = useState([0,1,2,3,4,5,6])

    return(
        <View style={styles.container}>
            <StatusBar style='dark'/>

            
            <View style={{marginTop:20}}>
                <FlatList
                
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={loop}
                keyExtractor={item=> item.toString()}
                renderItem={({item})=>{
                    return(
                        <View style={{marginHorizontal:47,marginVertical:10}}>
                            <Card/>
                        </View>
                    )
                }}
                />
            </View>

 

            <ScrollView  showsVerticalScrollIndicator={false}>
                <View>

                </View>
            </ScrollView>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F1F3F6',

    }
})

export default Wallets