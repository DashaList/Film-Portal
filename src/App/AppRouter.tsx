import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

const AppRouter = () => {

  return (

    <Routes>
      {/* <Route path='/movies' element={<CatalogPage />} />
        <Route path='/movies/:id' element={<FilmPage />} />
        <Route path='/persons/:id' element={<PersonPage />} /> */}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} Component={Component} />
      )}
      {/* <Route path='/movies' element={<CatalogPage />} />
      <Route path='/movies/:genre' element={<CatalogPage />} />
      <Route path='/movies/:genre/:year' element={<CatalogPage />} />
      <Route path='/movies/:year' element={<CatalogPage />} />
      <Route path='/movie/:id' element={<FilmPage />} />
      <Route path='/persons/:id' element={<PersonPage />} /> */}
    </Routes>
  )
}

export default AppRouter