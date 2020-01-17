// Creates variable for html element with btn as its id
const btn = document.querySelector("#btn");

// Creates variable for html element with container as id
const jokeDisplay = document.querySelector("#container");

// Writes Jokes to the DOM
const populateJoke = (joke) => {
  // appends text to element with container as id
  jokeDisplay.innerHTML += `
    <div class="card" id="${joke.id}" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${joke.setup}</h5>
        <p class="card-text">${joke.punchline}</p>
      </div>
    </div>
    `;
};

// fetched joke information from api
const getJoke = () => {
  // fetches api
  fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
    // Converts response to json file
    .then((response) => response.json())
    // What to di with the data or in this case jokes
    .then((jokes) => {
      jokeDisplay.innerHTML = "";
      // Maps through the array of jokes fetched from the api and runs the polulateJoke function with each joke pulled 
      jokes.map((joke) => {
        populateJoke(joke);
      });
    });
};

// Connects getJoke function with the click of a button with the id of btn.
btn.addEventListener('click', () => getJoke());
