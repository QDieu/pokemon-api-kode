import React from "react";
import { useForm } from "react-hook-form";
import style from "./Login.module.css";

const Otp = (props) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => props.checkCodeOtp(data.codeOTP);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={style.formLogin}>
        <input
          placeholder="code"
          autoFocus
          {...register("codeOTP")}
          className={style.inputLogin}
        />

        <input type="submit" className={style.buttonLogin} value="confirm" />
      </form>
    </div>
  );
};

export default Otp;
