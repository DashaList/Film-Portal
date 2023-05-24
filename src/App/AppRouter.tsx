import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import Layout from '../components/Layout/Layout';

const AppRouter = () => {

  const isAdmin = true

  return (
    <Routes>
      <Route element={<Layout/>}>
        {isAdmin && privateRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} Component={Component} />
        )}
        {publicRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} Component={Component} />
        )}
      </Route>
    </Routes>
  )
}

export default AppRouter