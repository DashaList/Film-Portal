import './reset.scss'
import './App.scss'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppRouter from './AppRouter';
import Layout from '../components/Layout/Layout';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      
        <AppRouter/>
      
    </>
  );
}

export default App;