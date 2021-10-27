import Product from "../../interfaces";
import { ActionType } from "../action-types";

export interface AddAction {
  type: ActionType.ADD_PRODUCT;
  payload: Product;
}

export interface DeleteAction {
  type: ActionType.DELETE_PRODUCT;
  payload: string;
}

export interface EditAction {
  type: ActionType.EDIT_PRODUCT;
  payload: Product;
}

export interface AddNameAction {
  type: ActionType.ADD_NAME;
  payload: string[];
}

export interface GetNameAction {
  type: ActionType.GET_NAME;
  payload: number;
}

export type Action = AddAction | DeleteAction | EditAction | AddNameAction | GetNameAction;
