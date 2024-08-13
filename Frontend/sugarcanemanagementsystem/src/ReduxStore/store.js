import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import loginSliceReducer from '../slices/loginSliceReducer';

const store=configureStore({
    reducer:{
        login:loginSliceReducer
        }
})

export default store
