const loadJoke = async () => {
    const chuckNorrisFetch = await fetch('https://api.chucknorris.io/jokes/random', {
        headers: {
            Accept: "application/json"
          }
    });

    const jokeData = await chuckNorrisFetch.json();

    console.log(jokeData.value)
    document.getElementById('loadingJoke').innerHTML = jokeData.value;
  };
  
document.getElementById("loadJokeBtn").addEventListener("click", loadJoke);