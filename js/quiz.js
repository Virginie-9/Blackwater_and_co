// Blackwater & Co. — quiz « Quel whiskey vous ressemble ? »
// Modifie QUESTIONS et WHISKEYS pour changer le contenu.

// ----- Quiz : quel whiskey vous ressemble ? -----
// Chaque réponse donne un point à un whiskey : O = Original, A = Ard Mór, R = Croí, S = Saoirse, C = Cuan
const WHISKEYS = {
  O: { gael:'Abhainn Dubh', name:'The Original', type:'Single Pot Still · 43%', liquid:'#b97a35',
       text:"Chaleureux, direct, sans manières. Vous êtes de ceux qui remplissent une pièce de rires et qui se souviennent du prénom du barman. Comme vous, l'Original ne cherche pas à impressionner : il se partage.",
       verdict:"Miel de bruyère et poire mûre. À servir entre amis, de préférence sans cérémonie." },
  A: { gael:'Ard Mór', name:'12 Ans', type:'Fûts de Xérès Oloroso · 46%', liquid:'#9c5a22',
       text:"Vous maîtrisez les codes et vous en jouez. Toujours le bon mot, la bonne tenue, le bon moment. L'Ard Mór a la même élégance calculée : rond en apparence, profond pour qui sait l'écouter.",
       verdict:"Fruits secs, écorce d'orange, chocolat noir. Le compagnon des dîners où tout se négocie." },
  R: { gael:'Croí', name:'15 Ans', type:'Finition fûts de Sauternes · 45%', liquid:'#d2a24f',
       text:"Vous ressentez tout, plus fort que les autres, et c'est votre force. Vous remarquez le regard qui se détourne, le silence qui en dit long, la chanson qui fait monter les larmes. Croí veut dire « cœur » : un whiskey doux en apparence, mais qui reste longtemps avec vous.",
       verdict:"Fleur de sureau, pêche blanche et vanille. Pour les soirs où l'on a besoin de douceur, sans avoir à s'en excuser." },
  S: { gael:'Saoirse', name:'18 Ans', type:'Finition Porto Tawny · 48%', liquid:'#7a3a17',
       text:"Vous ne pliez pas. Vous avancez vite, vous parlez franchement, et vous n'avez jamais demandé la permission à personne. Saoirse veut dire « liberté » : il ne pouvait pas vous en revenir un autre.",
       verdict:"Cerise noire et clou de girofle, une finale longue et sans concession. Comme vous." },
  C: { gael:'Cuan', name:'25 Ans', type:'Cask Strength · Fût unique', liquid:'#5a2a10',
       text:"Vous observez plus que vous ne parlez, et vous savez toujours un coup d'avance. La patience est votre arme. Le Cuan a attendu vingt-cinq ans dans l'ombre des chais : vous vous comprenez.",
       verdict:"Tabac blond, figue et embruns. Une bouteille qu'on ne prête pas." }
};
const QUESTIONS = [
  { q:"Votre soirée idéale ?", a:[
    ["Un pub de Cork, une table trop petite, des amis trop bruyants", 'O'],
    ["Un dîner privé dans un club de Mayfair", 'A'],
    ["Un concert intimiste, les yeux fermés", 'R'],
    ["Une virée nocturne à moto, sans destination", 'S'],
    ["Un salon feutré, un feu de cheminée et un secret bien gardé", 'C'] ]},
  { q:"Quelles saveurs vous attirent ?", a:[
    ["Le miel et les fruits frais", 'O'],
    ["Les fruits secs et le chocolat noir", 'A'],
    ["Les fleurs blanches et la pêche", 'R'],
    ["Les fruits rouges et les épices", 'S'],
    ["Le bois, le cuir et le tabac", 'C'] ]},
  { q:"Une rumeur sur vous fait le tour des salons. Votre réaction ?", a:[
    ["Vous en riez, et vous partagez le post", 'O'],
    ["Un démenti impeccable, publié avant le petit-déjeuner", 'A'],
    ["Ça vous touche plus que vous ne l'avouez. Vous en parlez à une amie", 'R'],
    ["Vous contre-attaquez. Publiquement", 'S'],
    ["Rien. Vous saviez déjà qu'elle allait le publier", 'C'] ]},
  { q:"Votre coin d'Irlande ?", a:[
    ["Les ruelles animées de Cork", 'O'],
    ["Les jardins du château de Lismore", 'A'],
    ["Le lac de Glendalough, dans la brume du matin", 'R'],
    ["Les falaises de Moher, face au vent", 'S'],
    ["Le port de Cobh, au crépuscule", 'C'] ]},
  { q:"Votre devise ?", a:[
    ["« Sláinte, et le reste suivra. »", 'O'],
    ["« L'élégance est une stratégie. »", 'A'],
    ["« Ressentir n'est pas une faiblesse. »", 'R'],
    ["« Ne jamais plier. »", 'S'],
    ["« Le temps finit toujours par payer. »", 'C'] ]}
];
const quizBox = document.getElementById('quiz-box');
let step = 0, scores = {};

const progress = () => '<div class="quiz-progress">' +
  QUESTIONS.map((_, i) => `<span class="${i < step ? 'done' : ''}"></span>`).join('') + '</div>';

function renderQuestion() {
  const Q = QUESTIONS[step];
  quizBox.innerHTML = progress() + `
    <div class="quiz-step">
      <span class="q-count">Question ${step + 1} / ${QUESTIONS.length}</span>
      <h3 class="q-title">${Q.q}</h3>
      <div class="answers">
        ${Q.a.map(([label, k], i) => `<button class="answer" data-k="${k}"><i>${'ABCDE'[i]}</i><span>${label}</span></button>`).join('')}
      </div>
    </div>`;
  quizBox.querySelectorAll('.answer').forEach(b => b.addEventListener('click', () => {
    scores[b.dataset.k] = (scores[b.dataset.k] || 0) + 1;
    step++;
    step < QUESTIONS.length ? renderQuestion() : renderResult();
  }));
}

function renderResult() {
  // en cas d'égalité, le whiskey le plus âgé l'emporte
  const order = ['C', 'S', 'R', 'A', 'O'];
  const best = order.reduce((m, k) => (scores[k] || 0) > (scores[m] || 0) ? k : m, order[0]);
  const W = WHISKEYS[best];
  quizBox.innerHTML = progress() + `
    <div class="quiz-step result">
      <svg style="--liquid:${W.liquid}"><use href="#bottle"/></svg>
      <div>
        <span class="q-count">Votre whiskey</span>
        <span class="gaelic" style="display:block;margin-top:.8rem">${W.gael}</span>
        <h3>${W.name}</h3>
        <span class="type">${W.type}</span>
        <p>${W.text}</p>
        <div class="verdict">${W.verdict}</div>
        <div class="result-actions">
          <a href="#collection" class="btn solid">Voir la collection</a>
          <button class="btn ghost" id="quiz-restart">Recommencer</button>
        </div>
      </div>
    </div>`;
  document.getElementById('quiz-restart').addEventListener('click', startQuiz);
}

function startQuiz() { step = 0; scores = {}; renderQuestion(); }
startQuiz();