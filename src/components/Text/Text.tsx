import React, { ReactNode } from 'react';

type TText = 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TSize = 12 | 14 | 16 | 18 | 20 | 22

export enum EColor {
  black = 'black',
  gray = 'gray',
}

interface ITextProps {
  As: TText
  children: ReactNode
  size?: TSize
  color?: EColor
  uppercase?: boolean
  bold?: boolean
}

export function Text({
  As = 'span',
  children,
  size = 16,
  color,
  uppercase,
  bold
}: ITextProps) {




  return (
    <As
      className={`
        text ${uppercase ? 'uppercase' : ''} ${bold ? 'bold' : ''} s_${size ? size : 16} ${color}
      `}
    >
      {children}
    </As>
  );
}
