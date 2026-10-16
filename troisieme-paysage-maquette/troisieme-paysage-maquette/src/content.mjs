// Données et gabarits des pages. Source des contenus : troisieme-paysage.fr
var SITE='https://troisieme-paysage.fr/projet/';
var REG={'75':'Île-de-France','77':'Île-de-France','91':'Île-de-France','92':'Île-de-France','94':'Île-de-France','59':'Hauts-de-France','62':'Hauts-de-France','80':'Hauts-de-France','02':'Hauts-de-France','76':'Normandie','50':'Normandie','45':'Centre-Val de Loire','37':'Centre-Val de Loire','67':'Grand Est','66':'Occitanie','44':'Pays de la Loire','63':'Auvergne-Rhône-Alpes'};
// id, nom, lieu, département, type (e = étude, m = maîtrise d’œuvre), image, ratio, slug
var RAW=[
['puteaux','Jardin de la rose des vents','Puteaux','92','m','2025/09/1-vignette-Puteaux-1280x720.jpg','16/9','jardin-de-la-rose-des-vents-puteaux-92/'],
['caps','Évolution des paysages','PNR Caps et Marais d’Opale','62','e','2025/05/01-vignette-Caps-et-marais-dOpale-1280x1230.jpg','1280/1230','evolution-des-paysages-pnr-caps-et-marais-dopale-62/'],
['fibres','Renaturation des Fibres du Hainaut','Quiévrechain','59','m','2024/06/1vignette-fibreduhainaut-1280x960.jpg','4/3','fibres-du-hainaut/'],
['sdv','Schéma Directeur Vert','Tours métropole','37','e','2024/06/1vignette-schemadirecteurvert-1280x1811.jpg','1280/1811','schema-directeur-vert/'],
['yerres','Esplanade de la Gare','Yerres','91','m','2025/12/1-vignette-Yerres-1280x720.jpg','16/9','esplanade-de-la-gare-yerres-91/'],
['vaucresson','Square de la Montgolfière','Vaucresson','92','m','2025/11/1-Vaucresson-vignette-1-1280x960.jpg','4/3','square-de-la-montgolfiere-vaucresson-92/'],
['villemandeur','Centre-ville','Villemandeur','45','m','2025/10/1-vignette-Villemandeur-1280x960.jpg','4/3','centre-ville-de-villemandeur-45/'],
['solterre','Route Départementale 2007','Solterre','45','m','2025/05/1-Solterre-vignette-1280x576.jpg','20/9','route-departementale-2007-solterre-45/'],
['dieppe','Parvis du multiplexe','Dieppe','76','m','2025/03/1-dieppe-vignette-1280x576.jpg','20/9','parvis-du-multiplexe-dieppe-76/'],
['corbeau','Renaturation de la cité du Corbeau','Quiévrechain','59','e','2025/03/5-Corbeau-etude-vignette.jpg','4/3','renaturation-de-la-cite-du-corbeau-quievrechain-59/'],
['rochecorbon','Voie douce','Rochecorbon','37','m','2025/03/1-vignette-Rochecorbon.jpg','4/3','voie-douce-rochecorbon-37/'],
['fecamp','Étude urbaine de la presqu’île','Fécamp','76','e','2025/03/1-Fecamp-vignette.jpg','4/3','etude-urbaine-presquile-de-fecamp-76/'],
['randan','Développement touristique du domaine royal','Randan','63','e','2025/05/1-vignette-Randan-1280x812.jpg','1280/812','developpement-touristique-domaine-royal-de-randan-63/'],
['soissons','Valorisation touristique de l’abbaye Saint-Jean-des-Vignes','Soissons','02','e','2025/03/1-vignette-Soissons.jpg','4/3','valorisation-touristique-de-labbaye-saint-jean-des-vignes-soissons/'],
['clemenceau','Revalorisation de la Prairie Clémenceau','Moret-Loing-et-Orvanne','77','e','2025/03/1-vignette-prairie-clemenceau.jpg','4/3','revalorisation-de-la-prairie-clemenceau-moret-loing-et-orvanne/'],
['lichtenberg','Étude paysagère','Lichtenberg','67','e','2025/03/01-Liichtenberg-vignette.jpg','4/3','etude-paysagere-lichtenberg/'],
['hourdel','Étude paysagère','Pointe du Hourdel','80','e','2025/03/vignette-1-Hourdel.jpg','4/3','etude-paysagere-pointe-du-hourdel/'],
['fleckenstein','Dynamisation du château de Fleckenstein','Fleckenstein','67','e','2025/03/1-vignette-Fleck.jpg','4/3','etude-pour-la-dynamisation-du-chateau-de-fleckenstein/'],
['galamus','Étude touristique','Gorges de Galamus','66','e','2025/05/1-vignette-Galamus-1280x960.jpg','4/3','etude-touristique-gorges-de-galamus/'],
['folies','Valorisation des Folies Siffait','Le Cellier','44','e','2025/03/1-vignette-Folies-Siffait-2.jpg','4/3','valorisation-des-folies-siffait-le-cellier/'],
['baie','Grand Site Baie de Somme','Baie de Somme','80','e','2025/03/3-vignette.jpg','4/3','grand-site-baie-de-somme/'],
['antony','Square du Mont-Blanc','Antony','92','m','2025/03/1-vignette.jpg','4/3','square-du-mont-blanc-antony/'],
['hambye','Requalification de l’abbaye','Hambye','50','e','2025/02/1AbbayedeHambye.jpg','4/3','abbaye-de-hambye/'],
['fontainebleau','Stratégie d’accueil','Fontainebleau','77','e','2024/06/1vignette-fontainebleau-e1720621106549-1280x783.jpg','1280/783','strategie-daccueil-fontainebleau/'],
['duclair','Voie Verte','Duclair – Le Trait','76','m','2024/06/1-photo-vignette-1-1280x960.jpg','4/3','duclair-letrait/'],
['boissy','Cour d’école Jean Rostand','Boissy-Saint-Léger','94','m','2026/09/1-vignette-Boissy-1280x720.jpg','16/9','cours-decole-boissy-saint-leger/'],
['hvt','Place de la Haute Vieille Tour','Rouen','76','m','2026/09/1-vignette-HVT-1280x720.jpg','16/9','place-de-la-haute-vieille-tour-rouen-76/']
];
var DIM={puteaux:[16,9],hvt:[16,9],yerres:[16,9],randan:[1600,1015],vaucresson:[4,3],villemandeur:[4,3],fibres:[4,3],galamus:[4,3],sdv:[1600,2264],caps:[1600,1538],rochecorbon:[16,9],hourdel:[16,9],duclair:[4,3],fontainebleau:[1600,979],solterre:[20,9],dieppe:[20,9],boissy:[16,9]};
var P={},LIST=RAW.map(function(r,i){var d=DIM[r[0]];var o={id:r[0],name:r[1],place:r[2],dept:r[3],type:r[4],img:d?'img/'+r[0]+'.jpg':null,ratio:d?d[0]+'/'+d[1]:r[6],slug:r[7],region:REG[r[3]],t:(i%4)+1};P[o.id]=o;return o});
function mission(p){return p.type==='e'?'Étude':'Maîtrise d’œuvre'}
function loc(p){return p.place+' ('+p.dept+')'}

// fiches détaillées (contenus publiés sur le site actuel)
function pg(n){return n===1?'img/puteaux.jpg':'remote/'+n}
var FULL={
puteaux:{
  tags:'Square urbain, jeux sur mesure, roseraie, aires sportives, fontaine',
  facts:[['Mission','Maîtrise d’œuvre'],['Localisation','Puteaux (92)'],['Maîtrise d’ouvrage','Ville d’Antony*'],['Équipe','Troisième Paysage'],['Superficie','3 600 m²'],['Budget','350 000 € HT'],['Date','2016']],
  foot:'* Tel que publié sur le site actuel ; la description du projet cite la ville de Puteaux.',
  intro:'Un jardin de proximité qui prend la rose des vents pour principe de composition, des fontaines à l’aire de jeux.',
  gallery:[1,2,3,4,5,6,7,8,9,10].map(function(n){return pg(n)}),
  sections:[
   {after:0,h:'Contexte',p:['La ville de Puteaux aménage un jardin de proximité qui s’inscrit dans la trame verte de l’écoquartier des Bergères, tout proche.','Le jardin offre une palette végétale riche et fleurie.']},
   {after:1,h:'Un jardin dessiné autour de la rose des vents',ul:['Le cœur du jardin s’organise autour d’un anneau circulaire : un kiosque flanqué de deux ailes en pergolas fleuries, un ensemble de fontaines et une pelouse centrale.','Une roseraie rassemble de nombreuses espèces différentes.','Une aire de jeux sur le thème du vent compte trois montgolfières et des moulins à vent imaginés par Troisième Paysage : des jeux à actionner, à faire tourner, pour grimper ou sautiller.','La signalétique botanique et directionnelle reprend le dessin de la rose des vents.']},
   {after:3,h:'Un cadre végétal protégé',p:['La périphérie du jardin se pare de merlons plantés, qui créent un cadre végétal à l’écart de la circulation pour la promenade, le jeu et la détente.','Un parcours sportif et une aire canine complètent le jardin.']}
  ],
  prev:'caps',next:'villemandeur'},
fibres:{
  tags:'Maîtrise d’œuvre, renaturation, écologie, nouvelle pratique',
  facts:[['Mission','Maîtrise d’œuvre'],['Localisation','Quiévrechain (59)'],['Maîtrise d’ouvrage','Ville de Quiévrechain'],['Équipe','Troisième Paysage'],['Superficie','4,2 ha'],['Budget','110 000 € HT'],['Date','Livré en 2021']],
  intro:'Une renaturation qui prend la peupleraie vieillissante pour catalyseur, plutôt qu’un projet immobilier.',
  gallery:[1,2,3,4,5,6].map(function(n){return n===1?'img/fibres.jpg':'remote/'+n}),
  sections:[
   {after:0,h:'Contexte',p:['Le site industriel, derrière une zone commerciale rue de Cronte Voye, a été dépollué puis réensemencé en jachère. Au fond subsiste une peupleraie dont le sous-étage est très développé.','La ville de Quiévrechain a voulu donner une autre dimension à ce lieu, sans choisir la facilité d’un projet immobilier.']},
   {after:1,h:'Le processus de renaturation',ul:['Abattre les zones trop vieillissantes de la peupleraie, en préservant le sous-étage.','Conserver les zones faunistiques et floristiques intéressantes : protection de certains végétaux, maintien d’habitats comme les arbres chandelles.','Replanter de jeunes plants pour amorcer la renaturation.','Réutiliser les résidus d’abattage en ramées horizontales et verticales, qui protègent les jeunes plantations, gardent la fraîcheur au sol, amendent le sol et piègent les graines de ligneux.','Définir un mode de gestion sur plusieurs dizaines d’années pour conserver certains milieux, comme la prairie et le bosquet.']}
  ],
  prev:'duclair',next:'fontainebleau'}
};

var EXP=[
 {h:'Grand Paysage',d:'Explorer un territoire à grande échelle : évolution des paysages, stratégie d’accueil, sites remarquables.',m:'Études',pr:['caps','fontainebleau','baie','hourdel','lichtenberg'],img:'caps'},
 {h:'Maîtrise d’œuvre urbaine et paysagère',d:'Concevoir et suivre la réalisation d’espaces publics : squares, places, parvis, voies douces, cours d’école.',m:'Maîtrise d’œuvre',pr:['puteaux','yerres','vaucresson','rochecorbon','boissy'],img:'puteaux'},
 {h:'Renaturation',d:'Reconquérir des friches industrielles en s’appuyant sur les dynamiques végétales en place, avec une gestion pensée sur plusieurs dizaines d’années.',m:'Études, maîtrise d’œuvre',pr:['fibres','corbeau'],img:'fibres'},
 {h:'Préservation et valorisation patrimoniale',d:'Révéler et ouvrir au public des abbayes, châteaux et domaines.',m:'Études',pr:['hambye','soissons','fleckenstein','randan','folies'],img:'randan'},
 {h:'Gestion d’espaces naturels sensibles',d:'Domaine de compétence cité par l’Atelier. Description détaillée et références à fournir par l’agence.',m:'À compléter',pr:[],img:null},
 {h:'Accompagnement architectural',d:'Domaine de compétence cité par l’Atelier. Description détaillée et références à fournir par l’agence.',m:'À compléter',pr:[],img:null}
];

var TP='Troisième Paysage';
function F(mo,eq,sup,bud,date,mission){var a=[['Mission',mission||'']];a.push(['Maîtrise d’ouvrage',mo]);a.push(['Équipe',eq]);if(sup)a.push(['Superficie',sup]);if(bud)a.push(['Budget',bud]);a.push(['Date',date]);return a}
var MORE={
yerres:{n:5,tags:'Place de la gare, esplanade, végétalisation, fontaine',facts:F('Ville de Yerres','Cabinet Merlin (mandataire), '+TP,'13 000 m²','3 200 000 € HT','2022-2024'),
 intro:'Une esplanade qui ouvre la gare sur le bois de la Grange, unifiée par la pierre de Comblanchien.',
 secs:[{h:'Contexte',p:['La commune refond le quartier de la gare autour de trois objectifs : faciliter les transports et le stationnement, implanter des services publics et des logements, embellir le quartier avec une place piétonne entre la gare et la rue de Concy.','L’Atelier a repris le projet en phase PRO-DCE et réexaminé ses grandes lignes avant travaux, en respectant les intentions initiales.']},
 {h:'Le parti d’aménagement',ul:['Depuis la sortie de la gare, la topographie offre un panorama sur le bois de la Grange.','La pierre de Comblanchien unifie l’espace et met en valeur l’escalier d’entrée.','Une fontaine délimite l’espace intermédiaire et apporte fraîcheur et mouvement.','La rue de Concy, à l’arrière de la gare, est largement retravaillée, avec un séquençage végétal qui accompagne le parvis et le grand escalier.']},
 {h:'Palette végétale',p:['Plus de 2 000 arbustes et 115 arbres sont plantés sur l’esplanade.']}]},
vaucresson:{n:8,tags:'Square public, jeux et mobilier, parvis, gestion des eaux pluviales',facts:F('Ville de Vaucresson','Troisième Paysage (mandataire), Servicad','2 000 m²','500 000 € HT','2025'),
 intro:'Un square de centre-ville plus inclusif et perméable, pensé comme un seul espace végétalisé.',
 secs:[{h:'Contexte',p:['La Ville souhaite un square plus inclusif et plus perméable, avec de nouvelles plantations et du mobilier neuf. Situé en centre-ville, près de la place du marché, de la médiathèque et du centre culturel, il offre un lieu de détente et de jeux pour le quartier.']},
 {h:'Un espace d’un seul tenant',p:['Les nombreux talus sont supprimés pour créer un espace végétalisé continu. Le parvis et la rampe PMR sont réaménagés pour gagner en végétation, et la rue piétonne à l’est est refaite en pavés à joints enherbés.'],ul:['Un théâtre de verdure végétalisé.','Une aire de jeux sans clôture.','Une table de ping-pong, des tables d’échecs, des bancs et des transats.']},
 {h:'Eau et perméabilité',p:['Les aménagements infiltrent les eaux pluviales de l’esplanade de la médiathèque, complétés par deux noues. Le square est perméable sur environ 85 % de sa surface.']}]},
villemandeur:{n:7,tags:'Requalification du centre-ville, stationnements, route départementale, renaturation',facts:F('Ville de Villemandeur et Agglomération Montargoise et Rives du Loing','Troisième Paysage (mandataire), Terr&Am','8 870 m²','950 000 € HT','2020'),
 intro:'Une ville-rue dont l’avenue surdimensionnée devient une structure végétale, avec un espace nature en prairie fleurie.',
 secs:[{h:'Enjeux',p:['Villemandeur est une ville-rue : commerces et équipements se concentrent sur l’avenue principale. Le site présentait des voiries surdimensionnées, très peu de végétation sur l’avenue de la Libération (route départementale), une forte imperméabilisation et un déséquilibre entre minéral et végétal.']},
 {h:'Trois secteurs',ul:['Avenue de la Libération : une structure végétale relie les aménagements voisins et organise l’espace piéton. Des bandes plantées séparent un trottoir élargi, avec des bordures qui permettent aux massifs de recueillir les eaux pluviales.','Espace nature : un relief de buttes et de creux, dont certains se remplissent d’eau, avec des enrochements qui créent des habitats et une prairie fleurie pour les pollinisateurs.','Parking au sud : une noue plantée récupère les eaux de pluie, et le stationnement est en pavés à joints gazon.']}]},
caps:{n:5,tags:'Étude de grand paysage, analyse d’observatoire photographique, prescriptions',facts:F('Parc naturel régional des Caps et Marais d’Opale',TP,'PNR des Caps et Marais d’Opale','','2020-2021'),
 intro:'Lire quinze ans d’évolution des paysages d’un parc naturel régional à partir de son observatoire photographique.',
 secs:[{h:'Contexte',p:['Depuis 2006, le Parc dispose d’un observatoire photographique pour suivre objectivement l’évolution de ses paysages. Trois campagnes ont été menées : 2006, 2012 et 2018.']},
 {h:'Démarche',p:['L’Atelier a d’abord repéré graphiquement les évolutions sur les clichés, selon cinq thèmes : paysage, agriculture, urbanisme, infrastructures et industries. Elles ont ensuite été analysées par unité paysagère, selon le découpage de l’atlas paysager, pour dégager les grands enjeux du territoire.']},
 {h:'Un carnet de préconisations',p:['L’étude se conclut par un carnet de préconisations sur le paysage et sur les façons d’habiter, de pratiquer et de cultiver le territoire. Il sert à suivre les évolutions et à hiérarchiser les actions.']}]},
solterre:{n:7,tags:'Rue, entrée de ville, centre-bourg',facts:F('Agglomération Montargoise et rives du Loing','Troisième Paysage (mandataire), Terr&Am','500 ml','1 200 000 € HT','2021'),
 intro:'La traversée d’un village par une route départementale, rendue plus sûre et plus vivante grâce au végétal.',
 secs:[{h:'Contexte et objectifs',p:['Le projet redessine une partie de la RD 2007, voie de circulation majeure qui traverse Solterre. Il vise à améliorer le confort et la sécurité de tous les usagers, en particulier piétons et cyclistes, et à donner à la route un caractère plus identifiable et plus accueillant, dans le respect du village historique.'],ul:['Valoriser le paysage de l’entrée de ville et du centre-bourg.','Réorganiser les cheminements piétons, cycles et le stationnement.','Traiter qualitativement la mairie, l’école et les commerces.','Redessiner les voies et ajouter un carrefour à feux.','Redynamiser les commerces et la vie du village.','Clarifier le foncier public et privé par acquisitions et cessions.']},
 {h:'Le végétal pour apaiser',p:['Les voies sont séparées par des îlots centraux plus étroits, qui libèrent de l’espace pour les piétons. Les trottoirs sont plantés d’arbustes fleuris et de graminées, et revêtus de matériaux durables : pavés béton et béton désactivé coloré. Des contre-allées donnent aux riverains un accès sûr. Le projet est conçu pour rester économique à construire et à entretenir.']}]},
dieppe:{n:6,tags:'Place urbaine, parvis, gestion des eaux pluviales',facts:F('Ville de Dieppe','ERA VRD (mandataire), Emulsion, '+TP,'6 200 m²','1 200 000 € HT','2022'),
 intro:'Un parvis qui relie la ville, la gare et l’ancienne halle, et qui accueille l’eau de pluie dans un jardin.',
 secs:[{h:'Contexte',p:['Dans le quartier de la gare et la réhabilitation de l’ancienne halle à tabac, la Ville veut faire du parvis du multiplexe l’interface entre la ville, la gare et la halle.']},
 {h:'Un jardin d’infiltration',p:['Les eaux de la gare routière sont recueillies dans des bassins paysagers d’infiltration, sur un jardin de 1 800 m² organisé en quatre espaces de profondeurs différentes, reliés par des déversements successifs pour absorber les fortes pluies. Une partie des eaux de toiture est récupérée pour les besoins de la ville, et de grandes traversées en bois améliorent les circulations.','Le projet a permis de déminéraliser 30 % du site.']}]},
corbeau:{n:5,tags:'Renouvellement urbain, zone inondable, cours d’eau, renaturation',facts:F('Communauté d’Agglomération Valenciennes Métropole','Troisième Paysage (mandataire), Ad’AUC, Biotope','3 ha','','2022'),
 intro:'Étude préalable à la démolition et à la renaturation d’une ancienne cité minière en zone inondable.',
 secs:[{h:'Contexte',p:['La cité du Corbeau, à Quiévrechain, est une ancienne cité minière située le long de l’Aunelle, à la frontière franco-belge. Elle fait partie des 10 cités minières prioritaires de Valenciennes Métropole pour un projet de renouvellement urbain. Sa situation en zone inondable et l’état sanitaire des bâtiments ont conduit à une étude préalable à la démolition et à la renaturation du site.']},
 {h:'Démarche',p:['Le groupement a analysé l’histoire urbaine, le paysage et les enjeux écologiques, puis élaboré plusieurs scénarios de renaturation et de reconstitution d’un sol vivant. Le projet retenu crée un nouveau maillon de la trame verte et bleue et une diversité de milieux.']},
 {h:'Le projet retenu',ul:['Un verger.','Des zones de boisement avec des plants forestiers.','Des clairières.','Une grande prairie traversée de fossés.','Des cheminements.','Un belvédère urbain au nord, avec une vue sur l’ensemble du site, qui relie l’avenue Jean-Jaurès à la place publique.']}]},
rochecorbon:{n:5,tags:'Voie douce, piste cyclable',facts:F('Ville de Rochecorbon','Troisième Paysage (mandataire), Terr&Am','8 ha','635 000 € HT','2023'),
 intro:'Une voie douce le long de la Bédoire, qui garde l’identité du chemin existant et accentue son caractère champêtre.',
 secs:[{h:'Un lien avec la rivière',p:['Le projet crée une voie douce le long de la Bédoire, affluent de la Loire. Il renforce les liens entre la rivière, ses paysages et le tissu urbain, et apporte une nouvelle offre de mobilité ainsi que des espaces de vie pour les riverains.']},
 {h:'Démarche',p:['L’Atelier a choisi de garder l’identité du chemin existant en accentuant son caractère champêtre. La présence de la rivière est rappelée par la végétation de ripisylve, des panneaux sur les trames bleue et verte, et un mobilier inspiré du vocabulaire ligérien.','La voie traverse des secteurs variés : terrains de sport, jardins potagers, boisements, zones urbaines. La conception est durable et simple à entretenir, avec un minimum d’interventions après les deux ans de parachèvement assurés par l’entreprise.']}]},
fecamp:{n:5,tags:'Requalification urbaine, activités portuaires, commerciales, touristiques et industrielles',facts:F('Ville de Fécamp','En Act architecture (mandataire), '+TP,'5 ha','','2017'),
 intro:'La presqu’île de Fécamp, pièce maîtresse du projet urbain, recentre la ville vers son port.',
 secs:[{h:'Enjeu',p:['La presqu’île, avancée urbaine dans le port et la mer, doit être l’une des pièces maîtresses du projet urbain de Fécamp.']},
 {h:'Trois objectifs',ul:['Mettre en valeur les perspectives sur la ville depuis les quais : vues sur le coteau, cadrages sur le port et la mer, patrimoine.','Réorganiser l’espace en conservant les activités existantes (Musée des Pêcheries, pêche, pôle de maintenance des éoliennes offshore) et développer la valorisation touristique de la presqu’île et des quais.','Créer une continuité touristique et urbaine, avec de nouvelles connexions entre la ville et le site.']}]},
randan:{n:7,tags:'Étude paysagère, stratégie d’accueil touristique, site patrimonial',facts:F('Région Auvergne-Rhône-Alpes','Maîtres du Rêve (mandataire), Troisième Paysage (paysagiste), Laure Marieu (architecte du patrimoine), Cabinet SRHC (hôtellerie), Itinéraires avocats, Les sentinelles des collections (conservation préventive)','110 ha','','2023-2024'),
 intro:'Imaginer l’avenir d’un château en ruine et de son parc de 110 hectares, dont une petite partie seulement est accessible.',
 secs:[{h:'Contexte',p:['Le domaine royal de Randan, du XIXe siècle, fut le château de villégiature du dernier roi de France. Après l’incendie de 1925, il est resté en ruine, puis a connu une renaissance depuis les années 2000.','Le grand parc boisé, conçu à l’origine dans le style jardin à l’anglaise, perd sa structure et ses arbres remarquables sous l’effet du changement climatique.']},
 {h:'Une ouverture progressive',p:['L’étude imagine l’avenir du château et de son domaine. L’ouverture des ruines au public irait de pair avec un retour progressif au tracé d’origine du parc, en tenant compte des usages et contraintes actuels.']},
 {h:'Replanter, mettre en scène',p:['Un vaste programme de replantation avec des essences adaptées au climat est envisagé. Les ambiances du parc seraient remises en valeur par la mise en scène des boisements et des prairies, et les vues sur le grand paysage seraient dégagées. Le potager deviendrait un lieu de partage autour des plantes comestibles.']}]},
soissons:{n:6,tags:'Étude paysagère, stratégie d’accueil touristique, site patrimonial, parc urbain',facts:F('Ville de Soissons','Maîtres du Rêve (mandataire), Troisième Paysage (paysagiste), Laure Marieu (architecte du patrimoine)','3 ha','','2022-2023'),
 intro:'Un site abbatial le plus ouvert possible, relié aux quartiers voisins par un parc urbain.',
 secs:[{h:'Contexte',p:['L’abbaye, fondée au Xe siècle, réunit des bâtiments de différentes époques qui accueillent aujourd’hui un centre d’interprétation, un musée d’art contemporain et d’autres équipements. Le site se trouve à la jonction du centre-ville, de la cité de la musique et de la danse et de quartiers périphériques.']},
 {h:'Un site ouvert',p:['Le projet vise un site le plus ouvert possible, avec la réouverture de passages entre les quartiers, même si certaines parties deviendront payantes. Un parc urbain relie ces secteurs.']},
 {h:'Une intervention sobre',p:['Les séquences du site (parvis, jardin historique, prairies, jardin intime) sont qualifiées. D’anciens volumes disparus sont suggérés par des traitements du sol, qui forment un parcours narratif. Des arbres plantés en périphérie apportent de l’ombre tout en préservant les vestiges enfouis.']}]},
clemenceau:{n:6,tags:'Étude paysagère, site naturel sensible, sentier d’interprétation',facts:F('Département de la Seine-et-Marne',TP,'3,5 ha','','2022'),
 intro:'Revaloriser une prairie inondable classée espace naturel sensible, au bord du Loing.',
 secs:[{h:'Contexte',p:['La prairie Clémenceau est une prairie inondable classée espace naturel sensible, au bord du Loing, près du centre-ville. De grands peupliers, en fin de vie et dangereux, contredisaient le paysage de bord de rivière.']},
 {h:'Démarche',ul:['Les grands peupliers sont en grande partie coupés.','Certains sont conservés et taillés en « chandelle » pour créer de petits abris pour la faune.','De petits bosquets d’essences locales, dont des boutures réalisées sur site, animent le parcours, cadrent des vues et alternent zones ombragées et ensoleillées.']},
 {h:'Un sentier d’interprétation',p:['Le futur sentier sera ponctué d’interventions d’artistes, qui proposeront leur lecture du site et inviteront le visiteur à interroger sa perception en sollicitant ses cinq sens.']}]},
lichtenberg:{n:6,tags:'Étude paysagère, site patrimonial, stratégie touristique',facts:F('Communauté de communes de Hanau-la-Petite-Pierre','Maîtres du Rêve (mandataire), '+TP,'Commune de Lichtenberg et abords','','2024'),
 intro:'Donner envie de s’arrêter dans un village dominé par son château, que beaucoup de visiteurs ne font que traverser.',
 secs:[{h:'Contexte',p:['Lichtenberg se situe sur les hauteurs des Vosges du Nord et s’organise autour de son château. Beaucoup de visiteurs viennent voir le château ou randonner sur les sentiers, mais peu s’arrêtent dans le village.']},
 {h:'Propositions',ul:['Renforcer les cheminements existants entre le village et le château.','Proposer des solutions de stationnement pour une arrivée plus simple et mieux intégrée.','Redessiner la place centrale, point de départ de la découverte du village et de la montée au château, avec plus de verdure et d’ombre.','Créer un petit point d’accueil avec panneau d’information et mobilier, pour guider les visiteurs.','Fleurir les façades typiques alsaciennes.']}]},
hourdel:{n:6,tags:'Étude paysagère, site patrimonial, cahier de recommandations',facts:F('Syndicat mixte de la Baie de Somme','Troisième Paysage (mandataire), Laure Marieu (architecte du patrimoine)','Hameau du Hourdel et abords','','2024'),
 intro:'Un cahier de recommandations pour accompagner l’évolution d’un hameau emblématique de la baie de Somme.',
 secs:[{h:'Contexte',p:['La pointe du Hourdel est réputée pour ses vues sur le grand paysage et le charme de son petit hameau. La hausse du tourisme a fait naître de nouveaux usages qui peuvent fragiliser l’identité du lieu. L’enjeu est d’accompagner l’évolution du hameau tout en préservant son charme.']},
 {h:'Un cahier en fiches',p:['Le cahier est organisé en trois catégories (public, privé et commercial) et guide élus, habitants, services de l’État et commerçants. Il aborde la mise en valeur des vues, l’implantation du bâti, la plantation des jardins, le mobilier et les détails architecturaux des toitures et menuiseries.']}]},
fleckenstein:{n:7,tags:'Étude paysagère, site patrimonial, stratégie touristique',facts:F('Communauté de communes de Sauer-Pechelbronn','Maîtres du Rêve (mandataire), Troisième Paysage (paysagiste), Laure Marieu (architecte du patrimoine), Die Werft (scénographie), Ubiscène (scénographie et muséographie), Itinéraires avocats','Environ 5 ha (abords du château)','350 000 € HT','2022-2023'),
 intro:'Dynamiser les abords du deuxième château fort le plus visité d’Alsace avec un parcours de visite ludique.',
 secs:[{h:'Contexte',p:['Le château de Fleckenstein, ancien château fort semi-troglodytique du XIIe siècle, est le deuxième château fort le plus visité d’Alsace. La communauté de communes souhaite renforcer son attractivité par un parcours de visite ludique.']},
 {h:'Propositions',ul:['Revoir le sens de circulation du parking et l’itinéraire d’accès.','Redessiner l’espace d’accueil pour mieux recevoir randonneurs, cyclistes et familles.','Aménager des espaces de pause ombragés.','Donner une identité nouvelle à la cour de l’ancien corps de ferme, pour mieux répartir les flux de visiteurs.','Créer des aires de jeux et un espace de pique-nique avec vues sur le château, les vergers et la forêt.']}]},
galamus:{n:7,tags:'Tourisme, paysage, environnement, mobilités, géologie, gestion de la fréquentation',facts:F('PNR Corbières Fenouillèdes (Aude et Pyrénées-Orientales)','Maîtres du Rêve (mandataire), Troisième Paysage, Test mobilités','Linéaire de 5 km','','2023'),
 intro:'Une stratégie globale pour répondre à la surfréquentation touristique d’un site classé, traversé par une seule route étroite.',
 secs:[{h:'Contexte',p:['Les gorges, à cheval sur l’Aude et les Pyrénées-Orientales, ont une forte identité géologique et patrimoniale. On les traverse par une seule route étroite, avec des vues sur l’Agly. La fréquentation ne cesse de croître, ce qui pose des enjeux de sécurité, de gestion des flux, de conflits d’usage et de préservation de la biodiversité. La route est à sens unique, et les visiteurs entrent en conflit avec les habitants qui doivent l’emprunter.']},
 {h:'Propositions',ul:['Une gestion qui varie selon les saisons : découverte en mode doux et navettes depuis les parkings, pour fluidifier la circulation locale.','Des belvédères et des panneaux pédagogiques qui valorisent les points de vue et encouragent la balade et les pauses.','Des aménagements à impact minimal sur le paysage, intégrés au site classé.']}]},
folies:{n:5,tags:'Monument historique, espace naturel sensible, patrimoine, restauration',facts:F('Département de Loire-Atlantique','Maîtres du Rêve (mandataire), Troisième Paysage, Laure Marieu (architecte du patrimoine), Christophe Saboureau, Geolia Conseil','3,2 ha','','2019'),
 intro:'Rouvrir progressivement au public un parc de 39 terrasses sur un éperon rocheux dominant la Loire.',
 secs:[{h:'Le site',p:['Le site occupe un éperon rocheux qui domine la Loire d’environ 70 m. Il est structuré autour de 39 terrasses reliées par des escaliers, ornées de faux éléments décoratifs : niches, tourelles, fenêtres et portes en trompe-l’œil. La création du parc est attribuée à Maximilien Siffait et à son fils Oswald.']},
 {h:'Une requalification minimale',p:['Après la fermeture du site pour raisons de sécurité, le Département lance un marché de sécurisation et de mise en valeur, avec une ouverture progressive aux visites. Compte tenu de la richesse architecturale, historique, paysagère et écologique du lieu, le projet privilégie une requalification minimale : les travaux visent surtout à renforcer ou reconstruire les murs.']},
 {h:'Parcours et accueil',p:['Le parcours de visite est repensé pour montrer le maximum de terrasses tout en protégeant la biodiversité : une trentaine seraient accessibles, les plus sensibles sur le plan écologique restant fermées. L’accueil et les accès sont requalifiés pour des visites régulières, avec une partie du parcours accessible aux personnes à mobilité réduite et un stationnement naturel, respectueux des abords.']}]},
baie:{n:5,tags:'Site naturel, grand paysage, gestion de la fréquentation, préservation du littoral',facts:F('Syndicat mixte Baie de Somme Grand Littoral Picard','Troisième Paysage (mandataire), Maîtres du Rêve, Diverscités','7 200 ha','','2016'),
 intro:'Réviser la stratégie territoriale d’un Grand Site de France après quarante ans de développement touristique.',
 secs:[{h:'Contexte',p:['La Baie de Somme a atteint sa maturité touristique après 40 ans de développement actif. Le label Grand Site de France a valorisé ce travail, et le territoire fait partie du club des plus belles baies du monde. Son renouvellement devait permettre de faire le bilan de six années d’actions et de définir de nouvelles perspectives.']},
 {h:'La mission',p:['L’Atelier a repéré les secteurs présentant des dysfonctionnements, notamment sur la gestion des milieux naturels, la gestion des flux, l’accueil du public et la qualité paysagère. La mission a aussi fixé les orientations stratégiques et un programme d’actions à moyen et long terme. Le label a été renouvelé en 2018.']}]}
};
(function(){var AFT=[0,1,3];Object.keys(MORE).forEach(function(k){var m=MORE[k],p=P[k];
 m.facts[0][1]=mission(p);m.facts.splice(1,0,['Localisation',loc(p)]);m.facts=m.facts.filter(function(f){return f[1]});
 // facts: Mission, MO, Localisation... réordonner
 var g=[p.img||'remote/0'];for(var i=1;i<m.n;i++)g.push('remote/'+i);
 m.gallery=g;m.secs.forEach(function(s,i){s.after=AFT[i]});m.sections=m.secs;FULL[k]=m})})();

var TEAM=[
 ['Blandine Vareille','Paysagiste conceptrice · Designer urbain · Associée','Blandine.webp'],
 ['Coline Durand','Paysagiste conceptrice · Géographe','Coline.webp'],
 ['Damien Roidot','Paysagiste concepteur · Gérant fondateur','Damien.webp'],
 ['François Bosset','Paysagiste concepteur · Associé fondateur','Francois.webp'],
 ['Manon Evans','Paysagiste conceptrice · Géographe','Manon.webp']
];

// helpers
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;')}
function ph(url,label,o){o=o||{};var st=o.ratio?' style="aspect-ratio:'+o.ratio+'"':'';
  return '<figure class="ph '+(o.cls||'')+'" data-t="'+(o.t||1)+'"'+st+'><span class="ph-l">'+esc(label)+'</span>'+(url&&url.indexOf('img/')===0?'<img loading="lazy" decoding="async" src="'+ROOT+'assets/'+url+'" alt="'+esc(o.alt||label)+'">':'')+'</figure>'}
var ROOT='';function setRoot(r){ROOT=r}
function href(p,id){if(p==='fiche')return ROOT+'projets/'+P[id].slug.replace(/\/$/,'')+'.html';return ROOT+(p==='accueil'?'index':p)+'.html'}
function go(p,id){return 'href="'+href(p,id)+'"'}
function card(p,o){o=o||{};
  return '<a class="card '+(o.cls||'')+'" '+go('fiche',p.id)+' data-type="'+p.type+'" data-region="'+esc(p.region)+'">'+
   ph(p.img,'Photo · '+p.name,{ratio:o.ratio||p.ratio,t:p.t,alt:p.name+', '+loc(p)})+
   '<div class="meta"><div><h3>'+p.name+'</h3><span class="pill">'+mission(p)+'</span></div><span class="where">'+loc(p)+'</span></div></a>'}
function chips(ids){return ids.length?'<div class="chips">'+ids.map(function(i){return '<a class="chip" '+go('fiche',i)+'>'+P[i].place+'</a>'}).join('')+'</div>':''}

var V={};

V.accueil=function(){
  var pick=['puteaux','caps','fibres','sdv','galamus','hambye'];
  return ''+
  '<div class="wrap hero"><p class="eyebrow">Atelier de paysagistes concepteurs · Paris · Vendôme · depuis 2012</p>'+
  '<h1>Le troisième paysage : composer entre les usages et le <em class="acc">vivant</em>.</h1>'+
  '<div class="hero-foot"><p class="lead">Du grand paysage à la maîtrise d’œuvre urbaine, de la renaturation à la valorisation du patrimoine, l’Atelier travaille dans des lieux divers et contrastés.</p>'+
  '<div class="cta"><a class="btn arrow" '+go('projets')+'>Découvrir les projets</a><a class="btn ghost" '+go('contact')+'>Nous contacter</a></div></div></div>'+
  '<div class="wrap">'+ph(pg(1),'Photo · Jardin de la rose des vents, Puteaux (92)',{cls:'hero-img',alt:'Jardin de la rose des vents, Puteaux'})+'<div class="cap">Jardin de la rose des vents, Puteaux (92) · maîtrise d’œuvre</div></div>'+

  '<section><div class="wrap"><p class="eyebrow" style="margin-bottom:28px">Le concept</p><div class="concept">'+
   '<div><b>Premier paysage</b><p>Les dynamiques végétales laissées à leur libre développement.</p></div>'+
   '<div><b>Second paysage</b><p>L’aire industrielle : villes minérales, domestication du végétal, schéma automobile.</p></div>'+
   '<div><b>Troisième <em class="acc">paysage</em></b><p>La symbiose visée par l’Atelier : composer avec les usages sans dénaturer, en offrant à la nature un espace pour se développer.</p></div>'+
  '</div><p style="margin-top:28px"><a class="btn ghost arrow" '+go('expertises')+'>Lire le concept</a></p></div></section>'+

  '<section class="rule"><div class="wrap split"><h2>L’Atelier est la somme de ceux qui le composent.</h2>'+
   '<div style="display:grid;gap:20px"><p class="lead">Des paysagistes concepteurs et des géographes, issus d’écoles et d’expériences différentes. Cette pluralité permet d’aborder chaque sujet par des regards multiples.</p>'+
   '<div class="team-line">'+TEAM.map(function(t){return '<div><b>'+t[0]+'</b><span>'+t[1].split(' · ')[0]+'</span></div>'}).join('')+'</div>'+
   '<p><a class="btn ghost arrow" '+go('agence')+'>Rencontrer l’équipe</a></p></div></div></section>'+

  '<section class="rule"><div class="wrap"><div class="page-head" style="padding:0 0 40px"><h2>Ce que l’Atelier prend en charge</h2><p class="muted">Six domaines de compétence, chacun relié aux projets qui l’illustrent.</p></div>'+
   '<div class="expl">'+EXP.map(function(e){return '<div class="exp-row"><h3>'+e.h+'</h3><div style="display:grid;gap:10px"><p>'+e.d+'</p><span class="tag">'+e.m+'</span></div>'+(e.pr.length?chips(e.pr.slice(0,3)):'<span class="muted" style="font-size:.8rem">Références à venir</span>')+'</div>'}).join('')+'</div>'+
   '<p style="margin-top:32px"><a class="btn ghost arrow" '+go('expertises')+'>Voir toutes les expertises</a></p></div></section>'+

  '<section class="rule"><div class="wrap"><div class="page-head" style="padding:0 0 48px"><h2>Projets sélectionnés</h2><p class="muted">Espaces publics, renaturation, grands paysages, patrimoine : un aperçu de vingt-sept références.</p></div>'+
   '<div class="sel">'+
    card(P[pick[0]],{cls:'c7'})+card(P[pick[1]],{cls:'c5 off'})+
    card(P[pick[2]],{cls:'c5'})+card(P[pick[3]],{cls:'c3 off'})+card(P[pick[4]],{cls:'c4'})+
   '</div><p style="margin-top:56px"><a class="btn arrow" '+go('projets')+'>Tous les projets</a></p></div></section>'+

  '<section class="rule"><div class="wrap"><p class="eyebrow" style="margin-bottom:28px">Approche</p><div class="principles">'+
   '<div><h3>Regards multiples</h3><p>Paysagistes et géographes, formés dans des écoles différentes, abordent chaque sujet sous plusieurs angles.</p></div>'+
   '<div><h3>Échanges</h3><p>De nombreux échanges nourrissent chaque projet et lui donnent une approche singulière.</p></div>'+
   '<div><h3>Équilibre</h3><p>Préserver les paysages et les milieux, développer la biodiversité, améliorer la qualité de vie : lutte contre les îlots de chaleur, stockage temporaire des eaux pluviales, insertion paysagère, reconquête de friches.</p></div>'+
  '</div></div></section>'+ contactBand();
};

function contactBand(){return '<section class="contact-band"><div class="wrap split"><h2>Un projet d’étude ou de maîtrise d’œuvre ?</h2><div style="display:grid;gap:8px"><a class="big-link" href="mailto:contact@troisieme-paysage.fr">contact@troisieme-paysage.fr</a><span class="big-link" style="border:0">01 44 83 02 04</span><p class="muted" style="margin-top:8px">32 place Saint Georges, 75009 Paris</p><p style="margin-top:12px"><a class="btn ghost arrow" '+go('contact')+'>Page contact</a></p></div></div></section>'}

var FLT={type:'all',region:'all'};
V.projets=function(){
  var regs={};LIST.forEach(function(p){regs[p.region]=(regs[p.region]||0)+1});
  var rnames=Object.keys(regs).sort();
  var nE=LIST.filter(function(p){return p.type==='e'}).length,nM=LIST.length-nE;
  function btn(k,v,l,n){return '<button class="fbtn" data-f="'+k+'" data-v="'+esc(v)+'" aria-pressed="'+(FLT[k]===v)+'">'+l+(n!=null?'<small>'+n+'</small>':'')+'</button>'}
  return ''+
  '<div class="wrap page-head"><h1>Projets</h1><p class="lead muted">Maîtrises d’œuvre et études : des espaces publics aux grands paysages, de la renaturation d’une friche industrielle à la valorisation d’un site patrimonial.</p></div>'+
  '<div class="filters"><div class="wrap">'+
   '<div class="fgroup"><span class="lbl">Mission</span><div class="fscroll">'+btn('type','all','Tous',LIST.length)+btn('type','e','Études',nE)+btn('type','m','Maîtrises d’œuvre',nM)+'</div></div>'+
   '<div class="fgroup"><span class="lbl">Région</span><div class="fscroll">'+btn('region','all','Toutes')+rnames.map(function(r){return btn('region',r,r,regs[r])}).join('')+'</div></div>'+
   '<div class="fcount"><span id="count" aria-live="polite"></span><button class="reset" id="reset" hidden>Tout afficher</button></div>'+
  '</div></div>'+
  '<div class="wrap"><div class="grid" id="grid">'+LIST.map(function(p){return card(p)}).join('')+'</div><p class="empty" id="empty" hidden>Aucun projet ne correspond à cette combinaison. Choisissez « Tout afficher ».</p></div>'+ contactBand();
};
V.fiche=function(id){
  var p=P[id]||P.puteaux,d=FULL[p.id];
  var out='<div class="wrap"><div class="crumbs"><a '+go('projets')+'>← Projets</a><span>/</span><span>'+p.name+'</span></div></div>';
  var heroImg=d?d.gallery[0]:p.img;
  out+='<div class="wrap fiche-hero">'+ph(heroImg,'Photo · '+p.name,{t:p.t,alt:p.name+', '+loc(p)})+'</div>';
  out+='<div class="wrap fiche-head"><div style="grid-column:1/-1"><p class="eyebrow" style="margin-bottom:16px">'+mission(p)+' · '+loc(p)+'</p></div><h1>'+p.name+'</h1>';
  var facts=d?d.facts:[['Mission',mission(p)],['Localisation',loc(p)]];
  out+='<div><dl class="facts">'+facts.map(function(f){return '<div><dt>'+f[0]+'</dt><dd>'+f[1]+'</dd></div>'}).join('')+'</dl>'+(d&&d.foot?'<p class="cap" style="padding-top:10px">'+d.foot+'</p>':'')+'</div>';
  out+='<div style="display:grid;gap:20px"><p class="fiche-intro">'+(d?d.intro:p.name+', '+loc(p)+'.')+'</p>'+(d?'<p class="muted">'+d.tags+'</p>':'')+'</div></div>';
  if(d){
    var imgs=d.gallery.slice(1),pat=[['c12','16/9'],['c7','4/3','c5','4/5'],['c5','4/5','c7','4/3'],['c8','3/2']],rows=[],i=0,r=0,total=d.gallery.length;
    out+='<div class="wrap rows">';
    while(i<imgs.length||r<=3){
      var pt=pat[r%4],cells='';
      for(var k=0;k<pt.length&&i<imgs.length;k+=2,i++){
        cells+='<div class="'+pt[k]+'">'+ph(imgs[i],'Photo '+(i+2)+' · '+p.name,{ratio:pt[k+1],t:p.t,alt:p.name+', vue '+(i+2)})+'<div class="cap">'+(i+2)+' / '+total+' · '+p.name+'</div></div>';
      }
      if(cells)out+='<div class="row">'+cells+'</div>';
      d.sections.forEach(function(s){if(s.after===r){
        out+='<div class="txt"><h2>'+s.h+'</h2><div class="body">'+(s.p?s.p.map(function(t){return '<p>'+t+'</p>'}).join(''):'')+(s.ul?'<ul>'+s.ul.map(function(t){return '<li>'+t+'</li>'}).join('')+'</ul>':'')+'</div></div>'}});
      r++;if(i>=imgs.length&&r>3)break;
    }
    out+='</div>';
  }else{
    out+='<div class="wrap rows"><div class="note">Contenu détaillé de cette fiche non encore intégré (la page source n’a pas pu être lue lors de l’extraction). Texte, photographies et documents techniques se reprennent depuis la <a class="chip" href="'+SITE+p.slug+'" target="_blank" rel="noopener">fiche actuelle</a>, dans la même composition que les fiches Puteaux et Quiévrechain (Fibres du Hainaut).</div></div>';
  }
  var ix=LIST.indexOf(p),pv=LIST[(ix+LIST.length-1)%LIST.length],nx=LIST[(ix+1)%LIST.length];var pn='<div class="prevnext"><a '+go('fiche',pv.id)+'><small>Précédent</small>'+pv.name+' · '+pv.place+'</a><a '+go('fiche',nx.id)+' style="text-align:right"><small>Suivant</small>'+nx.name+' · '+nx.place+'</a></div>';
  var sim=['boissy','hvt','yerres','vaucresson','puteaux','fibres'].filter(function(x){return x!==p.id}).slice(0,4);
  out+='<section><div class="wrap" style="display:grid;gap:56px">'+pn+'<div><h2 style="margin-bottom:32px">Projets similaires</h2><div class="sim">'+sim.map(function(x){return card(P[x],{ratio:'4/3'})}).join('')+'</div></div>'+
   '<div class="cta"><a class="btn ghost" '+go('projets')+'>← Retour au portfolio</a><a class="btn arrow" '+go('contact')+'>Parler d’un projet</a></div></div></section>';
  return out;
};

V.agence=function(){
  return ''+
  '<div class="wrap page-head"><h1>L’Atelier est avant tout la somme de ceux qui le composent.</h1><p class="lead muted">Les paysagistes concepteurs et géographes de l’Atelier sont issus d’écoles, de formations et d’expériences différentes. Ensemble, ils forment la singularité et l’essence de Troisième Paysage.</p></div>'+
  '<section style="padding-top:24px"><div class="wrap"><div class="team">'+TEAM.map(function(t,i){return '<div>'+ph('2024/06/'+t[2],'Portrait · '+t[0],{ratio:'3/4',t:(i%4)+1,alt:t[0]})+'<h3>'+t[0]+'</h3><p>'+t[1].split(' · ').join('<br>')+'</p></div>'}).join('')+'</div>'+
   '<p class="muted" style="margin-top:36px;font-size:.88rem">Depuis 2012 : Adrien Defosse, Floriane Gormotte, Mazdak Rohani, Maxime Nauleau, Malena Houry.</p></div></section>'+
  '<section class="rule"><div class="wrap"><div class="split" style="margin-bottom:56px"><h2>Né d’une rencontre, d’une expérience et d’une envie.</h2><p class="lead">Cette pluralité permet d’approcher les sujets par des regards multiples. De nombreux échanges nourrissent chaque projet et amènent une approche unique.</p></div>'+
   '<div class="hist">'+
    '<div>'+ph('2024/06/une-rencontre.jpg','Photo · La rencontre',{ratio:'4/3',t:1})+'<div class="y">2003</div><h3>La rencontre</h3><p>À l’École Supérieure d’Architecture des Jardins, des paysagistes se rencontrent, forts de leurs expériences dans différentes agences.</p></div>'+
    '<div>'+ph('2024/06/une-experience.jpg','Photo · L’expérience',{ratio:'4/3',t:2})+'<div class="y">2012</div><h3>L’expérience</h3><p>Grâce au Festival des Jardins, le collectif réalise le jardin « Sens, dessus, dessous ». L’expérience renforce l’envie de travailler ensemble.</p></div>'+
    '<div>'+ph('2024/06/une-envie.jpg','Photo · L’envie',{ratio:'4/3',t:3})+'<div class="y">L’envie</div><h3>Des projets « propres »</h3><p>Concevoir des projets singuliers et partager au sein d’une même équipe : c’est le moteur de l’Atelier.</p></div>'+
   '</div>'+
   '<div class="after"><div><div class="y">2022</div><p>L’agence, historiquement basée à Paris, ouvre une antenne à Vendôme.</p></div><div><div class="y">2024</div><p>La plus ancienne salariée de l’agence devient associée.</p></div></div>'+
   '<p class="muted" style="margin-top:36px;max-width:64ch">Durant les premières années, l’Atelier a reçu le soutien de Michel Pena et de Loïc Pianfetti, en participant à des concours, des projets d’études et de maîtrise d’œuvre.</p></div></section>'+
  '<section class="rule"><div class="wrap"><h2 style="margin-bottom:40px">Retrouvez l’agence</h2><div class="sites">'+
   '<div>'+ph('2024/06/agence-paris.jpg','Photo · L’agence de Paris',{t:4})+'<h3>Paris</h3><p class="muted">32 place Saint Georges, 75009 Paris<br>01 44 83 02 04</p></div>'+
   '<div>'+ph('2025/05/Facade-Vendome-e1747839171528.jpg','Photo · L’antenne de Vendôme',{t:2})+'<h3>Vendôme</h3><p class="muted">Antenne ouverte en 2022.<br>Adresse non publiée sur le site actuel.</p></div></div>'+
   '<p style="margin-top:40px"><a class="btn ghost arrow" '+go('expertises')+'>Le concept du troisième paysage</a></p></div></section>'+ contactBand();
};

V.expertises=function(){
  return ''+
  '<div class="wrap page-head"><h1>Ce que l’Atelier prend en charge</h1><p class="lead muted">Six domaines de compétence, avec les projets qui les illustrent. Chaque nom de lieu ouvre la fiche du projet.</p></div>'+
  '<div class="wrap">'+EXP.map(function(e){
     var im=e.img?P[e.img]:null;
     return '<article class="xp">'+(im?ph(im.img,'Photo · '+im.name,{t:im.t,alt:im.name}):ph(null,'Visuel à fournir par l’agence',{t:4}))+
      '<div class="t"><h2>'+e.h+'</h2><p>'+e.d+'</p><dl><dt>Types de missions</dt><dd>'+e.m+'</dd></dl>'+(e.pr.length?'<div><dl><dt style="margin-bottom:8px">Projets</dt></dl>'+chips(e.pr)+'</div>':'')+'</div></article>'}).join('')+'</div>'+
  '<section class="rule"><div class="wrap"><div class="split"><div><p class="eyebrow" style="margin-bottom:16px">Le concept</p><h2>Premier, second, <em class="acc">troisième</em> paysage.</h2></div>'+
   '<div style="display:grid;gap:18px;max-width:62ch"><p><b>Le premier paysage</b> regroupe les dynamiques naturelles végétales laissées à leur libre développement : un Éden révolu où l’homme n’aurait pas encore imposé sa marque.</p>'+
   '<p><b>Le second paysage</b> est celui de l’aire industrielle et de la volonté de l’homme moderne d’adapter son environnement à ses attentes : villes minérales, domestication végétale, schéma automobile global.</p>'+
   '<p><b>Le troisième paysage</b> est la symbiose vers laquelle tend l’Atelier : composer entre les attentes et les usages de la société, sans dénaturer les paysages, en offrant à la nature un espace d’expression. Travailler cet équilibre, c’est préserver les paysages et les milieux, œuvrer pour la biodiversité et augmenter la qualité de vie.</p>'+
   '<p class="muted">Conscient de la dualité entre dynamiques urbaines et rurales, l’Atelier accompagne cet équilibre en conservant les spécificités de chaque milieu.</p></div></div>'+
   ph('2025/05/Frise-site-internet-FINALE-pour-site-web-scaled.jpg','Frise · Les trois paysages',{cls:'frise',t:3})+
   '<p style="margin-top:40px"><a class="btn arrow" '+go('projets')+'>Découvrir les projets</a></p></div></section>'+ contactBand();
};

V.contact=function(){
  function row(l,v,c){return '<div><span class="lbl">'+l+'</span><span class="val">'+v+'</span>'+(c?'<button class="copy" data-copy="'+esc(c)+'">Copier</button>':'<span></span>')+'</div>'}
  return ''+
  '<div class="wrap page-head"><h1>Contact</h1><p class="lead muted">Pour en savoir davantage sur l’Atelier et ses projets de maîtrise d’œuvre ou d’étude, écrivez-nous ou appelez-nous.</p></div>'+
  '<section style="padding-top:24px"><div class="wrap split"><div class="contact-list" style="grid-column:1/-1">'+
   row('E-mail','<a href="mailto:contact@troisieme-paysage.fr" style="border-bottom:1px solid var(--accent)">contact@troisieme-paysage.fr</a>','contact@troisieme-paysage.fr')+
   row('Téléphone','01 44 83 02 04','01 44 83 02 04')+
   row('Paris','32 place Saint Georges, 75009 Paris','32 place Saint Georges, 75009 Paris')+
   row('Vendôme','Antenne ouverte en 2022','')+
   row('LinkedIn','<a href="https://fr.linkedin.com/company/atelier-troisieme-paysage" target="_blank" rel="noopener" style="border-bottom:1px solid var(--accent)">Atelier Troisième Paysage</a>','')+
  '</div><div class="cta" style="grid-column:1/-1;margin-top:8px"><a class="btn arrow" href="mailto:contact@troisieme-paysage.fr">Écrire à l’Atelier</a><a class="btn ghost" '+go('projets')+'>Voir les projets</a></div>'+
  '<p class="muted" style="grid-column:1/-1;font-size:.85rem">Si le lien e-mail ne s’ouvre pas, copiez l’adresse avec le bouton ci-dessus.</p></div></section>';
};

export{V,LIST,P,FULL,EXP,TEAM,setRoot,href,mission,loc};
