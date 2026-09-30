import {configureStore} from '@reduxjs/toolkit'
import postReducers from './postSlice'


const store = configureStore({
    reducer :{
        posts : postReducers
    }
})

export default store