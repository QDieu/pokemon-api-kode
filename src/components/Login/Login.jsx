import React from "react";
import { useForm } from "react-hook-form";
import style from "./Login.module.css";

const Login = (props) => {
  const { register, handleSubmit, formState: {errors} } = useForm(); 
  const onSubmit = (data) =>
    props.checkLoginPassword(data.login, data.password);

  return (
    <div className={style.formLogin}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {props.errorAuth && <div className = {style.error}>Incorrect email or password</div>}
        <input
          className={style.inputLogin}
          placeholder="login"
          {...register("login", {
            required : true,
            pattern : /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          })}
        />
        {errors?.login?.type === "pattern" && <div className = {style.error}>Incorrect email</div>}
        {errors?.login?.type === "required" && <div className = {style.error}>Requred field login</div>}
        <input
          className={style.inputPassword}
          placeholder="password"
          type="password"
          {...register("password", {
            minLength : 8,
            required : true,
          })}
        />

        {errors?.password?.type === "minLength" && <div className = {style.error}>Min length : 8 symbols</div>}
        {errors?.password?.type === "pattern" && <div className = {style.error}>Requred field</div>}

        <input type="submit" value="login" className={style.buttonLogin} />
      </form>
    </div>
  );
};

export default Login;
