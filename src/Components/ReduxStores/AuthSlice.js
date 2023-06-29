import {createSlice} from '@reduxjs/toolkit'
import { getRequest, postRequest } from '../../axios'

const local_tokens = {
    access_token: localStorage.getItem('access_token'),
    refresh_token: localStorage.getItem('refresh_token')
}


const initialState = {
    token:local_tokens.access_token?local_tokens:null,
    isAuthenticated: local_tokens.access_token?true:false,
    userDetails: {}
}

export const authSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        authSuccess:(state,action)=>{
            state.token = action.payload
            state.isAuthenticated = true
        },
        authFail:(state)=>{
            state = initialState;
        },
        setUser:(state,action)=>{
            state.userDetails = action.payload
        }
    }
})


export const {authSuccess,authFail,setUser} = authSlice.actions;


export const loginAction = (data) => async (dispatch)=>{
    try {
        const response = await postRequest('login/',data)
        const token = {
            access_token: response.data.access,
            refresh_token: response.data.refresh
        }
        localStorage.setItem('access_token',response.data.access);
        localStorage.setItem('refresh_token',response.data.refresh);
        dispatch(authSuccess(token))
    } catch (error) {
        dispatch(authFail)
        throw error
    }
}


export const RefreshTokens = (refresh_token)=> async (dispatch)=>{
    console.log("inside refresh token ");
    try {
        const response = await postRequest('login/refresh/',{refresh:refresh_token})
        const token = {
            access_token: response.data.access,
            refresh_token: refresh_token
        }
        localStorage.setItem('access_token',response.data.access);
        localStorage.setItem('refresh_token',refresh_token);
        dispatch(authSuccess(token))
    } catch (error) {
        dispatch(authFail);
        throw error
    }
}

export const getUserDetails = (token)=> async (dispatch)=>{
    console.log("inside get user details");
    try {
        const response = await getRequest('accounts/user_details',token.access_token)
        dispatch(setUser(response.data))
    } catch (error) {
        if (error.response?.data.code==="token_not_valid"){
            await dispatch(RefreshTokens(token.refresh_token));
            window.location.reload();
        }else{
          throw error
        }
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token'); 
    dispatch(authFail());
  };


export default authSlice.reducer