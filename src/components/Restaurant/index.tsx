import estrela from '../../assets/images/estrela.png'
import Button from '../Button'

import {
  Description,
  InfoTags,
  RateContainer,
  RestaurantContainer,
  Title
} from './styles'
import Tag from '../Tag'

export type Props = {
  image: string
  title: string
  rate: number
  description: string
  infoTags: string[]
}

const Restaurant = ({ image, title, rate, description, infoTags }: Props) => (
  <RestaurantContainer>
    <img src={image} alt={title} />
    <InfoTags>
      {infoTags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </InfoTags>
    <div className="info">
      <div className="title-rate">
        <Title>{title}</Title>
        <RateContainer>
          <span>{rate}</span>
          <img src={estrela} alt="estrela" />
        </RateContainer>
      </div>
      <Description>{description}</Description>
      <Button
        type="link"
        to="/first-restaurant"
        title="Clique para ver as opções deste restaurante"
        style={{ width: '82px' }}
      >
        Saiba mais
      </Button>
    </div>
  </RestaurantContainer>
)

export default Restaurant
