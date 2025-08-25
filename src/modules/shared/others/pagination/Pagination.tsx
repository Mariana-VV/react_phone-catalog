import classnames from 'classnames';
import { getNumbers } from '../getNumbers';
import pagination from './Pagination.module.scss';

type Props = {
  total: number; // total number of items to paginate
  perPage: number; // number of items per page
  currentPage: number /* optional with 1 by default */;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  return (
    <ul className={pagination.pagination}>
      <li className={classnames('page-item', { disabled: currentPage <= 1 })}>
        <a
          data-cy="prevLink"
          className={pagination.page__link}
          // href={`#${currentPage}`}
          aria-disabled={currentPage <= 1 ? true : false}
          onClick={() =>
            onPageChange(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
          «
        </a>
      </li>
      {getNumbers(currentPage, currentPage + 3).map(num => (
        <li
          key={num}
          // className={classnames('page-item', { active: currentPage === num })}
        >
          <a
            className={classnames(pagination.page__link, {
              [pagination.active]: currentPage === num,
            })}
            data-cy="pageLink"
            // className={pagination.page__link}
            // href={`/phones`}
            onClick={() => onPageChange(num)}
          >
            {num}
          </a>
        </li>
      ))}

      <li
        className={classnames('page-item', {
          disabled: currentPage >= total / perPage,
        })}
      >
        <a
          data-cy="nextLink"
          className={pagination.page__link}
          // href={`#${currentPage}`}
          aria-disabled={currentPage >= total / perPage ? true : false}
          onClick={() =>
            onPageChange(
              currentPage <= total / perPage ? currentPage + 4 : currentPage,
            )
          }
        >
          »
        </a>
      </li>
    </ul>
  );
};
