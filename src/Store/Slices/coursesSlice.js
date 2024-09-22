import { endpoints } from "../../Api/endpoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GET_COURSES_API = createAsyncThunk("courses/GET_COURSES_API", async () => {
    const response = await fetch(`${endpoints.BASE_URL}${endpoints.COURSES}?populate=*`);
    return await response.json();
});

const coursesSlice = createSlice({
    name: "courses",
    initialState: {
        coursesData: {
            data: [],
            meta: null
        },
        loading: true,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(GET_COURSES_API.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(GET_COURSES_API.fulfilled, (state, action) => {
            state.loading = false;
            state.coursesData = action.payload;
        });
        builder.addCase(GET_COURSES_API.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default coursesSlice.reducer;