import { Logo } from '../Hero/styles'
import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <Logo src={logo} alt="Efood" />
    <S.SocialMediaContainer>
      <img src={instagram} alt="instagram" />
      <img src={facebook} alt="facebook" />
      <img src={twitter} alt="facebook" />
    </S.SocialMediaContainer>
    <S.Paragraph>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Paragraph>
  </S.FooterContainer>
)

export default Footer
