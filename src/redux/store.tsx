import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { activityInfoReducer } from "./reducers/activityInfoReducer";

const store = configureStore({
	reducer: {
		activityInfo: activityInfoReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
