export const Pagination = ({ filmsPerPage, totalFilms, currentPage, paginate }: any) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className="pagination-list">
        {pageNumbers.length > 1 &&
          pageNumbers.map((number) => (
            <li className="page-item" key={number}>
              <button
                className={`btn pagination__btn pagination__btn_number ${
                  currentPage === number ? 'active' : ''
                }`}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    );
  };
  