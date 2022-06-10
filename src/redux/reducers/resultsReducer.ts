import { IResults } from '../actions/results'
import * as TYPES from '../types'

export const resultsReducer = (state = {}, {type, payload}: IResults) => {
  switch(type) {
    case TYPES.RESULTS:
      return {...payload}
    default:
      return state
  }
}
