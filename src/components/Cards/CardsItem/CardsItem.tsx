import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CardType } from "../../../api/cardAPI";
import CardModalWindow from "./CardModalWindow";
import style from "./CardsItem.module.css";
import Pagination from "./Pagination";

type PropsType = {
  cards: Array<CardType>,
  totalCount: number,
  onPageChanged: (page: number) => void,
  currentPage: number,
  setUnicIdCard: (id: number) => void
}

const CardsItems: React.FC<PropsType> = ({ cards, setUnicIdCard, ...props }) => {

  const [isModal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState<string|undefined>('')

  const onClose = () => {setModal(false); setModalImg('')};

  return (
    <div>
      <CardModalWindow url={modalImg}
        visible={isModal}
        onClose={onClose} />

      <ul className={style.cardsContainer}>
        {cards.map((item, index) => (
          <li
            key={item.id}
            className={style.card + ' ' + style.cardItemWrapper}
          >
            <div className={style.cardItem} onClick={() => {setModal(true); setModalImg(item.images?.large)}}>
              <div className={style.imgPokemon}>
                <img src={item.images?.small} alt="" />
              </div>


              <NavLink to={`/card/${item.id}`} className={style.link} onClick={() => { setUnicIdCard(index) }}>
                <div className={style.description}>
                  <p>{item.name}</p>
                  <p>{item.artist}</p>
                </div>
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      {props.totalCount ? <Pagination
        totalCount={props.totalCount}
        onPageChanged={props.onPageChanged}
        currentPage={props.currentPage}
      /> : <div>NOT FOUND</div>}
    </div>
  );
};

export default CardsItems;
