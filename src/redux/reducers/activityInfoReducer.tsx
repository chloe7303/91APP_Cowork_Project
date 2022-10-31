import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
	userInfo: userInfoType;
	phoneInfo: phoneInfoType;
};
type userInfoType = {
	phoneNumber?: string;
	fullName?: string;
	email?: string;
	privacyAccept?: boolean;
};
type phoneInfoType = {
	itemName?: string;
	itemType?: string;
	quantity?: number;
	price?: number;
};
const initialState: initialStateType = {
	userInfo:
		JSON.parse(window.localStorage.getItem("userInfo") as string) ?? null,
	phoneInfo:
		JSON.parse(window.localStorage.getItem("phoneInfo") as string) ?? null,
};

const activityInfoSlice = createSlice({
	name: "activityInfo",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.userInfo = action.payload.userInfo;
		},
		setPhoneInfo: (state, action) => {
			state.phoneInfo = action.payload.phoneInfo;
		},
	},
});

const activityInfoReducer = activityInfoSlice.reducer;
const activityInfoActions = activityInfoSlice.actions;

export { activityInfoReducer, activityInfoActions };
