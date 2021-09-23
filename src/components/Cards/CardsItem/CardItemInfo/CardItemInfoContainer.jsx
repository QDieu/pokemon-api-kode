import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import CardItemInfo from "./CardItemInfo";

class CardItemInfoContainer extends React.Component {

  state ={
    cardTemp : {},
  }

  componentDidMount(){
    (this.props.unicId !== null) ? this.setState({cardTemp : this.props.cards[this.props.unicId]})
    : axios.get(`https://api.pokemontcg.io/v2/cards/${this.props.match.params.cardId}`).then(response =>{
      const cardTemp = response.data.data;
      this.setState({cardTemp});
    })
  }

  render() {
    if (Object.keys(this.state.cardTemp).length !== 0) return <CardItemInfo card = {this.state.cardTemp}/>;
    return <div>Loading...</div>
  }
}

const mapStateToProps = (state) => {
  return {
    cards : state.cardItems.cards,
    unicId : state.cardItems.unicIdCard,
  }
}

export default compose(
  connect(mapStateToProps, null),
  withRouter,
)(CardItemInfoContainer);
