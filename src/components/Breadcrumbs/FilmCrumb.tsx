import { NavLink } from 'react-router-dom'
import FilmData from '../../FilmData.json'
import { BreadcrumbComponentType } from 'use-react-router-breadcrumbs'

const FilmCrumb: BreadcrumbComponentType<"id"> = ({match}) => {
    const film = FilmData.find(film => film.id.toString() == match.params.id)

  return (
    <>
    <NavLink to={film?.genre[0].link || '/'}>
        {film?.genre[0].name}
    </NavLink>
        {film?.name}
    </>
  )
}

export default FilmCrumb