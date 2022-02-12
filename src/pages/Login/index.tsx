import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledLogin } from "./StyledLogin";
import { Button } from "../../global/components/Button";
import { Input } from "../../global/components/Input";
import { useForm } from "react-hook-form";

const Login = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Please enter a valid email or phone number")
      .email("Email is not valid"),
    password: Yup.string()
      .required("Your password must contain between 4 and 60 characters.")
      .min(4, "Min 4 characters")
      .max(60, "Max 60 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data: any) => {
    console.log(data);
    alert("fuuj");
    reset();
    return false;
  };

  return (
    <StyledLogin.Wrapper>
      <StyledLogin.Logo>
        <img src={"/logo.png"} alt={"logo"} className="logo" />
      </StyledLogin.Logo>
      <StyledLogin.LoginBox>
        <h1>Sign In</h1>
        <StyledLogin.Form onSubmit={handleSubmit(onSubmit)}>
          {/*<input type="text" placeholder={"Password"} />*/}
          <Input
            placeholder="Email"
            {...register("email")}
            errorMessage={errors?.email?.message}
          />
          <Input
            placeholder={"Email or phone number"}
            type="password"
            errorMessage={errors?.password?.message}
            {...register("password")}
          />

          <Button label={"Sign In"} />
        </StyledLogin.Form>
      </StyledLogin.LoginBox>
    </StyledLogin.Wrapper>
  );
};

export default Login;
