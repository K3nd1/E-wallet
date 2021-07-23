import {configureStore} from '@reduxjs/toolkit'
import loginSlice from './Login/loginSlice'


const store = configureStore({
    reducer:{
        login:loginSlice
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDisptach = typeof store.dispatch

export default store