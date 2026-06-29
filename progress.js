let solved = 0;
let total = 0;

function resetProgress(count){

    solved = 0;
    total = count;

    renderProgress();

}

function nextProgress(){

    solved++;

    renderProgress();

}

function renderProgress(){

    const fill =
        document.getElementById("fill");

    const text =
        document.getElementById("progressText");

    fill.style.width =
        (solved / total) * 100 + "%";

    text.textContent =
        solved + " / " + total;

}
