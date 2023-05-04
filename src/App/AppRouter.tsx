import CatalogPage from '../pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router-dom';
import FilmPage from '../pages/FilmPage/FilmPage';

const AppRouter = () => {

  return (
    <Routes>
        <Route path='/movies' element={<CatalogPage />} />
        <Route path='/movies/:id' element={<FilmPage />} />
    </Routes>
  )
}

export default AppRouter