import { Dispatch } from 'react'
import {ActionCreator, AnyAction} from 'redux'
import * as TYPES from '../types'
import axios from 'axios'

type TType = 
  typeof TYPES.ADD_NUM    |
  typeof TYPES.REMOVE_NUM

export interface ISelectedField {
  type: TType,
  payload: number
}

export const actionAddNum: ActionCreator<AnyAction | ISelectedField> = (value: number) => ({
  type: TYPES.ADD_NUM,
  payload: value
})

export const actionRemoveNum: ActionCreator<AnyAction | ISelectedField> = (value: number) => ({
  type: TYPES.REMOVE_NUM,
  payload: value
})

export const addNum: any = (num: any) => (dispatch: Dispatch<ISelectedField | any>) => {
  // axios.post('/companies/12/image', data, {
  //   headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` },
  // })
  // .then(res => {
  //   console.log('axios data', res.data)
  //   dispatch(actionUpdateImg(res.data))
  // })
  // .catch(console.log)
  dispatch(actionAddNum(num))
}

export const removeNum: any = (num: any) => (dispatch: Dispatch<ISelectedField | any>) => {
  dispatch(actionRemoveNum(num))
}
