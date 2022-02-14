import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { StyledLogin } from "./StyledLogin";
import { Button } from "../../global/components/Button";

const Login = () => {
  const [showMore, setShowMore] = useState(false);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Please enter username"),
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
    if (data?.username?.length > 0 && data?.password?.length > 0) {
      history.push(`/browse`);
    } else {
      return;
    }
    return false;
  };

  return (
    <StyledLogin.Container>
      <img src="/images/login.jpg" alt="background" />
      <div className="overlay" />
      <StyledLogin.Content>
        <StyledLogin.Logo to="/">
          <img src={"/images/logo.png"} alt={"logo"} className="logo" />
        </StyledLogin.Logo>
        <StyledLogin.LoginBox>
          <h1>Sign In</h1>
          <StyledLogin.Form onSubmit={handleSubmit(onSubmit)}>
            <StyledLogin.Input error={errors?.username?.message !== undefined}>
              <input
                type="text"
                placeholder="Užívateľské meno"
                {...register("username")}
              />
              <div className="errorMessage">{errors?.username?.message}</div>
            </StyledLogin.Input>

            <StyledLogin.Input error={errors?.password?.message !== undefined}>
              <input
                type="password"
                placeholder="Heslo"
                {...register("password")}
              />
              <div className="errorMessage">{errors?.password?.message}</div>
            </StyledLogin.Input>

            <div style={{ padding: "1.5rem 0 0.75rem 0" }}>
              {/*<Link to="/browse">*/}
              <Button label={"Sign In"} />
              {/*</Link>*/}
            </div>
            <StyledLogin.LoginFormHelp>
              <div className="remember-login">
                <input type="checkbox" name="remember-login" />
                <label>Remember me</label>
              </div>
              <div className="help">
                <Link to="https://www.netflix.com/sk/LoginHelp">
                  Need help?
                </Link>
              </div>
            </StyledLogin.LoginFormHelp>
          </StyledLogin.Form>
          <StyledLogin.Other>
            <div className="fa">
              <AiFillFacebook />
              <span>Login with Facebook</span>
            </div>
            <div>
              New to Netflix?{" "}
              <Link to="/" className="link">
                Sign up now
              </Link>
            </div>
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <span className="blue-link" onClick={() => setShowMore(true)}>
                Learn more.
              </span>
            </p>
            <p
              style={{
                visibility: `${showMore ? "visible" : "hidden"}`,
                transition: "all 0.5s easy ",
              }}
            >
              The information collected by Google reCAPTCHA is subject to the
              Google <span className="blue-link">Privacy Policy</span> and{" "}
              <span className="blue-link">Terms of Service</span> , and is used
              for providing, maintaining, and improving the reCAPTCHA service
              and for general security purposes (it is not used for personalized
              advertising by Google).
            </p>
          </StyledLogin.Other>
        </StyledLogin.LoginBox>
      </StyledLogin.Content>
    </StyledLogin.Container>
  );
};

export default Login;
