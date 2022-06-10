import { combineReducers } from "redux"
import { selected_1_Reducer } from "./selected_1_Reducer"
import { selected_2_Reducer } from "./selected_2_Reducer"

export const rootReducer = combineReducers({
  selectedField: selected_1_Reducer,
  selectedSecondField: selected_2_Reducer,
})
