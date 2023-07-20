import axios from "axios";
import React, { useState } from "react";

function App() {

  const [joke, setJoke] = useState('')
  const [punchline, setPunchline] = useState('')
  const [id, setId] = useState('')

  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((res) => {
        setId(res.data.id)
        setJoke(res.data.setup);
        setPunchline(res.data.punchline);
      })
  }

  // const getJokeById = () => {
  //   axios.
  // }

  return (
    <div className="App">
      <div>
        <button onClick={getJoke}>
          Get a Joke
        </button>
        <p>{id}</p>
        <p>{joke}</p>
        <p>{punchline}</p>
      </div>
      <div>
        get Joke by id
      </div>
    </div>
  );
}

export default App;
