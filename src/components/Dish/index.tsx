import estrela from '../../assets/images/estrela.png'
import {
  Button,
  Description,
  DishContainer,
  GradeContainer,
  Tittle
} from './styles'
import Tag from '../Tag'

type Props = {
  image: string
  // standaut: string
  // category: string
  tittle: string
  rate: number
  description: string
  infoTags: string[]
  action: string
}

const Dish = ({
  image,
  tittle,
  rate,
  description,
  infoTags,
  action
}: Props) => (
  <DishContainer>
    <section>
      <img src={image} alt={tittle} />
      <div>
        {infoTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="info">
        <div>
          <Tittle>{tittle}</Tittle>
          <GradeContainer>
            <span>{rate}</span>
            <img src={estrela} alt="estrela" />
          </GradeContainer>
        </div>
        <Description>{description}</Description>
        <Button>{action}</Button>
      </div>
    </section>
  </DishContainer>
)

export default Dish
