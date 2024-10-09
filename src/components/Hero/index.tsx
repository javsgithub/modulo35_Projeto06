import { Container, HeroContainer, Logo } from './styles'

import logo from '../../assets/images/logo.png'

const Hero = () => (
  <HeroContainer>
    <Container>
      <Logo src={logo} alt="Efood" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </Container>
  </HeroContainer>
)

export default Hero
