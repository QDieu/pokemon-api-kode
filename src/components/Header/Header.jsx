import React from "react";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={style.navigation}>
      <div className={style.button}>
        <img
          src="https://freepikpsd.com/media/2019/10/logout-button-png-3-1-Transparent-Images.png"
          alt=""
          className={style.logoutImg}
        />
        <div onClick={props.logout} className={style.logout}>
          LOGOUT
        </div>
      </div>
    </div>
  );
};

export default Header;
