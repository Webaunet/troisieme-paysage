<?php
/** Valeurs par défaut des textes modifiables (Personnaliseur > Troisième Paysage). */
if (!defined('ABSPATH')) exit;

function tp_defaults() {
	return array(
		// Coordonnées
		'email'        => 'contact@troisieme-paysage.fr',
		'phone'        => '01 44 83 02 04',
		'address'      => '32 place Saint Georges, 75009 Paris',
		'linkedin'     => 'https://fr.linkedin.com/company/atelier-troisieme-paysage',
		'legal_url'    => 'http://troisieme-paysage.fr/mentions-legales/',
		'legal_text'   => 'SARL Troisième Paysage · siège : 32 place Saint-Georges, 75009 Paris · SIRET 753 656 057 00035 · directeur de la publication : Damien Roidot (gérant).',
		'tagline'      => 'Atelier de paysagistes · Paris · Vendôme',
		'footer_text'  => 'Depuis 2012, l’Atelier explore l’ensemble des facettes du métier de paysagiste.',
		// Accueil
		'hero_eyebrow' => 'Atelier de paysagistes concepteurs · Paris · Vendôme · depuis 2012',
		'hero_title'   => 'Le troisième paysage : composer entre les usages et le <em class="acc">vivant</em>.',
		'hero_intro'   => 'Du grand paysage à la maîtrise d’œuvre urbaine, de la renaturation à la valorisation du patrimoine, l’Atelier travaille dans des lieux divers et contrastés.',
		'concept_1_t'  => 'Premier paysage',
		'concept_1_d'  => 'Les dynamiques végétales laissées à leur libre développement.',
		'concept_2_t'  => 'Second paysage',
		'concept_2_d'  => 'L’aire industrielle : villes minérales, domestication du végétal, schéma automobile.',
		'concept_3_t'  => 'Troisième paysage',
		'concept_3_d'  => 'La symbiose visée par l’Atelier : composer avec les usages sans dénaturer, en offrant à la nature un espace pour se développer.',
		'atelier_title'=> 'L’Atelier est la somme de ceux qui le composent.',
		'atelier_text' => 'Des paysagistes concepteurs et des géographes, issus d’écoles et d’expériences différentes. Cette pluralité permet d’aborder chaque sujet par des regards multiples.',
		'projets_intro'=> 'Maîtrises d’œuvre et études : des espaces publics aux grands paysages, de la renaturation d’une friche industrielle à la valorisation d’un site patrimonial.',
		'approche_1_t' => 'Regards multiples',
		'approche_1_d' => 'Paysagistes et géographes, formés dans des écoles différentes, abordent chaque sujet sous plusieurs angles.',
		'approche_2_t' => 'Échanges',
		'approche_2_d' => 'De nombreux échanges nourrissent chaque projet et lui donnent une approche singulière.',
		'approche_3_t' => 'Équilibre',
		'approche_3_d' => 'Préserver les paysages et les milieux, développer la biodiversité, améliorer la qualité de vie : lutte contre les îlots de chaleur, stockage temporaire des eaux pluviales, insertion paysagère, reconquête de friches.',
		'cta_title'    => 'Un projet d’étude ou de maîtrise d’œuvre ?',
		// Agence
		'hist_1_y' => '2003', 'hist_1_t' => 'La rencontre',
		'hist_1_d' => 'À l’École Supérieure d’Architecture des Jardins, des paysagistes se rencontrent, forts de leurs expériences dans différentes agences.',
		'hist_2_y' => '2012', 'hist_2_t' => 'L’expérience',
		'hist_2_d' => 'Grâce au Festival des Jardins, le collectif réalise le jardin « Sens, dessus, dessous ». L’expérience renforce l’envie de travailler ensemble.',
		'hist_3_y' => 'L’envie', 'hist_3_t' => 'Des projets « propres »',
		'hist_3_d' => 'Concevoir des projets singuliers et partager au sein d’une même équipe : c’est le moteur de l’Atelier.',
		'hist_4_y' => '2022', 'hist_4_d' => 'L’agence, historiquement basée à Paris, ouvre une antenne à Vendôme.',
		'hist_5_y' => '2024', 'hist_5_d' => 'La plus ancienne salariée de l’agence devient associée.',
		'soutien'      => 'Durant les premières années, l’Atelier a reçu le soutien de Michel Pena et de Loïc Pianfetti, en participant à des concours, des projets d’études et de maîtrise d’œuvre.',
		'alumni'       => 'Depuis 2012 : Adrien Defosse, Floriane Gormotte, Mazdak Rohani, Maxime Nauleau, Malena Houry.',
		'vendome_text' => 'Antenne ouverte en 2022. Adresse non publiée sur le site actuel.',
		'contact_intro'=> 'Pour en savoir davantage sur l’Atelier et ses projets de maîtrise d’œuvre ou d’étude, écrivez-nous ou appelez-nous.',
		'expertises_intro' => 'Six domaines de compétence, avec les projets qui les illustrent. Chaque nom de lieu ouvre la fiche du projet.',
	);
}

/** Champs du Personnaliseur : clé => [section, libellé, type]. */
function tp_customizer_fields() {
	return array(
		'tp_contact' => array('Coordonnées et pied de page', array(
			'email' => array('E-mail', 'text'), 'phone' => array('Téléphone', 'text'), 'address' => array('Adresse', 'text'),
			'linkedin' => array('Lien LinkedIn', 'url'), 'legal_url' => array('Lien des mentions légales', 'url'),
			'legal_text' => array('Mentions du pied de page', 'textarea'), 'tagline' => array('Signature sous le logo', 'text'),
			'footer_text' => array('Phrase du pied de page', 'textarea'),
		)),
		'tp_home' => array('Page d’accueil', array(
			'hero_eyebrow' => array('Sur-titre', 'text'), 'hero_title' => array('Titre (balise <em> autorisée)', 'textarea'), 'hero_intro' => array('Introduction', 'textarea'),
			'concept_1_t' => array('Concept 1, titre', 'text'), 'concept_1_d' => array('Concept 1, texte', 'textarea'),
			'concept_2_t' => array('Concept 2, titre', 'text'), 'concept_2_d' => array('Concept 2, texte', 'textarea'),
			'concept_3_t' => array('Concept 3, titre', 'text'), 'concept_3_d' => array('Concept 3, texte', 'textarea'),
			'atelier_title' => array('Bloc Atelier, titre', 'text'), 'atelier_text' => array('Bloc Atelier, texte', 'textarea'),
			'approche_1_t' => array('Approche 1, titre', 'text'), 'approche_1_d' => array('Approche 1, texte', 'textarea'),
			'approche_2_t' => array('Approche 2, titre', 'text'), 'approche_2_d' => array('Approche 2, texte', 'textarea'),
			'approche_3_t' => array('Approche 3, titre', 'text'), 'approche_3_d' => array('Approche 3, texte', 'textarea'),
			'cta_title' => array('Bandeau contact, titre', 'text'),
		)),
		'tp_pages' => array('Pages Projets, Agence, Expertises, Contact', array(
			'projets_intro' => array('Projets, introduction', 'textarea'), 'expertises_intro' => array('Expertises, introduction', 'textarea'),
			'contact_intro' => array('Contact, introduction', 'textarea'),
			'hist_1_y' => array('Histoire 1, date', 'text'), 'hist_1_t' => array('Histoire 1, titre', 'text'), 'hist_1_d' => array('Histoire 1, texte', 'textarea'),
			'hist_2_y' => array('Histoire 2, date', 'text'), 'hist_2_t' => array('Histoire 2, titre', 'text'), 'hist_2_d' => array('Histoire 2, texte', 'textarea'),
			'hist_3_y' => array('Histoire 3, date', 'text'), 'hist_3_t' => array('Histoire 3, titre', 'text'), 'hist_3_d' => array('Histoire 3, texte', 'textarea'),
			'hist_4_y' => array('Étape 4, date', 'text'), 'hist_4_d' => array('Étape 4, texte', 'textarea'),
			'hist_5_y' => array('Étape 5, date', 'text'), 'hist_5_d' => array('Étape 5, texte', 'textarea'),
			'soutien' => array('Soutiens des premières années', 'textarea'), 'alumni' => array('Anciens de l’équipe', 'textarea'),
			'vendome_text' => array('Texte Vendôme', 'textarea'),
		)),
	);
}
