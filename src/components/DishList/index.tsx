import Restaurant from '../../models/Restaurant'
import { Dishes } from './styles'
import Rest from '../Restaurant'
import Dish from '../Dish'

type Props = {
  dishes: Restaurant[]
}

const DishList = ({ dishes }: Props) => (
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
)

export default DishList
