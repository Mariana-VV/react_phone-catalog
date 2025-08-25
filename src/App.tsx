import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './modules/HeaderModule/Header';
import { Footer } from './modules/FooterModule/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
