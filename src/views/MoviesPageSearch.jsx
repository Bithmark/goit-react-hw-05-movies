import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getFilmsByQuery } from "../services/api";
import FilmList from "../components/FilmList/FilmList";
import css from "../views/MoviesPageSearch.module.css";

function MoviesPageSearch() {
  const history = useHistory();

  const [input, setInput] = useState("");
  const [films, setFilms] = useState([]);

  const handleChangeQuery = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // history.push({
    //   pathname: history.location.pathname,
    //   search: `?q=${input}`,
    // });
    // history.push(`?q=${input}`);
    getFilmsByQuery(input).then((resp) => setFilms(resp.data.results));
  };

  useEffect(() => {
    if (history.location.state?.search) {
      getFilmsByQuery(history.location.state?.search).then((resp) => {
        setFilms(resp.data.results);
        setInput(history.location.state?.search);
      });
    }
  }, [history]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          value={input}
          type="text"
          onChange={handleChangeQuery}
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <FilmList query={input} films={films} />
    </>
  );
}

export default MoviesPageSearch;
