import { configureStore } from '@reduxjs/toolkit'
import galleryReducer from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    gallery: galleryReducer
  },
})

