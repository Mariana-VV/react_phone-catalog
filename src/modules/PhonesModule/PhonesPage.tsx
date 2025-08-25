/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import { Link, useSearchParams } from 'react-router-dom';
import phonesPage from './PhonesModule.module.scss';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../shared/store/ProductContext';
import { ProductCard } from '../shared/components/ProductCard/ProductCard';
import { Product } from '../shared/types/Product';
import { Pagination } from '../shared/others/pagination/Pagination';
import { PhoneContext } from '../shared/store/PhoneContext';
import { Loader } from '../shared/Loader';

enum SortField {
  New = 'age',
  Alphabet = 'title',
  Cheap = 'price',
}

function sortItems(
  phones: Product[],
  sortField: string,
  currentPage: number,
  perPage: number,
) {
  let phonesToShow = [...phones];

  if (perPage) {
    phonesToShow = phonesToShow.slice(
      currentPage * perPage,
      currentPage * perPage < phones.length
        ? currentPage * perPage + perPage
        : perPage,
    );
  }

  if (sortField === SortField.New) {
    phonesToShow = phonesToShow.sort((p1, p2) => p2.year - p1.year);
  }

  if (sortField === SortField.Alphabet) {
    phonesToShow = phonesToShow.sort((p1, p2) =>
      p1.name.localeCompare(p2.name),
    );
  }

  if (sortField === SortField.Cheap) {
    phonesToShow = phonesToShow.sort((p1, p2) => p1.price - p2.price);
  }

  return phonesToShow;
}

export const PhonesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const sort = searchParams.get('sort') || '';
  // const page = +(searchParams.get('page') || 0);

  // const { phones } = useContext(PhoneContext);
  const { products } = useContext(ProductContext);
  const phones = products.filter(p => p.category === 'phones');

  const { isLoading } = useContext(PhoneContext);
  const [sortField, setSortField] = useState('age');
  const total = phones.length;
  const [currentPage, setCurrentPage] = useState(1);
  // const [perPage, setPerPage] = useState(phones.length);

  console.log('Phones length', phones.length);

  const perPage = +(searchParams.get('perPage') || 0);

  const phonesToShow = sortItems(phones, sortField, currentPage, perPage);

  function handlePerPageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);

    if (event.target.value === 'all') {
      params.delete('perPage');
    } else {
      params.set('perPage', event.target.value);
    }

    setSearchParams(params);

    setCurrentPage(1);
  }

  function handleQueryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);

    params.set('sort', event.target.value);

    setSearchParams(params);

    setSortField(event.target.value);
    setCurrentPage(1);
  }

  function handlePageChange(pageNum: number) {
    const params = new URLSearchParams(searchParams);

    params.set('page', pageNum.toString());

    setSearchParams(params);

    setCurrentPage(pageNum);
  }

  console.log(perPage);

  return (
    <section className={phonesPage.phonesPage}>
      <div className="container">
        <nav className={phonesPage.nav}>
          {isLoading ? (
            <Loader />
          ) : (
            <ul className={phonesPage.list}>
              <li>
                <Link to={'/'}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.59038 0.807088C7.83112 0.619846 8.16823 0.619846 8.40897 0.807088L14.409 5.47375C14.5714 5.60006 14.6663 5.79426 14.6663 5.99999V13.3333C14.6663 13.8638 14.4556 14.3725 14.0806 14.7475C13.7055 15.1226 13.1968 15.3333 12.6663 15.3333H3.33301C2.80257 15.3333 2.29387 15.1226 1.91879 14.7475C1.54372 14.3725 1.33301 13.8638 1.33301 13.3333V5.99999C1.33301 5.79426 1.42799 5.60006 1.59038 5.47375L7.59038 0.807088ZM2.66634 6.32605V13.3333C2.66634 13.5101 2.73658 13.6797 2.8616 13.8047C2.98663 13.9298 3.1562 14 3.33301 14H12.6663C12.8432 14 13.0127 13.9298 13.1377 13.8047C13.2628 13.6797 13.333 13.5101 13.333 13.3333V6.32605L7.99967 2.1779L2.66634 6.32605Z"
                      fill="#313237"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.33301 8.00001C5.33301 7.63182 5.63148 7.33334 5.99967 7.33334H9.99967C10.3679 7.33334 10.6663 7.63182 10.6663 8.00001V14.6667C10.6663 15.0349 10.3679 15.3333 9.99967 15.3333C9.63148 15.3333 9.33301 15.0349 9.33301 14.6667V8.66668H6.66634V14.6667C6.66634 15.0349 6.36786 15.3333 5.99967 15.3333C5.63148 15.3333 5.33301 15.0349 5.33301 14.6667V8.00001Z"
                      fill="#313237"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.52827 3.52861C5.78862 3.26826 6.21073 3.26826 6.47108 3.52861L10.4711 7.52861C10.7314 7.78896 10.7314 8.21107 10.4711 8.47141L6.47108 12.4714C6.21073 12.7318 5.78862 12.7318 5.52827 12.4714C5.26792 12.2111 5.26792 11.789 5.52827 11.5286L9.05687 8.00001L5.52827 4.47141C5.26792 4.21107 5.26792 3.78896 5.52827 3.52861Z"
                    fill="#B4BDC4"
                  />
                </svg>
              </li>
              <li>Phones</li>
            </ul>
          )}
        </nav>
        <h1>Mobile phones</h1>

        <p className={phonesPage.models}>{phones.length} models</p>

        <div className={phonesPage.properties}>
          <div className={phonesPage.box}>
            <p>Sort by</p>

            <select value={sortField} onChange={handleQueryChange}>
              <option value="age">Newest</option>
              <option value="title">Alphabetically</option>
              <option value="price">Cheapest</option>
            </select>
          </div>
          <div className={phonesPage.box}>
            <p>Items on page</p>
            <select value={perPage} onChange={handlePerPageChange}>
              <option value="all">all</option>

              <option value="4">4</option>
              <option value="8">8</option>
              <option value="16">16</option>
            </select>
          </div>
        </div>

        <div className={phonesPage.block}>
          {phones.length > 0 &&
            phonesToShow.map(phone => (
              <ProductCard product={phone} key={phone.id} />
            ))}
        </div>

        <Pagination
          total={total}
          perPage={perPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};
