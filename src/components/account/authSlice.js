import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const AUTH_TOKEN = 'auth-token';

let paramToken;

let updateParamToken = (token) => {
  paramToken = { params: { token } };
}

updateParamToken(localStorage.getItem('auth-token'))

export const SignIn = createAsyncThunk(
  'auth/login',
  async (userInfo, { rejectWithValue }) => {
    try {
      const { username, password } = userInfo;
      const res = await axios.post('/login', { username, password });
      if (res.statusText !== 'OK') {
        throw new Error('server error');
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProfile = createAsyncThunk(
  'auth/profile',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/profile', paramToken);
      console.log(res)
      if (res.statusText !== 'OK') {
        throw new Error('server error');
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuth: !!localStorage.getItem(AUTH_TOKEN),
    status: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      console.log('removing')
      localStorage.removeItem(AUTH_TOKEN);
    },
  },
  extraReducers: {
    [SignIn.pending]: (state) => {
      state.status = 'loading';
      state.errors = null;
    },
    [SignIn.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.isAuth = true; 
      state.user = jwt_decode(action.payload.token).user
      localStorage.setItem(AUTH_TOKEN, action.payload.token);
    },
    [SignIn.rejected]: (action) => {
      console.log(action.payload);
    },
    [getProfile.pending]: (state) => {
      state.status = 'loading';
      state.errors = null;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.user = action.payload
    },
    [getProfile.rejected]: (action) => {
      console.log(action.payload);
    },
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
