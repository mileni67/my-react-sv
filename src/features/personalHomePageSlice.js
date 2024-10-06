import { createSlice } from "@reduxjs/toolkit";

const personalHomePageSlice = createSlice({
  name: "personalHomePage",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    fetchRepositories: () => ({
      status: "loading",
      repositories: null,
    }),
    fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
      status: "success",
      repositories,
    }),
    fetchRepositoriesError: () => ({
      status: "error",
      repositories: null,
    }),
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = personalHomePageSlice.actions;

const selectPersonalHomePageState = (state) => state.personalHomePage;

export const selectRepositories = (state) =>
  selectPersonalHomePageState(state).repositories;

export const selectRepositoriesStatus = (state) => {
  const stateSlice = selectPersonalHomePageState(state);
  return stateSlice ? stateSlice.status : undefined;
};

export default personalHomePageSlice.reducer;
