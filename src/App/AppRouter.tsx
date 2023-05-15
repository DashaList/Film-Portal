import CatalogPage from '../pages/CatalogPage/CatalogPage';
import { Route, Routes } from 'react-router-dom';
import FilmPage from '../pages/FilmPage/FilmPage';
import PersonPage from '../pages/PersonPage/PersonPage';
import { publicRoutes } from './routes';

const AppRouter = () => {

  return (
    
    <Routes>
        {/* <Route path='/movies' element={<CatalogPage />} />
        <Route path='/movies/:id' element={<FilmPage />} />
        <Route path='/persons/:id' element={<PersonPage />} />
        {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} Component={Component}/>
        )}  */}
        <Route path='/movies' element={<CatalogPage />} />
        <Route path='/movies/:genre' element={<CatalogPage/>} />
        <Route path='/movie/:id' element={<FilmPage />} />
        <Route path='/persons/:id' element={<PersonPage />} />
    </Routes>
  )
}

export default AppRouter