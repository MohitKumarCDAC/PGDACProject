import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import loginSliceReducer from '../slices/loginSliceReducer';


//create a redux store using the configureStore function from reductoolkit
const store=configureStore({
    reducer:{
        login:loginSliceReducer
        }
})

export default store
