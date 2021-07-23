import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { useAppDisptach } from '../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';




interface IStateSlice {
     token:  null|unknown,

}

const initialState:IStateSlice = {  
    token: null
   
} 


 
const loginSlice = createSlice({  
    name:'login',
    initialState,  
    reducers:{ 
      signIn: (state, action) =>{
          state.token = action.payload
      },
      logout: (state, action) =>{
        state.token = action.payload
    },
      addToken: (state, action) =>{
        state.token = action.payload 
      },

    },
   
}) 
 
 export const {addToken,logout, signIn}  = loginSlice.actions
export default loginSlice.reducer