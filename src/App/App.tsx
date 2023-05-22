import './reset.scss'
import './App.scss'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <>
      <Header />
      <AppRouter/>
      <Footer />
    </>
  );
}

export default App;