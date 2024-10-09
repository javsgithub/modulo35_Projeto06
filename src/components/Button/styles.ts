import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  color: ${(props) => (props.size === 'big' ? colors.pink3 : colors.pink1)};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  background-color: ${(props) =>
    props.size === 'big' ? colors.pink1 : colors.pink3}};
  border: none;
  cursor: pointer;
  text-align: center;
`
export const ButtonLink = styled(Link)<Omit<Props, 'type'>>`
  color: ${(props) => (props.size === 'big' ? colors.pink3 : colors.pink1)};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  background-color: ${(props) =>
    props.size === 'big' ? colors.pink1 : colors.pink3};
  border: none;
  cursor: pointer;
  text-decoration: none;
  line-height: 16px;
  text-align: center;
`
