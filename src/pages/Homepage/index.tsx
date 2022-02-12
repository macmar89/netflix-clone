import React from "react";
import { StyledHomepage } from "./StyledHomepage";
import Footer from "../../layout/Footer";
import {LinkButton} from "../../global/components/Button";

const Homepage = () => {
  return (
    <StyledHomepage.Wrapper>
        <StyledHomepage.StoryCard>
          <LinkButton href={'/browse'} label={'browse'} />
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
        </StyledHomepage.StoryCard>
      <StyledHomepage.StoryCard>
        <div className="container">
          <div className="text">
            <h1>Užijte si podívanou na televizi.</h1>
            <h2>
              Dívejte se na Smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray přehrávačích a dalších zařízeních.
            </h2>
          </div>
          <div className="image">
            <img src="tv.png" alt="tv" />
          </div>
        </div>
      </StyledHomepage.StoryCard>
      <StyledHomepage.StoryCard>
        <div className="container">
          <div className="image">
            <img src="mobile.jpg" alt="mobile" />
          </div>
          <div className="text">
            <h1>
              Stáhněte si svoje oblíbené pořady, abyste se mohli dívat i
              offline.
            </h1>
            <h2>
              Uložte si svoje oblíbené pořady, abyste se měli pořád na co dívat.
            </h2>
          </div>
        </div>
      </StyledHomepage.StoryCard>
      <StyledHomepage.StoryCard>
        <div className="container">
          <div className="text">
            <h1>Dívejte se kdekoli.</h1>
            <h2>
              Streamujte neomezeně filmy a TV pořady za výhodnou cenu na
              telefonu, tabletu, notebooku a TV.
            </h2>
          </div>
          <div className="image">
            <img src="device.png" alt="device" />
          </div>
        </div>
      </StyledHomepage.StoryCard>
      <StyledHomepage.StoryCard>
        <div className="container">
          <div className="image">
            <img src="kids.png" alt="kids" />
          </div>
          <div className="text">
            <h1>Vytvořte profily pro děti.</h1>
            <h2>
              S vaším členstvím se děti můžou vydat za dobrodružstvím i se svými
              oblíbenými hrdiny, a to v prostředí, které je stvořené přímo pro
              ně.
            </h2>
          </div>
        </div>
      </StyledHomepage.StoryCard>
      <StyledHomepage.StoryCard>
        FAQ
      </StyledHomepage.StoryCard>
      <Footer />
    </StyledHomepage.Wrapper>
  );
};

export default Homepage;
