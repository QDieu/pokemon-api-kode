import React, { ChangeEvent } from "react";
import { SelectFilterType } from "../../../redux/select-reducer";
import style from "./Select.module.css";

type PropsType = {
  types: Array<string>
  subtypes: Array<string>
  supertypes : Array<string>
  rarities : Array<string>
  onChangeFilter : (selectFilter : SelectFilterType) => void
}

const Select : React.FC<PropsType> = (props) => {
  let selectFilter = {
    types: "",
    subtypes: "",
    supertypes: "",
    rarities: ""
  };

  const onChangeTypes = (e : ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.name) {
      case "filterTypes":
        selectFilter.types = e.target.value;
        break;
      case "filterSubtypes":
        selectFilter.subtypes = e.target.value;
        break;
      case "filterSupertypes":
        selectFilter.supertypes = e.target.value;
        break;
      case "filterRarities":
        selectFilter.rarities = e.target.value;
        break;
      default:
        break;
    }
    props.onChangeFilter(selectFilter);
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.formContainer}>
        <select
          name="filterTypes"
          id="filterTypes"
          onChange={onChangeTypes}
          className={style.selectForm}
        >
          <option value="">Select types</option>
          {props.types.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={style.formContainer}>
        <select
          name="filterSubtypes"
          id="filterSubtypes"
          onChange={onChangeTypes}
          className={style.selectForm}
        >
          <option value="">Select subtypes</option>
          {props.subtypes.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={style.formContainer}>
        <select
          name="filterSupertypes"
          id="filterSupertypes"
          onChange={onChangeTypes}
          className={style.selectForm}
        >
          <option value="">Select supertypes</option>
          {props.supertypes.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className={style.formContainer}>
        <select
          name="filterRarities"
          id="filterRarities"
          onChange={onChangeTypes}
          className={style.selectForm}
        >
          <option value="">Select rarities</option>
          {props.rarities.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
