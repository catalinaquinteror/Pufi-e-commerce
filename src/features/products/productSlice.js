import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rain from "../../img/rain.jpg";
import puff from "../../img/puff.webp";
import cart from "../../img/cart.jpg";
import nap from "../../img/nap.jpg";
import "../../App.scss";

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=36limit=9');
    const formattedResponse = await response.json();
    return formattedResponse
  }
);

// const initialState = [
//   {
//     id: "one",
//     title: "Pufi RAIN",
//     divider: "⎻⎻⎻⎻⎻⎻⎻⎻⎻⎻",
//     description: "Descripción del producto. Este es un texto simulado",
//     image: [<img src={rain} alt=""/>]
//   },
//   {
//     id: "two",
//     title: "Pufi Puff",
//     description: "Descripción del producto. Este es un texto simulado",
//     image: [<img src={cart} alt=""/>]
//   },
//   {
//     id: "three",
//     title: "Pufi CART",
//     description: "Descripción del producto. Este es un texto simulado",
//     image: [<img src={puff} alt=""/>]
//   },
//   {
//     id: "four",
//     title: "Pufi NAP",
//     description: "Descripción del producto. Este es un texto simulado",
//     image: [<img src={nap} alt=""/>]
//   },
// ];

export const gallerySlice = createSlice({
    name: "gallery",
    initialState: {
      photos: [],
      isLoading: false,
    },
    extrareducers: {
      [getPhotos.pending]: (state) => {
        state.isLoading = true;
      },
      [getPhotos.fulfilled]: (state, action) =>{
        state.photos = action.payload;
        state.isLoading = false
      },
      [getPhotos.rejected]: (state) => {
        state.isLoading = false
      }
    },
  });

// export const productSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
// });

export default gallerySlice.reducer;
