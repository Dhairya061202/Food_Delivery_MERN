import { createReducer } from '@reduxjs/toolkit';

export const authReducer = createReducer(
  {},
  (builder) => {
    builder
      .addCase('loadUserRequest', (state) => {
        state.loading = true;
      })
      .addCase('loadUserSuccess', (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase('loadUserFail', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })

      .addCase('logoutRequest', (state) => {
        state.loading = true;
      })
      .addCase('logoutSuccess', (state,action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.message=action.payload
        state.user = null;
      })
      .addCase('logoutFail', (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase('clearError', (state) => {
        state.error = null;
      })
      .addCase('clearMessage', (state) => {
        state.message = null;
      });
  }
);
