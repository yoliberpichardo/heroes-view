import {HeroeCard} from '../components'
import queryString from 'query-string'
import {useForm} from '../../hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import { getHeroeByName } from '../helpers'
import { useMemo } from 'react'

export const SearchHero = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const {searchText, onInputChange} = useForm({
    searchText: q
  })
  const heroes = useMemo(() => getHeroeByName(q), [q])

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;


  const onSearchSubmit = (event) => {
    event.preventDefault();

    navigate(`?q=${ searchText }`);

    
  }

  return (
    <>
       <h1>SearchPage</h1>
       <hr />

       <div className="row">
       <div className="col-5">
        <h4>Searching</h4>
        <hr />

        <form onSubmit={onSearchSubmit}>
          <input 
          type="text"
          placeholder="Search a Hero" 
          className="form-control"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
          />

          <button className="btn btn-outline-primary mt-1">
            Search
          </button>
        </form>
       </div>

       <div className="col-7">
        <h4>Result</h4>
        <hr />

        <div className="alert alert-primary animate__animated animate__fadeIn" 
        style={{display: showSearch ?  '': 'none'}}>
          Search a Hero
        </div>

        <div className="alert alert-danger animate__animated animate__fadeIn" 
        style={{display: showError ? '' : 'none'}}>
          No Hero with <b>{q}</b>
        </div>

        {
          heroes.map(heroe => <HeroeCard key={heroe.id} {...heroe} />)
        }

          
       </div>
       </div>

    </>
  )
}
