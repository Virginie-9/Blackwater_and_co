// Blackwater & Co. — fiches des whiskeys, partagées par le quiz et le sommelier
// Clés : O = The Original, A = Ard Mór 12 ans, R = Croí 15 ans, S = Saoirse 18 ans, C = Cuan 25 ans
// (text et verdict servent au résultat du quiz)

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
