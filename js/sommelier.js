// Blackwater & Co. — le Sommelier : un whiskey pour chaque occasion
// Pour ajouter une occasion : une ligne de plus dans OCCASIONS.
//   label   : texte du bouton
//   w       : clé du whiskey (voir js/whiskeys.js)
//   line    : la recommandation du sommelier
//   service : comment le servir

const OCCASIONS = [
  { label:"Une rupture", w:'R',
    line:"Il ne vous posera aucune question et ne vous dira pas “je te l'avais dit”. C'est déjà mieux que la plupart de vos amis.",
    service:"Pur, dans un verre à tulipe. Une couverture et une playlist trop triste sont recommandées." },
  { label:"Une victoire", w:'S',
    line:"Une victoire ne se célèbre pas, elle se savoure. Lentement, et de préférence devant ceux qui pariaient contre vous.",
    service:"Pur, à température ambiante. Levez le verre un peu plus haut que nécessaire." },
  { label:"Un premier rendez-vous", w:'A',
    line:"Assez élégant pour impressionner, assez rond pour ne pas intimider. Laissez-le parler en premier.",
    service:"Deux verres, une goutte d'eau chacun. Le reste dépend de vous." },
  { label:"Un deuil", w:'C',
    line:"Certains silences méritent vingt-cinq ans de patience. Celui-ci en fait partie.",
    service:"Pur, sans un mot. Versez-en un troisième verre pour celui ou celle qui n'est plus là." },
  { label:"Un scandale à étouffer", w:'A',
    line:"Servez-le à la bonne personne, au bon moment, et l'affaire n'aura jamais existé. Nous ne vous avons rien dit.",
    service:"Dans votre meilleur cristal. Fermez la porte du salon." },
  { label:"Une négociation", w:'C',
    line:"Celui qui sert le Cuan a déjà gagné. L'autre ne le sait simplement pas encore.",
    service:"Pur. Servez votre interlocuteur deux fois, vous-même une seule." },
  { label:"Des retrouvailles entre amis", w:'O',
    line:"La bouteille qu'on pose au milieu de la table sans cérémonie, et qu'on retrouve vide à trois heures du matin.",
    service:"Sur glace ou pur, peu importe. Ce soir, personne ne vous juge." },
  { label:"Une soirée seul·e sous la pluie", w:'R',
    line:"La pluie contre la vitre, un livre ouvert que vous ne lisez pas vraiment. Croí comprend.",
    service:"Pur, avec une goutte d'eau pour ouvrir les arômes de pêche blanche." },
  { label:"Une vengeance accomplie", w:'S',
    line:"La vengeance se mange froide ; le Saoirse se boit chambré. Accordez-vous les deux.",
    service:"Pur. Souriez. Ne dites rien à personne." },
  { label:"Rencontrer la belle-famille", w:'O',
    line:"Personne n'a jamais été critiqué pour avoir apporté l'Original. Sauf peut-être par un duc, mais qui écoute les ducs ?",
    service:"À offrir, emballé. Proposez de l'ouvrir vous-même pour ne pas rester les mains vides." },
  { label:"Un héritage inattendu", w:'C',
    line:"Une fortune qui arrive sans prévenir mérite un whiskey qui a pris son temps. Trois cent douze bouteilles, toutes réservées. Pour vous, nous ferons une exception.",
    service:"Pur, dans le bureau du défunt de préférence. Avec respect, mais sans excès." },
  { label:"Un simple mardi soir", w:'O',
    line:"Les mardis aussi méritent leur verre. Surtout les mardis, en fait.",
    service:"Comme vous voulez. C'est mardi." }
];

const somGrid = document.getElementById('som-occasions');
const somResult = document.getElementById('som-result');

function renderOccasion(i, scroll = true) {
  const o = OCCASIONS[i];
  const W = WHISKEYS[o.w];
  somGrid.querySelectorAll('.occasion').forEach((b, j) => b.classList.toggle('active', j === i));
  somResult.innerHTML = `
    <div class="som-card">
      <svg style="--liquid:${W.liquid}"><use href="#bottle"/></svg>
      <div>
        <span class="q-count">Pour ${o.label.charAt(0).toLowerCase() + o.label.slice(1)}</span>
        <span class="gaelic">${W.gael}</span>
        <h3>${W.name}</h3>
        <span class="type">${W.type}</span>
        <p class="som-line">«&nbsp;${o.line}&nbsp;»</p>
        <p class="som-service"><b>Le service</b>${o.service}</p>
      </div>
    </div>`;
  // sur téléphone, le résultat est sous la liste : on le fait venir à l'écran
  if (scroll && window.innerWidth < 820) somResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

OCCASIONS.forEach((o, i) => {
  const b = document.createElement('button');
  b.className = 'occasion';
  b.textContent = o.label;
  b.addEventListener('click', () => renderOccasion(i));
  somGrid.appendChild(b);
});

document.getElementById('som-random').addEventListener('click', () => {
  const current = [...somGrid.children].findIndex(b => b.classList.contains('active'));
  let i;
  do { i = Math.floor(Math.random() * OCCASIONS.length); } while (i === current && OCCASIONS.length > 1);
  renderOccasion(i);
});
