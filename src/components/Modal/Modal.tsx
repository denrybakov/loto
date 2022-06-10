import React, { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Text } from '../Text';

interface IModalProps {
  children: ReactNode
  title: string
  isWin?: boolean
  onClose?: () => void
}

export function Modal({ title, children, isWin, onClose }: IModalProps) {
  const node = document.querySelector('#modal')
  const ref = useRef<HTMLDivElement>(null)

  if (!node) return null

  const onCloseModal = (e: any) => {
    if (e.target && !(ref.current?.contains(e.target))) {
      onClose?.()
    }
  }

  return (
    createPortal((
      <div className='modal' onClick={onCloseModal}>
        <div className={`modal__block ${isWin ? 'win' : null} `} ref={ref}>
          <Text
            As={'h2'}
            children={title}
            size={22}
            bold
          />
          {children}
        </div>
      </div>
    ), node)
  )
}
