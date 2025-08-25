import { Route, Routes } from 'react-router-dom';
import { HomePage } from './modules/HomeModule/HomePage';
import { PhonesPage } from './modules/PhonesModule/PhonesPage';
import { TabletsPage } from './modules/TabletsModule/TablesPage';
import { AccessoriesPage } from './modules/AccessoriesModule/AccessoriesPage';
import { DetailsPage } from './modules/DetailsModule/DetailsPage';
import { CartPage } from './modules/CartModule/CartPage';
import { App } from './App';
import { FavouritesPage } from './modules/FavouritesModule/FavoritesPage';
import { NotFoundPage } from './modules/shared/NotFoundPage';
import { Menu } from './modules/MenuModule/Menu';

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/phones" element={<PhonesPage />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
