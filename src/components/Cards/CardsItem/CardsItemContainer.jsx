import axios from "axios";
import React from "react";
import CardsItems from "./CardsItem";
import {
  setCardsAC,
  setTotalCountAC,
  setCurrentPageAC,
  setUnicIdCardAc
} from "./../../../redux/card-reducer";
import { connect } from "react-redux";

class CardsItemsContainer extends React.Component {
  componentDidMount() {
    if (this.props.cards.length === 0) {
      axios
        .get("https://api.pokemontcg.io/v2/cards", {
          params: {
            pageSize: 20
          }
        })
        .then((response) => {
          this.props.setCards(response.data.data);
          this.props.setTotalCount(response.data.totalCount);
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.filter) !== JSON.stringify(this.props.filter) ||
      JSON.stringify(prevProps.currentPage) !==
        JSON.stringify(this.props.currentPage)
    ) {
      let filter = "";
      for (let key in this.props.filter) {
        if (this.props.filter[key])
          filter =
            filter +
            key +
            ":" +
            this.props.filter[key].split(" ").join("") +
            " ";
      }

      axios
        .get("https://api.pokemontcg.io/v2/cards", {
          params: {
            pageSize: 20,
            page: this.props.currentPage,
            q: filter
          }
        })
        .then((response) => {
          this.props.setCards(response.data.data);
          this.props.setTotalCount(response.data.totalCount);
        });
      if (
        JSON.stringify(prevProps.filter) !== JSON.stringify(this.props.filter)
      )
        this.props.setCurrentPage(1);
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        <CardsItems
          cards={this.props.cards}
          totalCount={this.props.totalCount}
          onPageChanged={this.onPageChanged}
          currentPage={this.props.currentPage}
          setUnicIdCard = {this.props.setUnicIdCard}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardItems.cards,
    currentPage: state.cardItems.currentPage,
    totalCount: state.cardItems.totalCount,
    filter: state.select.selectFilter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCards: (cards) => {
      dispatch(setCardsAC(cards));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setUnicIdCard : (unicIdCard) => {
      dispatch(setUnicIdCardAc(unicIdCard));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsItemsContainer);
