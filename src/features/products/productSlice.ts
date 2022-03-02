import { product } from './../../app/models/models';
import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import api_endpoint from "../../app/API/api_endpoint";
import { RootState } from "../../app/store/Configurestore";


const ProductAdapter = createEntityAdapter<product>();


export const getProducts = createAsyncThunk<product[]>(
    'fetch/products',
    async (_, thunkAPI) => {
        try {
            const products = await api_endpoint.products.getproducts();
            return products;
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)



export const productSlice = createSlice({
    name: 'products',
    initialState: ProductAdapter.getInitialState({ loading: 'idle' }),
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = 'idle'
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = 'idle'
            ProductAdapter.setAll(state, action.payload);
        })
    })
})

export const productSelectors = ProductAdapter.getSelectors((state: RootState) => state.products);
