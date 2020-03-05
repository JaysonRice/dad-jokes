export const dadJokeHTML = (jokeObject) => {
    return `
    <section class="dadJoke">
    <h3 class="dadJoke--number">Dad Joke # ${jokeObject.id}</h3>
    <div class="dadJoke--question">${jokeObject.question}</div>
    <div class="dadJoke--answer">${jokeObject.answer}</div>
    </section>
    `
}