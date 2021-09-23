import React from "react";
import { useForm } from "react-hook-form";
import style from "./Login.module.css";

const Login = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>
    props.checkLoginPassword(data.login, data.password);

  return (
    <div className={style.formLogin}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={style.inputLogin}
          placeholder="login"
          {...register("login")}
        />

        <input
          className={style.inputPassword}
          placeholder="password"
          type="password"
          {...register("password")}
        />

        <input type="submit" value="login" className={style.buttonLogin} />
      </form>
    </div>
  );
};

export default Login;
