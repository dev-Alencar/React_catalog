import "./style.css";

import Header from "./components/Header";
import Section from "./components/Section";
import List from "./components/List";

const listGame = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",

  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",

  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    img: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",

  }
]
function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que eu mais curto jogar!"
        >

          {
            listGame.map(function (item) {
              return (
                <List
                  url={item.url}
                  img={item.img}
                  alt={item.alt}
                />
              )
            })
          }

          <List
            url="https://www.twitch.tv/directory/game/League%20of%20Legends"
            img="https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg"
            alt="Imagem do jogo League of Legends"
          />
        </Section>

        <Section
          title="Canais"
          subtitle=""
        />
      </main>
    </div>
  );
}

export default App;
