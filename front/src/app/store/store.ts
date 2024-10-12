import { configureStore } from '@reduxjs/toolkit'
import UserSlice from 'entity/User/slice/UserSlice'
import { useDispatch, useSelector, useStore } from 'react-redux'

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()