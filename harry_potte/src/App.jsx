import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {const pokemons = [
  {
    name: "Pikachu",
    types: ["Electric"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Charmander",
    types: ["Fire"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "Squirtle",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "Jigglypuff",
    types: ["Normal", "Fairy"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/39.png",
  },
  {
    name: "Meowth",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/52.png",
  },
  {
    name: "Psyduck",
    types: ["Water"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png",
  },
  {
    name: "Machop",
    types: ["Fighting"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/66.png",
  },
  {
    name: "Magnemite",
    types: ["Electric", "Steel"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/81.png",
  },
  {
    name: "Eevee",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
  },
  {
    name: "Snorlax",
    types: ["Normal"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png",
  },
  {
    name: "Dragonite",
    types: ["Dragon", "Flying"],
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png",
  },
];


  return (
    <div className="cards">
      {pokemons.map((item, index) => (
        <Card  item={item}/>
      ))}
    </div>
  );
}

export default App;
