import { IRandomField_1 } from '../actions/randomField_1'
import * as TYPES from '../types'

export const random_1_Reducer = (state = [], {type, payload}: IRandomField_1) => {
  switch(type) {
    case TYPES.GET_RANDOM_FIELD_1:
      return payload
    default:
      return state
  }
}
