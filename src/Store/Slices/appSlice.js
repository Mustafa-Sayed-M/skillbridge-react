import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navbarMenu: {
            open: false
        }
    },
    reducers: {
        handleNavbarMenuStore: (state, action) => {
            state.navbarMenu.open = action.payload;
        }
    }
});

export default appSlice.reducer;

export const { handleNavbarMenuStore } = appSlice.actions;