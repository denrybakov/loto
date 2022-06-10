import { IRandomField_2 } from '../actions/randomField_2'
import * as TYPES from '../types'

export const random_2_Reducer = (state = [], {type, payload}: IRandomField_2) => {
  switch(type) {
    case TYPES.GET_RANDOM_FIELD_2:
      return payload
    default:
      return state
  }
}
