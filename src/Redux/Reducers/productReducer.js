import axios from 'axios';
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { db } from '../../firebase';
import {toast} from "react-toastify";
import { addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';
const url = "https://my-json-server.typicode.com/Harshh-singh/dummy-ecommerce-api/blob/main/products/";


const initialState = {
    totalCartItems:0,
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

        .addCase(totalCartItemsAsync.fulfilled,(state,action)=>{
            state.totalCartItems=action.payload;
            state.loading=false;
        })
        .addCase(totalCartItemsAsync.pending,(state)=>{
            state.loading=true;
        })
        .addCase(totalCartItemsAsync.rejected,(state,action)=>{
            state.error=action.payload
            state.loading=false;
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
            const cart = await getDocs(collection(db,"Cart"));
            let itemExists = false;
            cart.forEach((item)=>{
                if (item.data().id===product.id) {
                    itemExists=true;
                    const productId=item.id;
                    const currentQuantity=item.data().quantity;
                    const cartItemRef=doc(db,"Cart",productId);
                     updateDoc(cartItemRef,{
                        quantity:currentQuantity+1,
                     })
                     toast.success("Added to Cart");
                }
            });
            if(!itemExists){
                await addDoc(collection(db,"Cart"), {
                    id:product.id,
                    description:product.description,
                    image:product.image,
                    name:product.name,
                    price:product.price,
                    quantity:1
                })
                toast.success("Added to Cart");
            }
            
        } catch (error) {
            toast.error("Error adding to cart");
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
            return rejectWithValue(error);
        }
    }   
)
// get no of Items in cart
export const totalCartItemsAsync=createAsyncThunk(
    "products/totalCartItems",
    async(_,{rejectWithValue})=>{
        try {
            const querySnapshot = await getDocs(collection(db,"Cart"));
            let noOfItems=0;
            querySnapshot.forEach((doc)=>{
                noOfItems+=doc.data().quantity
            })
            return noOfItems;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const productReducer = ProductSlice.reducer;
export const productActions = ProductSlice.actions;
export const productSelector = (state)=>state.productReducer;