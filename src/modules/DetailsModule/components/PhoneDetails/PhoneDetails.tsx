/* eslint-disable max-len */
import { Link, useParams } from 'react-router-dom';
import details from './PhoneDetails.module.scss';
import { useContext, useState } from 'react';
import { ProductContext } from '../../../shared/store/ProductContext';
import { PhoneContext } from '../../../shared/store/PhoneContext';
import { colors } from '../../../shared/Colors';
import { Section } from '../../../shared/components/Section/Section';
import { Product } from '../../../shared/types/Product';

// utils/getSuggestedProducts.js
export function getSuggestedProducts(
  allProducts: Product[],
  currentProductId: number | undefined,
  count = 8,
) {
  // Відфільтрувати поточний товар
  const filtered = allProducts.filter(p => p.id !== currentProductId);
  // Перемішати масив
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  // Взяти перші count елементів

  return shuffled.slice(0, count);
}

export const PhoneDetails = () => {
  const { products } = useContext(ProductContext);
  const { phones } = useContext(PhoneContext);

  const params = useParams();

  const product = products.find(p => p.id === parseInt(params.id || ''));

  const phone = phones.find(p => p.id === product?.itemId);

  const [picture, setPicture] = useState(phone?.images[0]);

  const cell = phone?.cell.map((value, index) => {
    return index !== phone.cell.length - 1 ? value + ', ' : value;
  });

  return (
    <section className={details.details}>
      <div className="container">
        <nav className={details.nav}>
          <ul className={details.list}>
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
            <li>
              <Link to={'/phones'}>Phones</Link>
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
            <li className={details.name}>{phone?.name}</li>
          </ul>
        </nav>

        <Link to={'#'} className={details.back}>
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
              d="M10.4717 3.52861C10.2114 3.26826 9.78927 3.26826 9.52892 3.52861L5.52892 7.52861C5.26857 7.78896 5.26857 8.21107 5.52892 8.47141L9.52892 12.4714C9.78927 12.7318 10.2114 12.7318 10.4717 12.4714C10.7321 12.2111 10.7321 11.789 10.4717 11.5286L6.94313 8.00001L10.4717 4.47141C10.7321 4.21107 10.7321 3.78896 10.4717 3.52861Z"
              fill="#313237"
            />
          </svg>

          <p>Back</p>
        </Link>

        <h1 className={details.title}>{phone?.name}</h1>
        <p className={details.id}>ID: {`${product?.id}`}</p>

        <div className={details.block}>
          <div className={details.slider}>
            <div className={details.listslide}>
              {phone?.images.map(image => (
                <a
                  className={details.slide}
                  key={image}
                  onClick={() => setPicture(image)}
                >
                  <img src={image} alt={phone.name} />
                </a>
              ))}
            </div>
            <div className={details.picture}>
              <img src={picture || phone?.images[0]} alt="phone" />
            </div>
          </div>
          <div className={details.properties}>
            <div className={details.top}>
              <p>Available colors</p>
            </div>
            <div className={details.colors}>
              {phone?.colorsAvailable.map(color => (
                <div
                  className={details.color}
                  key={color}
                  style={{ background: colors[color] }}
                ></div>
              ))}
            </div>

            <hr className={details.line1} />

            <p
              style={{
                color: '#89939a',
                marginBottom: '8px',
              }}
            >
              Select capacity
            </p>
            <div className={details.capacities}>
              {phone?.capacityAvailable.map(cap => (
                <div key={cap} className={details.capacity}>
                  {cap}
                </div>
              ))}
            </div>

            <hr className={details.line2} />

            <div className={details.prices}>
              <p className={details.newPrice}>${phone?.priceDiscount}</p>
              <p className={details.fullPrice}>${phone?.priceRegular}</p>
            </div>

            <div className={details.buttons}>
              <button className={details.cart}>Add to cart</button>
              <button className={details.favourite}>
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
                    d="M9.62852 1.63137C10.1584 1.4118 10.7264 1.29878 11.3 1.29878C11.8737 1.29878 12.4416 1.4118 12.9716 1.63137C13.5015 1.85094 13.983 2.17277 14.3885 2.57847C14.7941 2.98394 15.1158 3.46532 15.3353 3.99514C15.5549 4.52506 15.6679 5.09305 15.6679 5.66667C15.6679 6.24028 15.5549 6.80827 15.3353 7.33819C15.1158 7.86806 14.794 8.34949 14.3884 8.75497C14.3883 8.75501 14.3884 8.75493 14.3884 8.75497L8.49502 14.6483C8.22165 14.9217 7.77844 14.9217 7.50507 14.6483L1.61174 8.75497C0.792668 7.9359 0.33252 6.82501 0.33252 5.66667C0.33252 4.50833 0.792668 3.39743 1.61174 2.57836C2.43081 1.75929 3.54171 1.29914 4.70005 1.29914C5.85839 1.29914 6.96928 1.75929 7.78835 2.57836L8.00005 2.79005L8.21162 2.57847C8.21158 2.57851 8.21166 2.57844 8.21162 2.57847C8.61711 2.17283 9.09865 1.85092 9.62852 1.63137ZM13.3983 3.56819C13.1228 3.29256 12.7957 3.07392 12.4357 2.92474C12.0756 2.77556 11.6898 2.69878 11.3 2.69878C10.9103 2.69878 10.5245 2.77556 10.1644 2.92474C9.80441 3.07392 9.4773 3.29256 9.2018 3.56819L8.49502 4.27497C8.22165 4.54834 7.77844 4.54834 7.50507 4.27497L6.7984 3.56831C6.24189 3.01179 5.48708 2.69914 4.70005 2.69914C3.91301 2.69914 3.15821 3.01179 2.60169 3.56831C2.04517 4.12483 1.73252 4.87963 1.73252 5.66667C1.73252 6.4537 2.04517 7.20851 2.60169 7.76502L8.00005 13.1634L13.3984 7.76502C13.674 7.48953 13.8928 7.16231 14.042 6.80228C14.1911 6.44226 14.2679 6.05637 14.2679 5.66667C14.2679 5.27696 14.1911 4.89107 14.042 4.53105C13.8928 4.17103 13.6739 3.84369 13.3983 3.56819Z"
                    fill="#313237"
                  />
                </svg>
              </button>
            </div>
            <div className={details.characteristics}>
              <div className={details.characteristic}>
                <p className={details.char}>Screen</p>
                <p className={details.charac}>{phone?.screen}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.char}>Resolution</p>
                <p>{phone?.resolution}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.char}>Processor</p>
                <p className={details.charac}>{phone?.processor}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.char}>RAM</p>
                <p className={details.charac}>{phone?.ram}</p>
              </div>
            </div>
          </div>
          <div className={details.content}>
            <h3 className={details.about}>About</h3>
            <hr className={details.line3} />
            {phone?.description.map(text => (
              <div key={text?.title}>
                <h4 className={details.desc}>{text?.title}</h4>
                <p className={details.text}>{text?.text}</p>
              </div>
            ))}
          </div>
          <div className={details.techspecs}>
            <h3 className={details.about}>Tech specs</h3>
            <hr className={details.line3} />
            <div className={details.characteristics}>
              <div className={details.characteristic}>
                <p className={details.parag}>Screen</p>
                <p>{phone?.screen}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>Resolution</p>
                <p>{phone?.resolution}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>Processor</p>
                <p>{phone?.processor}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>RAM</p>
                <p>{phone?.ram}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>Built in memory</p>
                <p>{phone?.capacity}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>Camera</p>
                <p>{phone?.camera}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>Zoom</p>
                <p>{phone?.zoom}</p>
              </div>
              <div className={details.characteristic}>
                <p className={details.parag}>Cell</p>
                <p>{cell}</p>
              </div>
            </div>
          </div>
        </div>

        <Section
          title="You may also like"
          products={getSuggestedProducts(products, product?.id)}
        />
      </div>
    </section>
  );
};
