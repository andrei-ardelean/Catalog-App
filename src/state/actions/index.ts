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

export type Action = AddAction | DeleteAction;