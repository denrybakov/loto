import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNum, removeNum } from '../../redux/actions/selectedField';



interface IButtonNumProps {
  text: string
  name: string
  active: boolean
  disabled?: boolean
  onClick?: (e: any, value: boolean) => void
}

const VOID_FUNC = () => { }

export function ButtonNum({ text, name, active, disabled, onClick = VOID_FUNC }: IButtonNumProps) {
  const [isActive, setActive] = useState<boolean>(false)
  const dispatch = useDispatch()

  const toggleActive = (e: any) => {
    setActive(!isActive)
    onClick(e, isActive)
  }
  return (
    <span className={'spanBtn'}>
      <button
        className={`btn ${isActive ? 'active' : ''}`}
        onClick={toggleActive}
        name={name}
        disabled={!isActive && disabled ? true : false}
      >
        {text}
      </button>
    </span>
  );
}
