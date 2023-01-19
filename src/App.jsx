import { useState } from "react"
import MiApi from "./components/MiApi";
import './App.css'
import Navbar from "./components/NavBar";
import CharacterList from "./components/CharacterList";


function App() {
  const [characters, setCharacters] = useState([])
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <div className="bg-dark text-white">
        <h1 className=" text-center display-1 py-4">Rick and Morty Api</h1>
        <MiApi setCharacters={setCharacters} />
        <Navbar setSearch={setSearch} />
        <CharacterList characters={characters} search={search} />

      </div>
    </div>
  )

}





export default App
