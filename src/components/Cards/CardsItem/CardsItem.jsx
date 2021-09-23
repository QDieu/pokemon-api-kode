import React from "react";
import { NavLink } from "react-router-dom";
import style from "./CardsItem.module.css";
import Pagination from "./Pagination";

const CardsItems = (props) => {
  return (
    <div>
      <ul className={style.cardsContainer}>
        {props.cards.map((item, index) => (
          <li
            key={item.id}
            className={style.card}
            className={style.cardItemWrapper}
          >
            <div className={style.cardItem}>
              <div className={style.imgPokemon}>
                <img src={item.images.small} alt="" />
              </div>
              <NavLink to={`/card/${item.id}`} className={style.link} onClick={() => {props.setUnicIdCard(index)}}>
                <div className={style.description}>
                  <p>{item.name}</p>
                  <p>{item.artist}</p>
                </div>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        totalCount={props.totalCount}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      />
    </div>
  );
};

export default CardsItems;
