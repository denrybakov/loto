import { ISelectedField_2 } from '../actions/selectedField_2'
import * as TYPES from '../types'



export const selected_2_Reducer = (state = [], {type, payload}: ISelectedField_2) => {
  switch(type) {
    case TYPES.ADD_NUM_2:
      return [...state, payload]
    case TYPES.REMOVE_NUM_2:
      return state.filter((itemNum: number) => itemNum !== payload)
    default:
      return state
  }
}
