import bannerImg from '../../assets/images/banner_ItalianFood.png'
import { MainContainer } from '../../styles'
import { Category, Image, RestaurantName } from './styles'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <MainContainer>
      <Category>Italiana</Category>
      <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
    </MainContainer>
  </Image>
)

export default Banner
