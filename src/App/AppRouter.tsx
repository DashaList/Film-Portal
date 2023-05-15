import CatalogPage from '../pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router-dom';
import FilmPage from '../pages/FilmPage/FilmPage';
import PersonPage from '../pages/PersonPage/PersonPage';

const AppRouter = () => {

  return (
    <Routes>
        <Route path='/movies' element={<CatalogPage />} />
        <Route path='/movies/:genre' element={<CatalogPage/>} />
        <Route path='/movie/:id' element={<FilmPage />} />
        <Route path='/persons/:id' element={<PersonPage />} />
    </Routes>
  )
}

export default AppRouter