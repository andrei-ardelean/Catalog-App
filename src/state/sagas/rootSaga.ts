import { takeEvery, takeLatest } from "@redux-saga/core/effects";
import { ActionType } from "../action-types";
import { handleFetchProductsName } from "./handlers/product";

export function* watcherSaga() {
  yield takeEvery(ActionType.ADD_NAME, handleFetchProductsName);
}