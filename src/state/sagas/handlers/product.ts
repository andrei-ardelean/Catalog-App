import { call, put } from "@redux-saga/core/effects";
import { Action } from "../../actions";
import { fetchProductsName } from "../requests/product";

export interface ResponseGenerator{
  config?:any,
  data?:any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string,
  results?:any
}

export function* handleFetchProductsName(action: Action) {
  try {
    const response:ResponseGenerator = yield call(fetchProductsName);
    console.log(response);

    //yield put()
  }
  catch (error: any) {
    console.log(error);
  }
}