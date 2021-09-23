import React from "react";
import style from "./Pagination.module.css";

const Pagination = (props) => {
  const goToPreviousPage = () => {
    props.onPageChanged(props.currentPage - 1);
  };

  const goToNextPage = () => {
    props.onPageChanged(props.currentPage + 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    console.log(pageNumber);
    props.onPageChanged(pageNumber);
  };

  const getPaginationGroup = () => {
    let start = props.currentPage - 1;
    if (start <= 0) start = 0;
    return new Array(5).fill().map((_, idx) => start + idx + 1);
  };

  let pages = props.totalCount / 20;

  return (
    <div className={style.pagination}>
      <button
        onClick={goToPreviousPage}
        className={`${style.prev} ${
          props.currentPage === 1 ? `${style.disabled}` : ""
        }`}
      >
        prev
      </button>

      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`${style.paginationItem} ${
            props.currentPage === item ? `${style.active}` : null
          }`}
        >
          <span>{item}</span>
        </button>
      ))}

      <button
        onClick={goToNextPage}
        className={`${style.prev} ${
          props.currentPage === pages ? `${style.disabled}` : ""
        }`}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
