import "./styles.css";
import React, { Component } from "react";

const api_key = "?api_key=d453bedd8e1aa421650264b6d40f034e";
const APIURL = "https://api.themoviedb.org/3/movie/550?api_key=d453bedd8e1aa421650264b6d40f034e";

const IMGPATH = "htpps:https://image.tmdb.org/t/p/w1280";

var SEARCHPI =
  "https://api.themoviedb.org/3/search/movie" + api_key + "&region=EN&query";

class Content extends Component {
  render() {
    return (
      <div>
        <div id="content"></div>
      </div>
    );
  }
  
  componentDidMount() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    console.log("montou");
  }
}
async function getMovies(url) {
  const resp = await fetch(url);

  const respData = await resp.json();

  showMovies(respData.results);
  console.log(respData);
}

function escolheFilme() {
  const rndInt = Math.floor(Math.random() * 5) + 1;
  var filme = "";
  switch (rndInt) {
    case 1:
      filme = "Os Vingadores";
      break;

    case 2:
      filme = "A Era do Gelo";
      break;

    case 3:
      filme = "Gladiador";
      break;

    case 4:
      filme = "Rocky Balboa";
      break;

    case 5:
      filme = "Meu Malvado Favorito";
      break;
    default:
      filme = "";
      break;
  }
  getMovies(SEARCHPI + filme);
  console.log(filme);
}

function showMovies(filmes) {
  let content = document.getElementById("content");

  content.innerHTML = "";

  var i = 0;
  while (i < 1) {
    var filme = filmes[0];
    const { poster_path, title, vote_average, overview } = filme;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `    
    <img src="${IMGPATH + poster_path}" alt="${title}"/>
    <div class="movie-info">
    <h3>"${title}</h3>
    </div>  
    <div class="overview">
    <h3>${overview}</h3>  
    </div>    
`;
    content.appendChild(movieEl);
    i++;
  }
}

function BotaoEscolherFilme() {
  return (
    <div>
      <button onClick={escolheFilme}>Clique aqui</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>Recomenda filme</h1>
      <h2>Clique no botâo para escolher um filme</h2>
      <BotaoEscolherFilme />
      <Content />
    </div>
  );
}
