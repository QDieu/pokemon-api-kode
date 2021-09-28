import React from "react";
import { useForm } from "react-hook-form";
import style from "./Login.module.css";

const Otp = (props) => {
  const { register, handleSubmit , formState: {errors}} = useForm();
  const onSubmit = (data) => {
    props.checkCodeOtp(data.codeOTP);
  }
  return (
    <div>
      
      <form onSubmit={handleSubmit(onSubmit)} className={style.formLogin}>
        {props.errorOTP && <div className = {style.error}>INCORRECT CODE</div>}
        <input
          placeholder="code"
          autoFocus
          {...register("codeOTP",  {required : true, minLength : 6, maxLength : 6})}
          
          className={style.inputLogin}
        />
        {errors?.codeOTP?.type === "required" && <div className = {style.error}>This field is requred</div>}
        {errors?.codeOTP?.type === "minLength" && <div className = {style.error}> Length code equal 6</div>}
        {errors?.codeOTP?.type === "maxLength" && <div className = {style.error}> Length code equal 6</div>}
        <input type="submit" className={style.buttonLogin} value="confirm" />
      </form>
    </div>
  );
};

export default Otp;
