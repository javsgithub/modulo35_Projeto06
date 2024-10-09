import Button from '../Button'

import { Description, DishContainer, Title } from './styles'

export type Props = {
  image: string
  title: string
  description: string
}

const Dish = ({ image, title, description }: Props) => (
  <DishContainer>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button
      type="link"
      to="/first-restaurant"
      title="Clique para ver as opções deste restaurante"
      size="big"
      style={{ display: 'block' }}
    >
      Adicionar ao carrinho
    </Button>
  </DishContainer>
)

export default Dish
