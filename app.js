// =========================
// Hira46 v1.2
// Part 1
// =========================

const kanaGroups = {

a: [
["あ","아"],
["い","이"],
["う","우"],
["え","에"],
["お","오"]
],

ka:[
["か","카"],
["き","키"],
["く","쿠"],
["け","케"],
["こ","코"]
],

sa:[
["さ","사"],
["し","시"],
["す","스"],
["せ","세"],
["そ","소"]
],

ta:[
["た","타"],
["ち","치"],
["つ","츠"],
["て","테"],
["と","토"]
],

na:[
["な","나"],
["に","니"],
["ぬ","누"],
["ね","네"],
["の","노"]
],

ha:[
["は","하"],
["ひ","히"],
["ふ","후"],
["へ","헤"],
["ほ","호"]
],

ma:[
["ま","마"],
["み","미"],
["む","무"],
["め","메"],
["も","모"]
],

ya:[
["や","야"],
["ゆ","유"],
["よ","요"]
],

ra:[
["ら","라"],
["り","리"],
["る","루"],
["れ","레"],
["ろ","로"]
],

wa:[
["わ","와"],
["を","오"],
["ん","응"]
]

};

let deck = [];
let current = null;
let total = 0;
let solved = 0;
let previousKana = "";

const kana = document.getElementById("kana");
const answer = document.getElementById("answer");

const progressFill =
document.getElementById("progressFill");

const progressText =
document.getElementById("progressText");

const group =
document.getElementById("group");

const answerBtn =
document.getElementById("answerBtn");

const nextBtn =
document.getElementById("nextBtn");
// =========================
// Part 2
// =========================

// 배열 섞기 (Fisher-Yates)
function shuffle(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

    return array;

}

// 현재 선택된 그룹으로 문제 생성
function buildDeck(){

    deck=[];

    if(group.value==="all"){

        Object.keys(kanaGroups).forEach(key=>{

            deck.push(...kanaGroups[key]);

        });

    }else{

        deck.push(...kanaGroups[group.value]);

    }

    shuffle(deck);

    total=deck.length;

    solved=0;

    updateProgress();

}

// 진행률 표시
function updateProgress(){

    progressText.innerText=`${solved} / ${total}`;

    const percent=(solved/total)*100;

    progressFill.style.width=percent+"%";

}

// 다음 문제
function nextQuestion(){

    if(deck.length===0){

        alert("🎉 학습 완료!");

        buildDeck();

    }

    let item;

    do{

        item=deck.pop();

    }while(
        item &&
        item[0]===previousKana &&
        deck.length>0
    );

    current=item;

    previousKana=current[0];

    kana.style.transform="scale(.9)";

    setTimeout(()=>{

        kana.innerText=current[0];

        kana.style.transform="scale(1)";

    },120);

    answer.innerText="?";

    solved++;

    updateProgress();

}
// =========================
// Part 3
// =========================

// 정답 보기
function showAnswer(){

    if(!current) return;

    answer.innerText=current[1];

}

// 버튼 이벤트
answerBtn.addEventListener("click",showAnswer);

nextBtn.addEventListener("click",nextQuestion);

// 행 변경
group.addEventListener("change",()=>{

    previousKana="";

    buildDeck();

    nextQuestion();

});

// 첫 실행
buildDeck();

nextQuestion();
