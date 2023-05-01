import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  submissions: [],
};

export const submissionsSlice = createSlice({
  name: "submissions",
  initialState,
  reducers: {
    addSubmission: (state, action) => {
      state.submissions.push(action.payload);
    },
    editSubmission: (state, action) => {
      const index = state.submissions.findIndex(
        (submission) => submission.id === action.payload.id
      );
      if (index !== -1) {
        state.submissions[index] = action.payload;
      }
    },
    deleteSubmission: (state, action) => {
      state.submissions = state.submissions.filter(
        (submission) => submission.id !== action.payload
      );
    },
  },
});

export const { addSubmission, editSubmission, deleteSubmission } =
  submissionsSlice.actions;

export default submissionsSlice.reducer;
