import React, { useEffect } from "react";
import Select from "./Select";
import { useSelector, useDispatch } from "react-redux";
import {
  getRarities,
  setSelect,
  getSubTypes,
  getSuperTypes,
  getTypes
} from "../../../redux/select-reducer";


const SelectContainer = () => {
  const types = useSelector(state => state.select.types);
  const subtypes = useSelector(state => state.select.subtypes);
  const supertypes = useSelector (state => state.select.supertypes);
  const rarities = useSelector (state => state.select.rarities);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getSubTypes());
    dispatch(getSuperTypes());
    dispatch(getRarities());
  }, [])

  const onChangeFilter = (selectFilter) => {
    dispatch(setSelect(selectFilter))
  }


  //TODO : 1 response 1 render! v3 app
  return <>
  <Select
    types={types}
    subtypes={subtypes}
    supertypes={supertypes}
    rarities={rarities}
    onChangeFilter={onChangeFilter}
  />
</>
}

export default SelectContainer;
