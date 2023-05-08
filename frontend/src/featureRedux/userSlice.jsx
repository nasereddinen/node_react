import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfos: null,
  token: null,
  firstName: null,
  lastName: null,
  username: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginInfos: (state, action) => {
      state.loginInfos = action.payload;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
    setUserFirstName: (state, action) => {
      state.firstName = action.payload;
      localStorage.setItem("firstName", action.payload);
      
    },
    setUserLastName: (state, action) => {
      state.lastName = action.payload;
      
    },
    setUsername: (state, action) => {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
    setLogout: (state) => {
      state.loginInfos = null;
      localStorage.removeItem("token");
      localStorage.removeItem("firstName");
      localStorage.removeItem("username");
      
  state.token = null;
  state.firstName = null;
  state.lastName = null;
  state.username = null;
    },
  },
});

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export const {
  setLoginInfos,
  setUserToken,
  setUserFirstName,
  setUserLastName,
  setUsername,
  setLogout,
} = userSlice.actions;
