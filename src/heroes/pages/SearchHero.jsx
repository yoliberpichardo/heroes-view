import {HeroeCard} from '../components'
import queryString from 'query-string'
import {useForm} from '../../hooks'
import { useLocation, useNavigate } from 'react-router-dom'

export const SearchHero = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const query = queryString.parse(location.search)

  console.log(query);

  const {searchText, onInputChange} = useForm({
    searchText:''
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if ( searchText.trim().length <= 1 ) return;

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

        <div className="alert alert-primary">
          Search a Hero
        </div>

        <div className="alert alert-danger">
          No Hero with <b>{''}</b>
        </div>

        {/* <HeroeCard /> */}

       </div>
       </div>

    </>
  )
}
