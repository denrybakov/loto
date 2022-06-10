import { Dispatch } from 'react'
import {ActionCreator, AnyAction} from 'redux'
import { generateRandowArr } from '../../utils/generateRandomArr'
import * as TYPES from '../types'

type TType = typeof TYPES.GET_RANDOM_FIELD_1 

export interface IRandomField_1 {
  type: TType,
  payload: number
}

export const actionGetRandomField_1: ActionCreator<AnyAction | IRandomField_1> = (value: number[]) => ({
  type: TYPES.GET_RANDOM_FIELD_1,
  payload: value
})

export const getRandomField_1: any = (arr: number[]) => (dispatch: Dispatch<IRandomField_1 | any>) => {
  dispatch(
    actionGetRandomField_1(generateRandowArr(8))
  )
}


