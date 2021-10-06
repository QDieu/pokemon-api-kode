import React from "react";
import style from "./Header.module.css";

type PropsType = {
  logout : () => void
}

const Header : React.FC<PropsType> = (props) => {
  return (
    <div className={style.navigation}>
      <div className={style.button}>
        <img
          src="https://e7.pngegg.com/pngimages/466/448/png-clipart-computer-icons-button-user-profile-button-angle-text-thumbnail.png"
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
