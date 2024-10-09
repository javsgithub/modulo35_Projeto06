import { HeaderBar, HeroContainer, Logo } from './styles'
import logo from '../../assets/images/logo.png'
import { MainContainer } from '../../styles'
import HomeButton from '../HomeButton'

type Props = {
  to?: '/'
}

const Header = ({ to }: Props) => (
  <HeroContainer>
    <MainContainer>
      <HeaderBar>
        <HomeButton
          type="link"
          to="/"
          title="Clique para retornar à página principal"
        >
          Restaurantes
        </HomeButton>
        <Logo src={logo} alt="Efood" />
        <b>
          <span>0</span>&nbsp;<span>produtos(s) no carrinho</span>
        </b>
      </HeaderBar>
    </MainContainer>
  </HeroContainer>
)

export default Header
