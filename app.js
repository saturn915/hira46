const data=[['あ','아'],['い','이'],['う','우'],['え','에'],['お','오'],['か','카'],['き','키'],['く','쿠'],['け','케'],['こ','코'],['さ','사'],['し','시'],['す','스'],['せ','세'],['そ','소'],['た','타'],['ち','치'],['つ','츠'],['て','테'],['と','토'],['な','나'],['に','니'],['ぬ','누'],['ね','네'],['の','노'],['は','하'],['ひ','히'],['ふ','후'],['へ','헤'],['ほ','호'],['ま','마'],['み','미'],['む','무'],['め','메'],['も','모'],['や','야'],['ゆ','유'],['よ','요'],['ら','라'],['り','리'],['る','루'],['れ','레'],['ろ','로'],['わ','와'],['を','오'],['ん','응']];
let deck=[],cur,last=-1;
function sh(){deck=[...Array(data.length).keys()];for(let i=deck.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[deck[i],deck[j]]=[deck[j],deck[i]]}}
function nextKana(){if(deck.length===0)sh();let idx=deck.pop();if(idx===last&&deck.length){deck.unshift(idx);idx=deck.pop()}last=idx;cur=data[idx];kana.textContent=cur[0];ans.textContent='?';prog.textContent=(46-deck.length)+'/46';}
function showAns(){ans.textContent=cur[1]}
sh();nextKana();