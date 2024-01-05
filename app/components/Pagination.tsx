export const Pagination = ({ filmsPerPage, totalFilms, paginate }: any) => {
    console.log('films per page -',filmsPerPage, 'total films-', totalFilms)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalFilms / filmsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
    
            <ul className="pagination-list">
                {
                    pageNumbers.map(number => {
                        return (
                            <li className="page-item" key={number}>
                                <button className="btn pagination__btn pagination__btn_number" onClick={() => paginate(number)}>
                                    {number}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
    )
}