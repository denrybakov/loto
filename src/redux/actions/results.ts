import { Dispatch } from 'react'
import {ActionCreator, AnyAction} from 'redux'
import axios from 'axios'
import * as TYPES from '../types'

type TType = typeof TYPES.RESULTS

export interface IResults {
  type: TType,
  payload: object
}

export const actionResults: ActionCreator<AnyAction | IResults> = (value: number[]) => ({
  type: TYPES.RESULTS,
  payload: value
})

export const postResults: any = (data: object) => (dispatch: Dispatch<IResults | any>) => {
  console.log(data);
  axios.post('https://yandex.ru/', data)
  .then(res => console.log('Ответ успешен'))
  .catch(err => console.log('Ошибка ', err.response))
  actionResults(data)
}

