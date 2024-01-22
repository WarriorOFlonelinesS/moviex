interface Props {
  filmsPerPage:number,
  totalFilms: number,
  currentPage:number,
  paginate: Function
} 

export const Pagination = ({ filmsPerPage, totalFilms, currentPage, paginate }: Props) => (
  <ul className="pagination-list">
    {Array.from({ length: Math.ceil(totalFilms / filmsPerPage) }, (_, i) => (
      <li className="page-item" key={i + 1}>
        <button
          className={`btn pagination__btn pagination__btn_number ${currentPage === i + 1 ? 'active' : ''}`}
          onClick={() => paginate(i + 1)}
        >
          {i + 1}
        </button>
      </li>
    ))}
  </ul>
);
