import React, { ReactNode } from 'react';

interface ICardProps {
  children: ReactNode
}

export function Card({ children }: ICardProps) {
  return (
    <section className={'card'}>
      {children}
    </section>
  );
}
