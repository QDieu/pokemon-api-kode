import axios from "axios";
import React from "react";
import Select from "./Select";
import { connect } from "react-redux";
import {
  setRaritiesAc,
  setSelectAc,
  setSubTypesAc,
  setSuperTypesAc,
  setTypesAc
} from "../../../redux/select-reducer";
import { setCardsAC } from "../../../redux/card-reducer";

class SelectContainer extends React.Component {
  componentDidMount() {
    if (this.props.types.length === 0) {
      axios.get("https://api.pokemontcg.io/v2/types").then((response) => {
        this.props.setTypes(response.data.data);
      });
    }
    if (this.props.subtypes.length === 0) {
      axios.get("https://api.pokemontcg.io/v2/subtypes").then((response) => {
        this.props.setSubtypes(response.data.data);
      });
    }
    if (this.props.supertypes.length === 0) {
      axios.get("https://api.pokemontcg.io/v2/supertypes").then((response) => {
        this.props.setSupertypes(response.data.data);
      });
    }
    if (this.props.rarities.length === 0) {
      axios.get("https://api.pokemontcg.io/v2/rarities").then((response) => {
        this.props.setRarities(response.data.data);
      });
    }
  }

  onChangeFilter = (selectFilter) => {
    this.props.setSelect(selectFilter);
  };

  render() {
    return (
      <>
        <Select
          types={this.props.types}
          subtypes={this.props.subtypes}
          supertypes={this.props.supertypes}
          rarities={this.props.rarities}
          onChangeFilter={this.onChangeFilter}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    types: state.select.types,
    subtypes: state.select.subtypes,
    supertypes: state.select.supertypes,
    rarities: state.select.rarities
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTypes: (data) => {
      dispatch(setTypesAc(data));
    },
    setSubtypes: (data) => {
      dispatch(setSubTypesAc(data));
    },
    setSupertypes: (data) => {
      dispatch(setSuperTypesAc(data));
    },
    setRarities: (data) => {
      dispatch(setRaritiesAc(data));
    },
    setCards: (cards) => {
      dispatch(setCardsAC(cards));
    },
    setSelect: (selectFilter) => {
      dispatch(setSelectAc(selectFilter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectContainer);
