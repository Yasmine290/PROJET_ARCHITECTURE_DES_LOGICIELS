// redux/userSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/user';
import { RootState } from './store';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const selectUser = (state: RootState) => state.user.user;

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
