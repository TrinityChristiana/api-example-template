
const btn = document.querySelector("#btn");
const jokeDisplay = document.querySelector("#joke");

const populateJoke = (joke) => {
  jokeDisplay.innerHTML += `
    <div class="card" id="${joke.id}" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${joke.setup}</h5>
        <p class="card-text">${joke.punchline}</p>
      </div>
    </div>
    `
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
