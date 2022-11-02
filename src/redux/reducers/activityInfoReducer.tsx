import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  userInfo: userInfoType;
  phoneInfo: phoneInfoType;
};
export type userInfoType = {
  phoneNumber?: string;
  fullName?: string;
  email?: string;
  privacyAccept?: boolean;
  areaCode?: string;
  accepted?: boolean;
};
type phoneInfoType = {
  model?: string;
  type?: string;
  memory?: string;
  quantity?: number;
  color?: string;
  price?: number;
};
const initialState: initialStateType = {
  userInfo:
    JSON.parse(window.sessionStorage.getItem("userInfo") as string) ?? null,
  phoneInfo:
    JSON.parse(window.sessionStorage.getItem("phoneInfo") as string) ?? null,
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
