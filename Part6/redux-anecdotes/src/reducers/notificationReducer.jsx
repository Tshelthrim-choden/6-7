import { createSlice } from '@reduxjs/toolkit';

let timeoutId;

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
    clearNotification() {
      return '';
    }
  }
});

export const { showNotification, clearNotification } = notificationSlice.actions;

export const showNotification = (message, duration) => {
  return (dispatch) => {
    dispatch(showNotification(message));
    
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      dispatch(clearNotification());
    }, duration * 1000);
  };
};

export default notificationSlice.reducer;
