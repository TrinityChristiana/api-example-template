
const btn = document.querySelector("#btn");
const jokeDisplay = document.querySelector("#joke");

const populateJoke = (joke) => {
  jokeDisplay.innerHTML += `<h2>${joke.id}</h2>
    <p><b>${joke.setup}</b></p>
    <p>${joke.punchline}</p>`
}

const getJoke = () => {
  fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
    .then((response) => response.json())
    .then((jokes) => {
      jokeDisplay.innerHTML = ""
      jokes.map((joke) => {
        populateJoke(joke)
      })
    });
}

btn.addEventListener('click', () => getJoke());
