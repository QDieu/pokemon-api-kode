import React from "react";
import style from "./CardItemInfo.module.css";

const InfoWrapper = ({name, data = null}) => (data ? <p><b>{name}</b> : {data}</p> : null)

const CardItemInfo = ({card}) => {
  return (
    <div className={style.infoContainer}>
      <div className={style.leftSectionWrapper}>
        <img
          src={card.images.large}
          alt=""
          className={style.imgPokemonInfo}
        />
        <div className={style.description}>
          {card.abilities ? card.abilities.map((abilities, index) => <div key ={index}>
            <InfoWrapper name={`Abilities Name`} data = {abilities.name}/>
            <InfoWrapper name={`Abilities Text`} data = {abilities.text}/>
          </div>) : null}
          {card.attacks ?card.attacks.map((attack,index) => <div key = {index}> 
            <InfoWrapper name={`Attack Name #${index+1}`} data = {attack.name}/>
            <InfoWrapper name={"Attack Damage "} data = {attack.damage}/>
            <InfoWrapper name={"Attack Cost "} data = {attack.cost.join(' ')}/>
            <InfoWrapper name={"Attack desription"} data = {attack.text}/>
          </div>) : null}
        </div>
      </div>
      <div className={style.rightSectionWrapper}>
        <div>
          <ul>
            <InfoWrapper name={"Pokemon name"} data = {card.name}/>
            <InfoWrapper name={"Pokemon ID"} data = {card.id}/>
            <InfoWrapper name={"Type"} data = {card.types}/>
            <InfoWrapper name={"SubType"} data = {card.subtypes}/>
          </ul>
        </div>
        <div>
          <ul>
          <InfoWrapper name={"Hp"} data = {card.hp}/>
            {card.resistances ? card.resistances.map(key => <InfoWrapper name={"resistances"} data = {key.type + ' ' + key.value}/>) : null}
            <InfoWrapper name={"Evolve from"} data = {card.evolvesFrom}/>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default CardItemInfo;
