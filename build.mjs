// Génère les pages HTML statiques à la racine du dépôt : node build.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { V, LIST, P, setRoot, href } from './src/content.mjs';

const PAGES = [
  { key: 'accueil', file: 'index.html', title: 'Troisième Paysage', desc: 'Atelier de paysagistes concepteurs à Paris et Vendôme depuis 2012 : grand paysage, maîtrise d’œuvre urbaine et paysagère, renaturation, patrimoine.' },
  { key: 'projets', file: 'projets.html', title: 'Projets · Troisième Paysage', desc: 'Maîtrises d’œuvre et études de conception paysagère partout en France.' },
  { key: 'agence', file: 'agence.html', title: 'L’agence · Troisième Paysage', desc: 'L’équipe de paysagistes concepteurs et géographes, l’histoire de l’Atelier et ses implantations.' },
  { key: 'expertises', file: 'expertises.html', title: 'Expertises · Troisième Paysage', desc: 'Les domaines de compétence de l’Atelier et le concept du troisième paysage.' },
  { key: 'contact', file: 'contact.html', title: 'Contact · Troisième Paysage', desc: 'Contacter l’Atelier Troisième Paysage : e-mail, téléphone, adresse à Paris.' }
];

function shell(root, current, title, desc, content) {
  setRoot(root);
  const nav = [['projets', 'Projets'], ['agence', 'Agence'], ['expertises', 'Expertises'], ['contact', 'Contact']]
    .map(([k, l]) => `<a href="${href(k)}"${k === current ? ' aria-current="page"' : ''}${k === 'contact' ? ' class="cta-nav"' : ''}>${l}</a>`).join('\n      ');
  const foot = [['projets', 'Projets'], ['agence', 'Agence'], ['expertises', 'Expertises'], ['contact', 'Contact']]
    .map(([k, l]) => `<a href="${href(k)}">${l}</a>`).join('');
  return `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc.replace(/"/g, '&quot;')}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="${root}assets/css/style.css">
</head>
<body>
<div class="ribbon">Maquette de proposition de refonte · contenus issus de troisieme-paysage.fr</div>
<header class="top">
  <div class="wrap">
    <a class="brand" href="${href('accueil')}" aria-label="Troisième Paysage, accueil"><b>Troisième Paysage</b><span>Atelier de paysagistes · Paris · Vendôme</span></a>
    <button class="burger" id="burger" aria-expanded="false" aria-controls="nav">Menu</button>
    <nav class="main" id="nav" aria-label="Navigation principale">
      ${nav}
    </nav>
  </div>
</header>
<main id="app">
${content}
</main>
<footer>
  <div class="wrap">
    <div class="col"><b>Troisième Paysage</b><p>Depuis 2012, l’Atelier explore l’ensemble des facettes du métier de paysagiste.</p></div>
    <div class="col"><span class="lbl">Naviguer</span>${foot}</div>
    <div class="col"><span class="lbl">Contact</span>
      <p>contact@troisieme-paysage.fr</p><p>01 44 83 02 04</p><p>32 place Saint Georges, 75009 Paris</p>
      <a href="https://fr.linkedin.com/company/atelier-troisieme-paysage" target="_blank" rel="noopener">LinkedIn</a>
      <a href="http://troisieme-paysage.fr/mentions-legales/" target="_blank" rel="noopener">Mentions légales</a></div>
    <p class="mock">SARL Troisième Paysage · siège : 32 place Saint-Georges, 75009 Paris · SIRET 753 656 057 00035 · directeur de la publication : Damien Roidot (gérant) · hébergeur du site actuel : SARL Ionos, 7 place de la Gare, 57200 Sarreguemines.<br>Maquette non définitive : un emplacement tonal indique les photos restant à fournir.</p>
  </div>
</footer>
<script src="${root}assets/js/main.js"></script>
</body>
</html>
`;
}

for (const p of PAGES) {
  setRoot('');
  const html = shell('', p.key, p.title, p.desc, V[p.key]());
  writeFileSync(p.file, html);
}
mkdirSync('projets', { recursive: true });
for (const p of LIST) {
  setRoot('../');
  const body = V.fiche(p.id);
  const file = href('fiche', p.id).replace('../', '');
  const html = shell('../', 'projets', `${p.name}, ${p.place} · Troisième Paysage`, `${p.name}, ${p.place} (${p.dept}) : ${p.type === 'e' ? 'étude' : 'maîtrise d’œuvre'} de Troisième Paysage.`, body);
  writeFileSync(file, html);
}
console.log(PAGES.length + LIST.length + ' pages générées');
