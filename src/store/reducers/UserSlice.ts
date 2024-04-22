import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id?: number;
  userId?: number;
  title: string;
  body: string;
}

const initialState: User = {
  id: undefined,
  userId: undefined,
  title: "",
  body: ""
};

export type stateUser = User;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateItem(state = initialState, action: PayloadAction<User>) {
        if (state.id === action.payload.id) {
          return {
            id: action.payload.id,
            userId: action.payload.userId,
            title: action.payload.title,
            body: action.payload.body,
          };
        } else {
          return state;
        }
    },
    removeItemTo(state = initialState, action: PayloadAction<User>) {
        if (state.id !== action.payload.id) {
          return {
            ...state,
          };
        }
    },
    addItem(state = initialState, action: PayloadAction<User>) {
      state = {...action.payload};
      return state
    },
  },
});

export const userSelector = (state: { user: stateUser }) => state.user;
export const { addItem, removeItemTo, updateItem } = userSlice.actions;
export default userSlice.reducer;
