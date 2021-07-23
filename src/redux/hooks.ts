import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDisptach} from './store'

export const useAppDisptach = () => useDispatch<AppDisptach>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector

