import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = `https://connections-api.goit.global/`;

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const wipeAuthHeader = () => {
  axios.defaults.headers.common.Authorization = ``;
};
// Name > RottenPears
// Email > rottenPears@gmail.com
// Pwd > rottenPears

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", user);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
      // thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (loginData, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", loginData);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
      // thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    wipeAuthHeader();
  } catch (error) {
    throw new Error(error.message);
    // thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const currentToken = state.auth.token;

      setAuthHeader(currentToken);
      const response = await axios.get("/users/current");

      return response.data;
    } catch (error) {
      throw new Error(error.message);
      // thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      return thunkAPI.getState().auth.token !== null;
    },
  }
);
