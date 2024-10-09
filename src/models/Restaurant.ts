class Restaurant {
  image: string
  title: string
  rate?: number
  description: string
  infoTags?: string[]
  id: number

  constructor(
    image: string,
    title: string,
    rate: number,
    description: string,
    infoTags: string[],
    id: number
  ) {
    this.image = image
    this.title = title
    this.rate = rate
    this.description = description
    this.infoTags = infoTags
    this.id = id
  }
}

export default Restaurant
