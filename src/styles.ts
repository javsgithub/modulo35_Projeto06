import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  pink1: '#FFF8F2',
  pink2: '#FFEBD9',
  pink3: '#E66767'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    width: 1366px;
    height: 2148px;
    background-color: ${colors.pink1}
  }
`
export const MainContainer = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 0;
`

export default GlobalCss
