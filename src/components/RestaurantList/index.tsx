import Restaurant from '../../models/Restaurant'
import Rest from '../Restaurant'
import { Restaurants } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Restaurants>
    {restaurants.map((restaurant) => (
      <Rest
        key={restaurant.id}
        image={restaurant.image}
        title={restaurant.title}
        rate={restaurant.rate as number}
        description={restaurant.description}
        infoTags={restaurant.infoTags as string[]}
      />
    ))}
  </Restaurants>
)

export default RestaurantList
