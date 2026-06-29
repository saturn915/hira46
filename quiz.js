let deck = [];
let current = null;
let previous = null;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function buildDeck() {

    const group = document.getElementById("group").value;

    if (group === "all") {
        deck = [...kanaData.all];
    } else {
        deck = [...kanaData[group]];
    }

    shuffle(deck);

}

function nextQuestion() {

    if (deck.length === 0) {

        buildDeck();

    }

    let item = deck.pop();

    if (previous && deck.length > 0) {

        while (item[0] === previous[0]) {

            deck.unshift(item);

            shuffle(deck);

            item = deck.pop();

        }

    }

    previous = item;
    current = item;

    return item;

}
