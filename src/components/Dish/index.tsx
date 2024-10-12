import { Description, DishContainer, Title } from './styles'
import Button from '../Button'

type Props = {
  image: string
  title: string
  description: string
}

const Dish = ({ image, title, description }: Props) => {
  return (
    <DishContainer>
      <img src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button
        type="link"
        to="/first-restaurant"
        title="Clique para saber mais sobre este prato"
        size="big"
        style={{ display: 'block' }}
      >
        Adicionar ao carrinho
      </Button>
    </DishContainer>
  )
}

export default Dish
