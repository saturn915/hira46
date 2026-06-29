const kanaEl = document.getElementById("kana");
const answerEl = document.getElementById("answer");

function showQuestion() {

    const q = nextQuestion();

    kanaEl.textContent = q[0];
    answerEl.textContent = "?";

    increaseProgress();

    if (isFinished()) {

        setTimeout(() => {

            alert("🎉 한 바퀴 완료!");

        }, 100);

    }

}

function showAnswer() {

    if (!current) return;

    answerEl.textContent = current[1];

}
