import FilmListItem from "./FilmListItem";
import css from "./FilmList.module.css";

const FilmList = ({ films, query }) => {
  return (
    <ul className={css.ul}>
      {films.map((film) => (
        <FilmListItem query={query} key={film.id} film={film} />
      ))}
    </ul>
  );
};

export default FilmList;
