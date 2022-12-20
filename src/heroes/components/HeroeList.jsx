import { HeroeCard } from "./HeroeCard";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"

export const HeroeList = ({publisher}) => {
  const data = getHeroesByPublisher(publisher);
  console.log(data);
  return (
    <>
        <div className="row rows-cols-1 row-cols-md-3 g-3">
          {data.map(hero =>(
           <HeroeCard key={hero.id}  {...hero} />
          )
          )}
        </div>
    </>
  )
}   
