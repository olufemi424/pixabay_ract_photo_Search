import React from "react";

const pagination = ({
  postPerPage,
  totalPosts,
  paginate,
  paginateNext,
  paginatePrev
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" onClick={paginatePrev}>
          <a className="page-link" href="!#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map(number => (
          <li
            className="page-item"
            key={number}
            onClick={() => paginate(number)}
          >
            <a className="page-link" href="!#">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item" onClick={paginateNext}>
          <a className="page-link" href="!#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default pagination;
