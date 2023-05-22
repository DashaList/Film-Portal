import './reset.scss'
import './App.scss'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AppRouter from './AppRouter';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <AppRouter/>
      <Footer />
    </Provider>
  );
}

export default App;