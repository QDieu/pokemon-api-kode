import React, { Dispatch, useEffect } from "react";
import Select from "./Select";
import { useSelector, useDispatch } from "react-redux";
import {
  getRarities,
  getSubTypes,
  getSuperTypes,
  getTypes,
  actionsSelectReducer,
  SelectFilterType,
  ThunkTypeSelectReducer,
  ActionSelectReducerType
} from "../../../redux/select-reducer";
import { AppStateType } from "../../../redux/redux-store";

type PropsType = {}

const SelectContainer : React.FC<PropsType> = (props) => {
  const types = useSelector((state : AppStateType) => state.select.types);
  const subtypes = useSelector((state : AppStateType) => state.select.subtypes);
  const supertypes = useSelector ((state : AppStateType) => state.select.supertypes);
  const rarities = useSelector ((state : AppStateType) => state.select.rarities);

  const dispatch : Dispatch<ThunkTypeSelectReducer | ActionSelectReducerType> = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getSubTypes());
    dispatch(getSuperTypes());
    dispatch(getRarities());
  }, [dispatch])

  const onChangeFilter = (selectFilter : SelectFilterType) => {
    dispatch(actionsSelectReducer.setSelect(selectFilter))
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
