import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
  size?: 'small' | 'big'
  style?: React.CSSProperties
}

const Button = ({
  type,
  title,
  to,
  onClick,
  children,
  size = 'small',
  style
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
        style={style}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink title={title} to={to as string} size={size} style={style}>
      {children}
    </ButtonLink>
  )
}

export default Button
