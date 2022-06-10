import { combineReducers } from "redux"
import { random_1_Reducer } from "./random_1_Reducer"
import { random_2_Reducer } from "./random_2_Reducer"
import { resultsReducer } from "./resultsReducer"
import { selected_1_Reducer } from "./selected_1_Reducer"
import { selected_2_Reducer } from "./selected_2_Reducer"

export const rootReducer = combineReducers({
  selectedField: selected_1_Reducer,
  selectedSecondField: selected_2_Reducer,
  randomField_1: random_1_Reducer,
  randomField_2: random_2_Reducer,
  results: resultsReducer
})
