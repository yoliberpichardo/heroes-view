import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const MarvelPage = () => {
  console.log(getHeroesByPublisher('Marvel Comics'))
  return (
    <h1>MarvelPage</h1>
  )
}
