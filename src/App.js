import axios from "axios";
import React, { useState } from "react";

function App() {

  const [joke, setJoke] = useState('')
  const [punchline, setPunchline] = useState('')

  const getJoke = () => {
    axios.get('https://official-joke-api.appspot.com/random_joke')
      .then((res) => {
        setJoke(res.data.setup);
        setPunchline(res.data.punchline);
      })
  }

  return (
    <div className="App">
      <div>
        <button onClick={getJoke}>
          Get a Joke
        </button>
        <p>{joke}</p>
        <p>{punchline}</p>

      </div>
    </div>
  );
}

export default App;
