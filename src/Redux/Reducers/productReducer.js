import axios from 'axios';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { db } from '../../firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';
const url = "https://my-json-server.typicode.com/Harshh-singh/dummy-ecommerce-api/blob/main/products/";


const initialState = {
    products:[],
    cartItems:[],
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
            state.loading = false;
        })
        .addCase(getProductsAsync.pending,(state)=>{
            state.loading=true;
        })
        .addCase(getProductsAsync.rejected,(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        })

        .addCase(getFromDbAsync.fulfilled,(state,action)=>{
            state.cartItems=action.payload;
            state.loading=false;
        })
        .addCase(getFromDbAsync.pending,(state)=>{
            state.loading=true;
        })
        .addCase(getFromDbAsync.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
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

//adding product to cart in firestore db
export const addToCartAsync = createAsyncThunk(
    "products/addToCart",
    async(product,{rejectWithValue})=>{
        try {
            const docRef = await addDoc(collection(db, "Cart"), {
                name:product.name,
                price: product.price,
                description:product.description,
                id:product.id,
                image:product.image
            });
            console.log(docRef);
        } catch (error) {
            console.log(rejectWithValue(error));
            return rejectWithValue(error);
        }
    }
);

// get all products from our db
export const getFromDbAsync = createAsyncThunk(
    "products/getFromDb",
    async(_,{rejectWithValue})=>{
        try {
            const querySnapshot = await getDocs(collection(db,"Cart"));
            const items = []; 
            querySnapshot.forEach((doc) => {
                items.push({...doc.data()});
              });
              return items;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error);

        }
    }   
)

export const productReducer = ProductSlice.reducer;
export const productActions = ProductSlice.actions;
export const productSelector = (state)=>state.productReducer;