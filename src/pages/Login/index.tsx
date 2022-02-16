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
    username: Yup.string().required("Zadaj prihlasovacie meno"),
    password: Yup.string()
      .required("Heslo musí obsahovať minimálne 4 a maximálne 30 znakov")
      .min(4, "Minimálne 4 znaky")
      .max(30, "Maximálne 30 znakov"),
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
          <h1>Prihlásiť sa</h1>
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
              <Button label={"Prihlásiť sa"} />
            </div>
            <StyledLogin.LoginFormHelp>
              <div className="remember-login">
                <input type="checkbox" name="remember-login" />
                <label>Zapamätaj si ma</label>
              </div>
              <div className="help">
                <Link to="https://www.netflix.com/sk/LoginHelp">
                  Potrebujete pomoc?
                </Link>
              </div>
            </StyledLogin.LoginFormHelp>
          </StyledLogin.Form>
          <StyledLogin.Other>
            <div className="fa">
              <AiFillFacebook />
              <span>Prihlásenie pomocou Facebooku</span>
            </div>
            <div>
              Začínate s Netflixom?{" "}
              <Link to="/" className="link">
                Registrujte sa teraz
              </Link>
            </div>
            <p>
              Aby sme sa uistili, že nie ste robot, je táto stránka chránená
              pomocou funkcie Google reCAPTCHA.{" "}
              <span className="blue-link" onClick={() => setShowMore(true)}>
                Zistiť viac
              </span>
            </p>
            <p
              style={{
                visibility: `${showMore ? "visible" : "hidden"}`,
                transition: "all 0.5s easy ",
              }}
            >
              Informácie ziskané pomocou Google reCAPTCHA podliehajú{" "}
              <span className="blue-link">Ochrane súkromia</span> a{" "}
              <span className="blue-link">Podmienkam poskytovania služieb</span>{" "}
              spoločnosti Google a používajú sa k poskytovaniu, údržbe,
              zlepšovaniu služby reCAPTCHA a l všeobecným bezpečnostným účelom
              (a nie sú využívané k cieleniu reklamy zo strany Googlu).
            </p>
          </StyledLogin.Other>
        </StyledLogin.LoginBox>
      </StyledLogin.Content>
    </StyledLogin.Container>
  );
};

export default Login;
