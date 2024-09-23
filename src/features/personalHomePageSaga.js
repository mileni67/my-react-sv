import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./personalHomePageApi";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./personalHomePageSlice";

const loadingDelay = 2_000;

function* fetchRepositoriesHandler({ payload: username }) {
  try {
    yield delay(loadingDelay);
    const repositories = yield call(getRepositories, username);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield put(fetchRepositoriesError());
  }
}

export function* personalHomePageSaga() {
  yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}
