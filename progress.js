let solved = 0;
let total = 0;

function resetProgress() {

    total = deck.length;
    solved = 0;

    updateProgress();

}

function increaseProgress() {

    solved++;

    updateProgress();

}

function updateProgress() {

    const fill = document.getElementById("fill");
    const text = document.getElementById("progressText");

    const percent =
        total === 0 ? 0 : (solved / total) * 100;

    fill.style.width = percent + "%";

    text.textContent =
        solved + " / " + total;

}

function isFinished() {

    return solved >= total;

}
