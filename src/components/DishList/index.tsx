import Restaurant from '../../models/Restaurant'
import { Dishes, Modal } from './styles'
import Dish from '../Dish'

import pizza from '../../assets/images/pizza.png'
import Product from '../Product'
import { MainContainer } from '../../styles'

type Props = {
  dishes: Restaurant[]
  title: string
}

const DishList = ({ dishes }: Props) => {
  return (
    <>
      <Dishes>
        {dishes.map((dish) => (
          <Dish
            key={dish.id}
            image={dish.image}
            title={dish.title}
            description={dish.description}
          />
        ))}
      </Dishes>
      <Modal>
        <MainContainer>
          <Product
            image={pizza}
            title="teste"
            description="blabalblablablablbalabl"
          />
        </MainContainer>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default DishList
