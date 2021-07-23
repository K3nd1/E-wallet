import React from 'react'
import {createStackNavigator,StackNavigationProp} from '@react-navigation/stack'
import Login from '../../screens/PublicScreens/Login';
import Register from '../../screens/PublicScreens/Register';

type LoginStackParamList ={
    Login:undefined,
    Register: undefined
}

export type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList,'Login'>
export type RegisterScreenNavigationProp = StackNavigationProp<LoginStackParamList,'Register'>

const LoginStack = createStackNavigator<LoginStackParamList>()


const LoginNavigation = () =>{
    return(
        <LoginStack.Navigator 
        screenOptions={{
            headerShown:false
           
        }}
        initialRouteName='Login'
        >
            <LoginStack.Screen
            name='Login'
            component={Login}
            />

            <LoginStack.Screen
            name='Register'
            component={Register}
            />

        </LoginStack.Navigator>
    )
}


export default LoginNavigation