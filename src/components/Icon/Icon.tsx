import { IconError } from './errorIcon';
import { Magic } from './magic';

export enum EIcon {
  magic = 'magic',
  error = 'error'
}

interface IIconProps {
  type: EIcon
  width?: number
  height?: number
}

export function Icon({ type, width, height }: IIconProps): JSX.Element {
  switch (type) {
    case EIcon.magic:
      return <Magic width={width} height={height} />
    default:
      return <IconError />
  }
}
