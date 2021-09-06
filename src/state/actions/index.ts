import Product from "../../interfaces";
import { ActionType } from "../action-types";

interface AddAction {
  type: ActionType.ADD_PRODUCT
  payload: Product
}

interface DeleteAction {
  type: ActionType.DELETE_PRODUCT
  payload: string
}

interface EditAction {
  type: ActionType.EDIT_PRODUCT
  payload: Product
}

interface AddNameAction {
  type: ActionType.ADD_NAME
  payload: string[]
}

export type Action = AddAction | DeleteAction | EditAction | AddNameAction;