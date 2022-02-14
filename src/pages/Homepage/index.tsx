import React, { ChangeEvent } from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { StyledHomepage } from "./StyledHomepage";
import Footer from "../../layout/Footer";
import { StoryCard } from "../../layout/StoryCard";
import { Button } from "../../global/components/Button";

const Homepage = () => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledHomepage.Container>
      <StyledHomepage.OurStory>
        <img src="/homepage-image.jpg" alt="" />
        <div className="overlay" />
        <div className="nav">
          <img src="/images/logo.png" alt="logo" />
          <Link to="/login">
            <Button label="Prihlásiť sa" />
          </Link>
        </div>
        <div className="content">
          <h1>Neobmedzené pozeranie na filmy, TV programy a ďalšie.</h1>
          <h2>Pozerajte kdekoľvek. Zrušte kedykoľvek</h2>
          <form>
            <h3>
              Ste pripravený sa pozerať? Pre vytvorenie alebo obnovenie účtu
              zadajte e-mail.
            </h3>
            <form className="join-us" onSubmit={handleSubmit}>
              <input type="text" placeholder="E-mailová adresa" />
              <button>
                Začať <BsChevronRight />
              </button>
            </form>
          </form>
        </div>
      </StyledHomepage.OurStory>
      <StoryCard
        title="Užívajte si sledovanie na televízií"
        subtitle="Pozerajte sa na Smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray prehrávačoch a ďalších zariadeniach."
        image="tv.png"
        imageSide="right"
      />

      <StoryCard
        title="Stiahnete si svoje obľúbené programy, aby ste sa mohli pozerať i
              off-line."
        subtitle="Uložte si svoje obľúbené programy, aby ste mali stále na čo
              pozerať."
        image="mobile.jpg"
        imageSide="left"
      />

      <StoryCard
        title="Pozerajte všade."
        subtitle="Streamujte neobmedzene filmy a TV programy za výhodnú cenu na
              telefóne, tablete, notebooku a TV."
        image="device.png"
        imageSide="right"
      />

      <StoryCard
        title="Vytvorte profil pre deti."
        subtitle="S vašim členstvom sa deti môžu vydať za dobrodružstvom aj so
              svojími obľúbenými hrdinami a to v prostredí, ktoré je stvorené
              priamo pre ne."
        image="kids.png"
        imageSide="left"
      />

      <Footer />
    </StyledHomepage.Container>
  );
};

export default Homepage;
