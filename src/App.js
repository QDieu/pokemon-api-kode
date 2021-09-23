import { Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import CardItemInfoContainer from "./components/Cards/CardsItem/CardItemInfo/CardItemInfoContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import "./styles.css";

export default function App() {
    return (
    <div className="App">
      <Route
        exact
        path="/"
        render={() => (
          <>
            <HeaderContainer />
            <Cards />
          </>
        )}
      />
      <Route path="/login" render={() => <LoginContainer />} />
      <Route
        path="/card/:cardId?"
        render={() => (
          <>
            <HeaderContainer />
            <CardItemInfoContainer />
          </>
        )}
      />
    </div>
  );
}
