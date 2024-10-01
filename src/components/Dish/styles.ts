import styled from 'styled-components'
import { colors } from '../../styles'

export const DishContainer = styled.section`
  width: 472px;
  height: 398px;
  background-color: ${colors.white};
  // position: relative;

  img {
    display: block;
    width: 100%;
  }

  .info {
    padding: 8px;
    background-color: ${colors.white};
    color: ${colors.pink3};
    border: 1px solid ${colors.pink3};

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`
export const Tittle = styled.h3`
  width: 92px;
  height: 21px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
`
export const GradeContainer = styled.div`
  width: 55px;
  height: 21px;
  display: flex;
  align-items: center;

  span {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    text-align: center;
  }

  img {
    height: 21px;
    margin-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin: 16px 0 16px;
  // color: ${colors.pink3};
  // background-color: ${colors.pink3}
`
export const Button = styled.button`
  width: 82px;
  height: 24px;
  color: ${colors.pink1};
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  text-aligh: center;
  padding: 4px 6px;
  background-color: ${colors.pink3};
  border: none;
  cursor: pointer;
`
