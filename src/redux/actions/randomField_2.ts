import { Dispatch } from 'react'
import {ActionCreator, AnyAction} from 'redux'
import { generateRandowArr } from '../../utils/generateRandomArr'
import * as TYPES from '../types'

type TType = typeof TYPES.GET_RANDOM_FIELD_2

export interface IRandomField_2 {
  type: TType,
  payload: number
}

export const actionGetRandomField_2: ActionCreator<AnyAction | IRandomField_2> = (value: number[]) => ({
  type: TYPES.GET_RANDOM_FIELD_2,
  payload: value
})

export const getRandomField_2: any = () => (dispatch: Dispatch<IRandomField_2 | any>) => {
  dispatch(
    actionGetRandomField_2(generateRandowArr(2))
  )
}
