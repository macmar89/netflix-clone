import React from "react";
import { StyledHomepage } from "./StyledHomepage";
import Footer from "../../layout/Footer";
import { LinkButton } from "../../global/components/Button";
import { StoryCard } from "../../layout/StoryCard";

const Homepage = () => {
  return (
    <StyledHomepage.Container>
      <StyledHomepage.OurStory>
        <h1>Neomezená podívaná na filmy, TV pořady a další.</h1>
        <h2>Dívejte se kdekoli. Zrušte kdykoli.</h2>
        <form>
          <h3>
            Jste připraveni se dívat? Pro vytvoření nebo obnovení účtu zadejte
            e-mail.
          </h3>
          <div>
            <input type="text" placeholder="E-mailová adresa" />
            <button>Začít</button>
          </div>
        </form>
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
