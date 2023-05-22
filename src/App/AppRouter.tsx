import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

const AppRouter = () => {

  const isAdmin = true

  return (
    <Routes>
      {isAdmin && privateRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} Component={Component} />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} Component={Component} />
      )}
    </Routes>
  )
}

export default AppRouter