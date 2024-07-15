import axios from 'axios';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
const url = "https://my-json-server.typicode.com/Harshh-singh/dummy-ecommerce-api/blob/main/products/";

const initialState = {
    products:[],
    loading:false,
    error:null
}

const ProductSlice = createSlice({
    name:"product",
    initialState:initialState,
    reducers:{},
    extraReducers:builder=>{
        builder
        .addCase(getProductsAsync.fulfilled,(state,action)=>{
            state.products=action.payload;
        })
    }
})

//getting all products from api
export const getProductsAsync = createAsyncThunk(
    "products/get",
    async(_,{rejectWithValue})=>{
        try {
            const res = await axios.get(url);
            return res.data;
        }catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const productReducer = ProductSlice.reducer;
export const productActions = ProductSlice.actions;
export const productSelector = (state)=>state.productReducer;