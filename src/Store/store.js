import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Slices/appSlice";
import coursesSlice from "./Slices/coursesSlice";
import courseSlice from "./Slices/courseSlice";
import staticDataSlice from "./Slices/staticDataSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        courses: coursesSlice,
        course: courseSlice,
        staticData: staticDataSlice
    }
});