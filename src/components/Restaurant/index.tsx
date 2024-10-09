import Button from '../Button'
import Tag from '../Tag'
import * as S from './styles'

import estrela from '../../assets/images/estrela.png'

export type Props = {
  image: string
  title: string
  rate: number
  description: string
  infoTags: string[]
}

const Restaurant = ({ image, title, rate, description, infoTags }: Props) => (
  <S.RestaurantContainer>
    <img src={image} alt={title} />
    <S.InfoTags>
      {infoTags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </S.InfoTags>
    <div className="info">
      <div className="title-rate">
        <S.Title>{title}</S.Title>
        <S.RateContainer>
          <span>{rate}</span>
          <img src={estrela} alt="estrela" />
        </S.RateContainer>
      </div>
      <S.Description>{description}</S.Description>
      <Button
        type="link"
        to="/first-restaurant"
        title="Clique para ver as opções deste restaurante"
        style={{ width: '82px' }}
      >
        Saiba mais
      </Button>
    </div>
  </S.RestaurantContainer>
)

export default Restaurant
