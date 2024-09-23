import { all } from "redux-saga/effects";
import { personalHomePageSaga } from "../features/personalHomePageSaga";

export default function* saga() {
  yield all([personalHomePageSaga()]);
}
