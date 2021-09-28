import React, { useEffect, useState } from "react";
import style from "./Pagination.module.css";

const Pagination = ({ totalCount, onPageChanged, currentPage }) => {
  let portionSize = 5;

  let pageCount = Math.ceil(totalCount / 20);

  let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));

  useEffect(() => setPortionNumber(1), [totalCount])

  let portionCount = Math.ceil(pageCount / 5);

  const goToPreviousPage = () => {
    setPortionNumber(Math.ceil((currentPage - 1) / portionSize));
    onPageChanged(currentPage - 1);
  };

  const goToNextPage = () => {
    setPortionNumber(Math.ceil((currentPage + 1) / portionSize));
    onPageChanged(currentPage + 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    onPageChanged(pageNumber);
    
  };

  const getPaginationGroup = () => {
    return new Array(portionSize).fill().map((_, idx) => portionSize * (portionNumber - 1) + idx + 1);
  };

  return (

    <div className={style.pagination}>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)} className={style.prev}>&#60;</button>}
      <button
        onClick={goToPreviousPage}
        className={`${style.prev} ${currentPage === 1 ? `${style.disabled}` : ""
          }`}
      >
        prev
      </button>

      {portionNumber !== 1 ? <span><button
        onClick={(e) => {
          setPortionNumber(1);
          changePage(e);
        }}
        className={`${style.paginationItem} ${currentPage === 1 ? `${style.active}` : null
          }`}
      >
        <span>1</span>
      </button>...</span> : null}

      {getPaginationGroup()
        .filter(p => p >= 1 && p <= pageCount)
        .map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${style.paginationItem} ${currentPage === item ? `${style.active}` : null
              }`}
          >
            <span>{item}</span>
          </button>
        ))}

      {portionNumber !== portionCount ? <span>...<button
        onClick={(e) => {
          setPortionNumber(portionCount);
          changePage(e);
        }}
        className={`${style.paginationItem} ${currentPage === pageCount ? `${style.active}` : null
          }`}
      >
        <span>{pageCount}</span>
      </button> </span> : null}

      <button
        onClick={goToNextPage}
        className={`${style.next} ${currentPage === pageCount ? `${style.disabled}` : ""
          }`}
      >
        next
      </button>

      {portionNumber < portionCount && <button onClick={() => setPortionNumber(portionNumber + 1)} className={style.next}>&#62;</button>}
    </div>
  );
};

export default Pagination;
