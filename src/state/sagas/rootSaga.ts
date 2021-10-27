import { takeEvery } from "@redux-saga/core/effects";
import { ActionType } from "../action-types";
import { handleFetchProductsName } from "./handlers/product";
import { StrictEffect } from "@redux-saga/types";

export function* watcherSaga(): Generator<StrictEffect> {
  yield takeEvery(ActionType.GET_NAME, handleFetchProductsName);
}