import { ISelectedField } from '../actions/selectedField'
import * as TYPES from '../types'



export const selected_1_Reducer = (state = [], {type, payload}: ISelectedField) => {
  switch(type) {
    case TYPES.ADD_NUM:
      return [...state, payload]
    case TYPES.REMOVE_NUM:
      return state.filter((itemNum: number) => itemNum !== payload)
    default:
      return state
  }
}
