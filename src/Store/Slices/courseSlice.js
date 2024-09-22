import { endpoints } from "../../Api/endpoints";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const GET_COURSE_API = createAsyncThunk("course/GET_COURSE_API", async (queryData) => {

    const { courseId } = queryData;

    const response = await fetch(`${endpoints.BASE_URL}${endpoints.COURSES}/${courseId}?populate=*`);
    return await response.json();
});

const courseSlice = createSlice({
    name: "course",
    initialState: {
        courseData: {
            data: {
                id: null,
                attributes: {}
            },
            meta: null
        },
        loading: true,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(GET_COURSE_API.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(GET_COURSE_API.fulfilled, (state, action) => {
            state.loading = false;
            state.courseData = action.payload;
        });
        builder.addCase(GET_COURSE_API.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export default courseSlice.reducer;