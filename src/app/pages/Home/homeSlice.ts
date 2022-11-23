/* eslint-disable */

import {createSlice} from "@reduxjs/toolkit";
import { IHomeState } from "./types";

const initialState: IHomeState = {
    
   charactersList: null
}

const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setCharactersList(state, action){
            state.charactersList = action.payload
        }  
    }
    
});



export const {setCharactersList} = HomeSlice.actions;// RTK creates actions with type and payload based on the reducers created in slice
export default HomeSlice.reducer;