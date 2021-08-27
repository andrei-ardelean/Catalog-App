import Product from "../../interfaces"
import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const addProduct = (product: Product) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_PRODUCT,
      payload: product
    })
  }
}

export const deleteProduct = (_id: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DELETE_PRODUCT,
      payload: _id
    })
  }
}