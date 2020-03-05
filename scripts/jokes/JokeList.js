import { dadJokeHTML } from "./Joke.js";
import { useDadJoke } from "./JokeDataProvider.js";

const contentTarget = document.querySelector(".jokeContainer")

export const JokeList = () => {
    const arrayOfJokes = useDadJoke()

    for (const jokeObject of arrayOfJokes) {
        const htmlRepresentationOfJoke = dadJokeHTML(jokeObject)

        contentTarget.innerHTML += htmlRepresentationOfJoke
    }
}