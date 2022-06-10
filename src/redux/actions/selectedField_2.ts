import { Dispatch } from 'react'
import {ActionCreator, AnyAction} from 'redux'
import * as TYPES from '../types'

type TType = typeof TYPES.ADD_NUM_2 | typeof TYPES.REMOVE_NUM_2

export interface ISelectedField_2 {
  type: TType,
  payload: number
}

export const actionAddNum_2: ActionCreator<AnyAction | ISelectedField_2> = (value: number) => ({
  type: TYPES.ADD_NUM_2,
  payload: value
})

export const actionRemoveNum_2: ActionCreator<AnyAction | ISelectedField_2> = (value: number) => ({
  type: TYPES.REMOVE_NUM_2,
  payload: value
})

export const addNum_2: any = (num: any) => (dispatch: Dispatch<ISelectedField_2 | any>) => {
  // axios.post('/companies/12/image', data, {
  //   headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
  // })
  // .then(res => {
  //   console.log('axios data', res.data)
  //   dispatch(actionUpdateImg(res.data))
  // })
  // .catch(console.log)
  dispatch(actionAddNum_2(num))
}

export const removeNum_2: any = (num: any) => (dispatch: Dispatch<ISelectedField_2 | any>) => {
  dispatch(actionRemoveNum_2(num))
}
