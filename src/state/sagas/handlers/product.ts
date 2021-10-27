import { call, put } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { ActionType } from "../../action-types";
import { GetNameAction } from "../../actions";
import { fetchProductsName } from "../requests/product";

export function* handleFetchProductsName(action: GetNameAction) {
  try {
    const response: AxiosResponse = yield call(fetchProductsName, action.payload);
    const { data }: any = response;
    console.log('after call');
    
    const names: string[] = [];
    data.results.map((user: any) => {
      names.push(user.name.first);
      console.log(user.name.first)
      return user.name.first;
    });

    yield put({type: ActionType.ADD_NAME, payload: names});
    console.log('after put');

  } catch (error: any) {
    console.log(error);
  }
  finally {
    console.log('worker ends');
  }
}
