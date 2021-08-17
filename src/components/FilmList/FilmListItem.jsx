import { Link, useLocation } from "react-router-dom";
import css from "../FilmList/FilmListItem.module.css";

const FilmListItem = ({ film, query }) => {
  const location = useLocation();
  // const { path } = useRouteMatch();
  // console.log(path);

  return (
    <li className={css.li}>
      <Link
        className={css.link}
        to={{
          pathname: `/movies/${film.id}`,
          state: {
            search: query !== undefined ? query : "",
            id: film.id,
            from: location.pathname,
          },
        }}
      >
        {film.title}
      </Link>
    </li>
  );
};

export default FilmListItem;
