export const dadJokeHTML = (jokeObject) => {
    return `
    <section class="dadJoke">
    <h3 class="dadJoke--number">Dad Joke # ${jokeObject.id}</h3>
    <div class="dadJoke--question">${jokeObject.question}</div>

    <button id="button--${jokeObject.id}" class="dialog--button">See Answer</button>
            <dialog class="dialog--answer" id="details--${jokeObject.id}">
            <div class="dadJoke--answer">${jokeObject.answer}</div>
            <button class="button--close">Close Dialog</button>
            </dialog>
    </section>
    `
}