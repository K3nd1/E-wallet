import React from 'react'
import { View,Text,StyleSheet,TextInput,Switch ,Pressable} from 'react-native'
import AppLogo from '../../components/svg/AppLogo'
import * as  color from '../../constants/colors'
import {useFonts,Nunito_900Black,Nunito_400Regular,Nunito_600SemiBold} from '@expo-google-fonts/nunito'
import { AntDesign } from '@expo/vector-icons'; 
import MyButton from '../../components/LoginButton/MyButton';
import MyTextInput from '../../components/LoginButton/MyTextInput'
import {LoginScreenNavigationProp} from '../../navigation/PublicScreen/LoginNavigation'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDisptach } from '../../redux/hooks';
import {signIn} from '../../redux/Login/loginSlice'



interface ILoginProps {
    navigation: LoginScreenNavigationProp
}



const Login:React.FC<ILoginProps> = ({navigation}) =>{

    const dispatch = useAppDisptach()
    let [fontsLoaded] = useFonts({
        Nunito_900Black,
        Nunito_400Regular,
        Nunito_600SemiBold
    })





    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(8,'Password is too short - should be 8 chars minimum.').required('Required')
        }),
        onSubmit: () =>{
            console.log('prova')
        }
    })


    if (!fontsLoaded) {
        return <Text>Loading...</Text>
      }

      const storeData = async (value:string) => {
        try {
          await AsyncStorage.setItem('token', value)
      
        } catch (e) {
          // saving error
        }
        console.log('done')
      }


    return(
        <View style={styles.container}>

            <View style={{flex:1,justifyContent:'center'}}>
                <View style={styles.logoContainer}>
                    <AppLogo/>
                </View>

                <Text style={styles.textSignIn}>SIGN IN</Text>
            </View>



            <View style={styles.parentInputContainer}>
                    <View style={styles.inputContainer}>
                            <MyTextInput
                                underline
                                icon={()=><AntDesign name="mail"  size={24}  color='#94AFB6' />}
                                placeholder="E-mail"
                                handleChangeText={formik.handleChange('email')}
                                value={formik.values.email}
                                handleBlurEvent={formik.handleBlur('email')}
                            />
                            
                                       
                            {formik.touched.email && formik.errors.email ? (
                              <Text style={{color:'red'}}>{formik.errors.email}</Text>
                                ) : null}

                            <MyTextInput
                                icon={()=><AntDesign name="lock1"  size={24}  color='#94AFB6' />}
                                placeholder="Password"
                                handleChangeText={formik.handleChange('password')}
                                value={formik.values.password}
                                handleBlurEvent={formik.handleBlur('password')}
                                password
                            />
                                   {formik.touched.password && formik.errors.password ? (
                              <Text style={{color:'red'}}>{formik.errors.password}</Text>
                                ) : null}
                          
                    </View>
                  

                    <Text style={styles.forgotText}> Forgot Password?</Text>

                    <View style={styles.authContainer}>
                        <Text style={styles.authText}>Enable 2FA authentication</Text>
                        <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        ios_backgroundColor="#3e3e3e"
                        />

                    </View>
            </View>

            <View style={styles.butonContainer}> 

                <MyButton 
                backgroundColor={color.PRIMARY_BG_COLOR} 
                text='SIGN UP' textColor={color.SECONDARY_COLOR}
                goToSignUp={()=> navigation.navigate('Register')}
                />   
           
                <MyButton 
                backgroundColor={color.SECONDARY_COLOR} 
                text='SIGN IN' textColor='#fff'
                goToSignUp={()=>{
                    dispatch(signIn('dsdsds'))
                    storeData('dsdsdsd') 
                }}
                />
            </View>
     
        </View>
    ) 
}


const styles = StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor: color.PRIMARY_BG_COLOR,
        flexDirection:'column'
    },
    textSignIn:{    
        fontSize:30,
        fontFamily:'Nunito_900Black',
        letterSpacing:2,
        color:'#3D6670',
        textAlign:'center'
    },
    inputContainer:{  
        backgroundColor:'#fff',   
        padding:10, 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 10,
        borderRadius:5,
        marginHorizontal:15
    },

    forgotText:{
        fontFamily:'Nunito_600SemiBold',
        fontSize:15,
        color:'#404CB3',
        marginHorizontal:15,
        marginTop:20
    },
    authContainer:{ 
        marginHorizontal:20,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
    authText:{
        fontFamily:'Nunito_600SemiBold',
        color:'#3D6670',
        fontSize:15,

    },
    logoContainer:{ 
        flexDirection:'row',
        justifyContent:'center',
    },
    butonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        flex:1,
    },
    parentInputContainer:{
        flex:1,
    }

})

export default Login