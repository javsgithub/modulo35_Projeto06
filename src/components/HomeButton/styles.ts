import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  cursor: pointer;
  color: ${colors.pink3};
  font-size: 18px;
  font-weight: 900;
`
export const ButtonLink = styled(Link)<Omit<Props, 'type'>>`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.pink3};
  font-size: 18px;
  font-weight: 900;
`
