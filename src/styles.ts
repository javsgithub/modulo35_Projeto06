import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  pink1: '#FFF8F2',
  pink2: '#FFEBD9',
  pink3: '#E66767'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.pink1}
  }
`
export const MainContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 80px auto 0;
`

export default GlobalCss
