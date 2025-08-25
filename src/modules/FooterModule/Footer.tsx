/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import f from './Footer.module.scss';

export const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <footer className={f.footer}>
      <Link to={'/'}>
        <img src="assets/images/hero/logo-footer.png" alt="logo" />
      </Link>

      <ul className={f.list}>
        <li>
          <Link to={'#'}>Github</Link>
        </li>
        <li>
          <Link to={'#'}>Contacts</Link>
        </li>
        <li>
          <Link to={'#'}>rights</Link>
        </li>
      </ul>

      <div className={f.backToTop}>
        <p>Back to top</p>
        <Link className={f.link} to="/" onClick={handleScrollToTop}>
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
              d="M3.52845 10.4712C3.2681 10.2109 3.2681 9.78878 3.52845 9.52843L7.52845 5.52843C7.7888 5.26808 8.21091 5.26808 8.47126 5.52843L12.4713 9.52843C12.7316 9.78878 12.7316 10.2109 12.4713 10.4712C12.2109 10.7316 11.7888 10.7316 11.5285 10.4712L7.99986 6.94265L4.47126 10.4712C4.21091 10.7316 3.7888 10.7316 3.52845 10.4712Z"
              fill="#313237"
            />
          </svg>
        </Link>
      </div>
    </footer>
  );
};
