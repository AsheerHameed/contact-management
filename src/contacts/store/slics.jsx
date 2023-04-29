import { createSlice } from "@reduxjs/toolkit";

const submissionsSlice = createSlice({
  name: "submissions",
  initialState: [],
  reducers: {
    addSubmission: (state, action) => {
      state.push(action.payload);
    },
    updateSubmission: (state, action) => {
      const index = state.findIndex(
        (submission) => submission.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteSubmission: (state, action) => {
      const index = state.findIndex(
        (submission) => submission.id === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addSubmission, updateSubmission, deleteSubmission } =
  submissionsSlice.actions;
export default submissionsSlice.reducer;
