import './reset.scss'
import './App.scss'
import Header from '../components/Header/Header';
import Catalog from '../components/Catalog/Catalog';
import { Route, Routes } from 'react-router-dom';
import FilmPage from '../components/FilmPage/FilmPage';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/movies' element={<Catalog />} />
        <Route path='/movies/:id' element={<FilmPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;