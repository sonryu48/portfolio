import { JSX, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { agile, angular, api, cycleV, man, globe, html, sql, veille, vba } from "../assets/images";

type CompLookup = {
  html: JSX.Element;
  angular: JSX.Element;
  api: JSX.Element;
  vba: JSX.Element;
  sql: JSX.Element;
  veille: JSX.Element;
  cycleV: JSX.Element;
  agile: JSX.Element;
  international: JSX.Element;
  autonomie: JSX.Element;
};

const contentLookup: CompLookup = {
  html: (
    <>
      <h2>
        HTML
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le HTML est un langage balise utilisé massivement sur internet car il est le squelette des pages web. Sorties initialement avant les années 2000, il est aujourd’hui dans sa version HTML5. Fréquemment utilisé avec des langages comme JavaScript ou CSS, il est le langage incontournable de tous les développeurs web. Simple à prendre en main, il est aussi adapté aux débutants et est souvent le point d'entrée vers le développement web.
        </p>

      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mon expérience
        </h3>

        <p>
          Comme je l'ai mentionné précédemment, le HTML est massivement utilisé et est un bon point d’entrée dans le monde du développement. Il est donc tout naturel que je sois passé par son utilisation aussi.
        </p>
        <p>
          D’abord, encore au lycée, c’est à ce moment que mon chemin à croisé la route du HTML. J’y ai eu des cours et pour me faire évaluer, j’ai réalisé un site portfolio (beaucoup moins détaillé que celui-ci) dans lequel j’ai pu montrer ma compréhension basique des balises, simple comme la balise p ou plus complexe avec la balise de lien a.
        </p>
        <p>
          Au cours de mon premier projet scolaire avec ESIEA, j’ai pu réaliser un site vitrine dans le projet <b>Lotus</b>, ici j’ai appris à gérer des images et l’utilisation de blocs pour mieux encadrer les éléments de la page et leur donner une cohérence. Mais la principale amélioration dont j’ai fait part a été la liaison avec CSS. Cela a permis de donner vie à ce site web en le rendant plus attractif et tape-à-l’oeil.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
        Bien que le HTML soit simple à appréhender, il peut tout de même être plus compliqué à maîtriser à la perfection. 
        <br/>
        En effet plus on va profondément, plus des couches se rajoutent. Le HTML est comme la face d’un iceberg, d’abord le HTML et ses balises puis plus on descend profondément, plus on découvre le CSS, le javaScript pour ajouter une logique et des calculs, des frameworks et j’en passe. Il m’est donc difficile de dire que je maîtrise le HTML car le sujet est très vaste et je découvrirai forcément de nouveaux sujets à améliorer se basant sur HTML.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          La maîtrise du HTML est une compétence importante pour le développement web car elle est utilisée dans la quasi-totalité des projets concernant des sites web, sur réseau ouvert internet ou fermé intranet. Elle me sera donc toujours utile à l'avenir.
        <br/>
          Additionnellement, c’est une technologie que j’aime utiliser et dont j'apprécie en apprendre plus ainsi qu'en renforcer la maîtrise de ce dernier, la meilleure manière d’en savoir plus et de travailler avec, et c’est pourquoi j’aimerais à l'avenir travailler plus avec HTML.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lotus"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Lotus
        </Link>

        <Link
          to="../réalisations/transurvey"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          TranSurvey
        </Link>
      </section>
    </>
  ),
  angular: (
    <>
      <h2>
        Angular
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
        Angular est un framework open source créé et mis à disposition du public en 2016 par la grande entreprise de Google.
        <br/>
        Basé sur le langage TypeScript, il est nécessaire de maîtriser ce dernier pour se servir correctement du framework. Il est possible grâce à Angular, de créer des applications web, généralement mono-page, en utilisant l'architecture MVC ou “Model-View-Controller”. Cela permet de séparer la gestion des données, des calculs et logiques, ainsi que l’affichage. Avec ce type d’architecture, le code est plus ordonné, plus lisible et donc plus maintenable.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
          En travaillant avec Angular, j'ai eu des expériences assez différentes.
        </p>
        <p>
          En projet scolaire, j’ai travaillé en équipe sur un site web Angular avec l’équipe de projet <b>TranSurvey</b>. J’ai surtout travaillé pendant ce projet sur l'aspect visuel et l’affichage des données à l’utilisation.
        </p>
        <p>  
          Mes actions étaient donc concentrées sur les aspects “View” et “Controller”. J’ai alors écrit et codé les pages qui s’afficheront à l'écran pour la partie “View”. Pour la partie “Controller”, j’ai écrit les méthodes qui ont permis d’envoyer les données reçues par une API dans la partie “View”, ce qui permettait un affichage dynamique totalement maîtrisé. Cela prouve bien l'efficacité de ce type d’architecture sur le travail en équipe.
        </p>
        <p>
          J’ai aussi utilisé Angular lors de mon stage dans l’entreprise Safran Helicopter Engines. J’ai travaillé, cette fois-ci, seul sur le site web Angular. J’ai donc pu travailler sur l’entièreté de l’architecture MVC, en écrivant les modèles et en y intégrant de la logique et des calculs, en créant les vues permettant l’affichage de données et en liant tout cela grâce aux contrôleurs.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
        Angular est un framework très performant qui permet un travail en équipe rapide et efficace. Il peut cependant être compliqué à maîtriser parfaitement et il m’arrive toujours de me retrouver confronté à des blocages.
        <br/>
        Mon manque d’expérience et d’expertise me font perdre du temps.
        <br/>
        C’est pour cela que je dois maintenir et améliorer mon niveau en continuant d'utiliser Angular dans des projets personnels.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Angular et son architecture “Model-View-Controlleur” est le framework le plus intéressant avec lequel j’ai pu travailler à ce jour. J’ai vraiment apprécié travailler avec, surtout pour le côté collaboration et travail en équipe qui est grandement facilité par ce dernier.
        <br/>
          Dans le futur, j’aimerais tout de même voir les capacités d’autres frameworks tels que React ou Vue qui ont bonne réputation.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/transurvey"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          TranSurvey
        </Link>
      </section>
    </>
  ),
  api: (
    <>
      <h2>
        API
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Api ou “application programming interface” est une base du développement logiciel et web moderne. Les APIs permettent de mettre à disposition des fonctions, méthodes et variables qui seront utilisées par des applications de type “front-end”. 
        <br/>
          Les Apis sont donc le cœur du “back-end”. Les APIs sont aujourd’hui très utilisées car très pratiques, simples à utiliser et à entretenir. En effet, il est possible de modifier la logique ou les calculs des méthodes sans modifier les “end-points”, les connecteurs qu’utilise le “front-end”.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
          Étant l’une des bases du développement moderne, j’ai beaucoup travaillé sur des APIs, que ce soit dans des projets scolaires ou en entreprise durant mon stage.
        </p>
        <p>
          Pour commencer, l’API la plus complète sur laquelle j’ai pu travailler seul était durant mon stage chez Safran Helicopter Engines. Le but était de migrer une partie d’un site web en PLSQL en un POC d’API pour évaluer le temps que prendra et la difficulté de la migration de la totalité de ce dernier. J’ai donc décortiqué le code PLSQL avant de créer l’API de zéro dans laquelle j’ai intégré la logique et les calculs. Cette API était aussi connectée à une base de données censée répliquer la base existante pour le site à migrer.
        </p>
        <p>  
          Pour faire part d’une seconde expérience avec les APIs, je suis fier d’avoir participé au projet <b>BluePrint</b>. Dans ce dernier, nous devions avec l’équipe projet stocker et envoyer des données grâce à une API liée à une application mobile. J’ai pu y créer les “end-points” nécessaires au bon fonctionnement de l’application, j’ai aussi géré les requêtes à la base de données, autant de sorte à stocker, qu’à récupérer les données.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Avec mon parcours scolaire, j’ai pu beaucoup travailler avec les APIs. Je comprends leur fonctionnement, je suis capable de les créer de zéro ou bien de les modifier. Cependant, je ne suis pas parfait et un point en particulier me fait encore défaut.
        <br/>
          Ce point noir réside dans le fait de sécuriser une API qui pourrait être utilisée par le grand public. En effet, je n’ai encore jamais eu l'occasion de travailler sur une API de cette envergure et n’ai donc pas d’expérience concrète dans la sécurisation, bien que j’applique les bonnes pratiques.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          La maîtrise des APIs est primordiale lorsque l’on travaille dans le développement et dans le développement web en particulier. C’est pourquoi je dois continuer de créer et d’utiliser des APIs pour m'améliorer et rester efficace dans ma future carrière de développeur. Je suis pour l’instant cette voie grâce à mes stages et alternances dans lesquels travailler avec des APIs a été une priorité.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/transurvey"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          TranSurvey
        </Link>

        <Link
          to="../réalisations/simplE"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Simpl-e
        </Link>
      </section>
    </>
  ),
  vba: (
    <>
      <h2>
        VBA
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          VBA ou Visual Basic for Application est un langage de Microsoft principalement utilisé pour interagir avec des logiciels tels que ceux de la suite Office et est particulièrement utilisé en combinaison d’excel.
        <br/>
          Même s’il est de moins en moins utilisé, il reste un outil incontournable pour le travail en entreprise et cela pour différents types de profils. Du développeur au commercial, ce langage est pertinent car il permet de faire des calculs sur des données et bien plus tout en étant assez accessible.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
          J’ai utilisé le langage VBA deux fois pendant mon parcours, la première lors d’un projet scolaire et la seconde durant mon alternance dans l’entreprise ArianeGroup.
        </p>
        <p>
          Pour commencer, le projet au sein de l’école se nommait <b>Simpl-e</b>. Ce projet avait pour but de récupérer dans un logiciel les données de fichiers Excel  et de faire des calculs. Pour accomplir cela, j’ai dû utiliser du VBA pour pouvoir traiter les données contenues dans les fichiers.
        </p>
        <p>
          Pour ma seconde utilisation du VBA, cela a eu lieu pendant mon alternance. Pour donner un peu de contexte, la mise à jour d’Excel de sa version 2014 à 2016 a été poussée. Avec cette montée en version, la syntaxe du VBA a été légèrement modifiée, rendant la majorité des macros Excel inutilisables à condition de quelques modifications. Il m’a alors été confié de corriger certains de ces morceaux de code VBA.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          Bien que j’aie déjà pu utiliser le VBA à plusieurs reprises, je suis loin de pouvoir me considérer comme un expert de ce langage. Lors du projet <b>Simpl-e</b> son utilisation n'était pas la base et le point le plus compliqué du logiciel et durant mon alternance je n’ai fait que mettre à jour du code déjà existant en appliquant les pratiques de la nouvelle version.
        <br/>
          Ce langage étant toujours utilisé en entreprise, je dois continuer de me tenir informé de son évolution pour rester opérationnel la prochaine fois que j’en aurai besoin.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Je n’ai pas d’affection particulière pour le VBA et je ne suis que débutant sur le langage. Son utilité dans le monde professionnel fera que je croiserai la route du VBA très certainement à nouveau tôt ou tard. Je dois alors continuer à maintenir mon niveau, même sans devenir expert, pour ne pas que son utilisation devienne un frein à un prochain projet.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/simplE"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Simpl-e
        </Link>
      </section>
    </>
  ),
  sql: (
    <>
      <h2>
        SQL
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le SQL ou Structured Query Language est un langage permettant d’exploiter les bases de données relationnelles. En effet, il permet la création, la suppression et même la manipulation des entrées via des instructions sous forme de commandes.
        <br/>
          Le SQL est présent dans un grand nombre de systèmes de base de données. On peut nommer les plus connus tels que MySQL, Oracle ou bien PostgreSQL. Cela fait donc du SQL un langage utilisé dans la plupart des projets informatiques ayant besoin d’une base de données et est donc très largement utilisé.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mon expérience
        </h3>

        <p>
          Comme j’ai pu l'expliquer plutôt, le langage SQL est très communément utilisé dans les projets informatiques. J’ai donc utilisé durant beaucoup de mes projets scolaires ce langage dans le logiciel MySQL. Ces bases de données ont pu être connectées à des API ou des clients lourds.
        <br/>
          Pour les projets scolaires, je citerai le projet <b>TranSurvey</b> dans lequel j’ai participé à la création de la base de données devant stocker des questionnaires. Il a fallu penser aux relations et interactions des tables pour ne pas avoir de redondance ou de boucle.
        <br/>
          Plus récemment, que ce soit durant mon stage dans l’entreprise “Safran Helicopter Engines” ou pendant mon alternance avec “ArianeGroup”, j’ai réalisé des POCs, lesquels étaient liés à des bases de données avec PostgreSQL. J’ai pu me servir du client “pgadmin4” qui m’a facilité la prise en main de ce système de base de données différent de MySQL. Mon expérience la plus satisfaisante a été d'utiliser PostgreSQL sans son client “pgadmin4” mais en ligne de commande. Avec cette manière d'utiliser le SQL j’ai vraiment ressenti une amélioration de mon niveau car l’aide y est minimale contrairement à l’utilisation de client.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          SQL est un langage que j’apprécie beaucoup et que j’ai utilisé dans la majorité des projets auxquels j’ai participé. J’ai créé des tables, modifié des champs, fait des jointures de table…
        <br/>
          L’expérience que je n’ai pas encore eue l’occasion d’avoir a été de travailler sur une base réelle et bien complète. En effet, j’ai créé des bases mais je n’ai pas pu interagir avec une base déjà existante. Je ne connais donc pas encore la réelle difficulté de la modification de base complexe et déjà pensée.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          SQL est un langage avec lequel j’ai beaucoup apprécié travailler dans mes projets. Il est sûrement l’un des outils les plus pratiques, efficaces et importants dans un projet informatique. 
        <br/>
          C’est pourquoi je compte à l'avenir continuer de renforcer ma maîtrise du SQL en participant à des projets utilisant des requêtes plus complexes, ce qui me ferait progresser plus encore.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/simplE"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Simpl-e
        </Link>

        <Link
          to="../réalisations/transurvey"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          TranSurvey
        </Link>

        <Link
          to="../réalisations/blueprint"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Blueprint
        </Link>
      </section>
    </>
  ),
  veille: (
    <>
      <h2>
        Veille informatique
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Une compétence primordiale pour les développeurs consiste à sa capacité de se tenir à jour. Connaître les dernières actualités est capital pour prendre les bonnes décisions aux bons moments. De plus, être à jour sur les dernières technologies permet une force de proposition précise et efficace.
          <br/>
          La veille informatique est un travail de régularité et d’entretien. Elle est effectuée grâce à des outils tels que les moteurs de recherche ou des alertes et sera efficace grâce à la puissance des mots-clés.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
        Mes travaux en entreprise ont beaucoup été basés sur de la veille informatique.
        </p>
        <p>
        Durant mon stage dans l’entreprise Safran Helicopter Engines pour faire de la migration, j’ai dû mettre à jour mes connaissances en base de données et acquérir de la connaissance sur comment migrer des données. Pour cela, j’ai utilisé des outils comme des moteurs de recherche, ces derniers sont utilisés par tout le monde dans la vie de tous les jours mais cela ne retire en rien leur puissance. J’ai appris qu’en utilisant de bons mots-clés combinés à des formatages spécifiques permettent de pousser les recherches plus loin tout en étant beaucoup plus précis.
        </p>
        <p>
          J'ai aussi, pendant mon alternance chez Ariane Group, effectué beaucoup de veille sur les logiciels low-code. Cette fois-ci j’ai utilisé d’autres méthodes comme la création d’alerte ou suivi de l'actualité du secteur par webinaire, me permettant de me tenir au courant de solutions réellement mises en place par d’autres professionnels.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
        La veille informatique consiste principalement en l'apprentissage et la mise à jour de connaissances. Or ce n’est pas tout, si ses connaissances ne sont pas répertoriées ou stockées, il n’est pas possible de les transmettre et elles finiront par être perdues.
        <br/>Ce fut une de mes erreurs lors de mon stage dans l’entreprise Safran Helicopter Engines où je n’ai, après mon départ, laissé que peu de traces de mes recherches. Quelques-unes des connaissances que j’ai apprises ont donc disparu de l’entreprise et n’ont pas été transmises à un successeur. M'en étant rendu compte, c'est une erreur que je ne ferai plus à l'avenir.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          La veille informatique est une compétence que tous les développeurs se doivent de maîtriser, je me suis rendu compte de son importance lors de ses applications dans de multiples projets. Je vais certainement continuer d’utiliser cette compétence tout au long de ma carrière et cela est un bénéfice.
        <br/>
          Grâce à cette pratique, je vais pouvoir continuellement m'améliorer et devenir meilleur sur les points que je maîtrise déjà, ainsi que je vais monter en compétence dans les domaines qui me sont aujourd’hui inconnus.
        </p>
      </section>
    </>
  ),
  cycleV: (
    <>
      <h2>
        Cycle en V
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le cycle en V est une méthode de travail qui fut créée pour mener à bien des projets avant même l’apparition des projets informatiques. La méthode est séparée en plusieurs phases et phases de test. Une fois la validation d’une phase terminée, il n’est plus possible de revenir à la phase précédente, ce qui permet un résultat de projet stable et prédéfini.
        </p>
        <p>
          Cette méthode possède moins de communication entre développeurs et commanditaires que d’autres car elle se fait surtout durant les jalons de validation et les réunions de début de projet tel que le cadrage du projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
        Au cours des projets auxquels j'ai participé, j’ai pu appliquer cette méthodologie en tant que développeur mais aussi en tant que chef de projet.
        </p>
        <p>
        La première interaction avec cette manière de travailler ainsi que mon premier projet de mon parcours scolaire fut dans le projet <b>Lotus</b> où j’ai été le chef de projet. Malgré mon manque d’expérience, j’ai fait en sorte d'appliquer chaque phase, prévue et organisée chaque réunion de validation de jalon. Cette première expérience a été complexe car aucun retour en arrière n’est possible après validation, mais ce projet a finalement été mené à bien.
        </p>
        <p>
          Le second projet utilisant cette méthodologie a été le projet <b>Simpl-e</b>. J’ai eu moins d’impact dans ce projet étant seulement développeur mais cela ne veut pas dire que j’ai laissé mes collègues travailler seuls. Le cadrage et la réalisation des livrables comme le cahier des charges ou la documentation est un travail d’équipe auquel j’ai activement participé.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          La découverte et l'utilisation de cette méthodologie a été très impactante sur ma vie. Définir les besoins, planifier ses actions et avancer selon nos prévisions n’est pas quelque chose uniquement réservé à des projets informatiques ou non. Cela aide aussi dans la vie de tous les jours, en nous cadrant, nous pouvons avancer plus loin et plus efficacement.
        </p>
        <p>
          Le cycle en V m'a fait grandir et m’a apporté de la maturité que je n’aurais pas acquise sans ce dernier.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Lors de mes expériences, j’ai eu l'occasion d'expérimenter deux méthodes de travail, d’un côté la méthode agile et de l’autre le cycle en V. J’ai remarqué durant mes projets que le cycle en V est généralement plus efficace et permet une avancée plus rapide et efficace grâce à un but final bien précis.
        <br/>
          Cependant, pour les projets informatiques, la méthode agile semble plus adaptée et c’est pourquoi, dans le futur, si un choix doit être fait, il se portera moins souvent sur le cycle en V.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/lotus"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Lotus
        </Link>

        <Link
          to="../réalisations/simplE"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Simpl-e
        </Link>
      </section>
    </>
  ),
  agile: (
    <>
      <h2>
        Méthode agile
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          La méthode agile est une manière de travailler et de planifier un projet. Elle permet le développement efficace de projets volatils et en proie aux changements. La méthode est particulièrement adaptée à ces projets qui sont construits au fur et à mesure de son développement, elle permet l’évolution dans le temps du produit final et n’est fixée comme avec la méthode du cycle en V.
        </p>
        <p>
          Cette méthode de travail est basée sur une communication efficace, régulière et rapide entre les parties prenantes du projet comme l’équipe projet ou le commanditaire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
        Je me suis familiarisé durant mon parcours scolaire à la méthode agile grâce aux projets effectués avec l’école. Cette méthode ayant été utilisée plusieurs fois, j’ai pu participer en tant que simple développeur mais aussi en tant que scrum master.
        </p>
        <p>
        D’abord, en tant que simple développeur, j’ai participé dans le projet <b>BluePrint</b> à la création et définition de use-case grâce aux réunions récurrentes avec le commanditaire.
        </p>
        <p>
        Le projet où j’ai le plus appliqué la méthodologie reste le projet <b>TranSurvey</b> pour la RRTL. J’ai été le Scrum Master durant le développement. Malgré des réunions récurrentes et une communication assez transparente avec les commanditaires, certains problèmes sont tout de même apparus lors du projet. J’ai alors dû gérer des réunions de crise afin de restructurer le projet et de reconstruire le backlog, re-créer les uses-cases et réévaluer la difficulté de ces dernières. Il a aussi fallu respecter la récurrence des daily scrums qui avait été laissée de côté au début du projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
        L’utilisation et l’application de la méthode agile est complètement différente du cycle en V. Je ne m’en étais pas rendu compte lors de mes premiers projets avec cette méthodologie. Je n’avais pas compris, en particulier, l’importance plus que capitale de la communication au sein de ce type de projet, que ce soit avec le commanditaire ou à l'intérieur même de l’équipe projet. Comme évoqué dans mes expériences, cela a fini par me poser des problèmes en projet, mais cela m’a forgé et m’a fait grandir. Aujourd’hui je sais quelles sont les erreurs à ne pas reproduire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Lors de mes expériences, j’ai eu l'occasion d'expérimenter deux méthodes de travail, d’un côté la méthode agile et de l’autre le cycle en V. La méthode agile étant beaucoup adaptative et permissive, permet la création de projets sur-mesure et d’avancer main dans la main avec le commanditaire.
        <br/>
          Dans le futur, la méthode agile est la méthode que je privilégierai dans mes projets car généralement plus adaptée aux projets informatiques.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-8">
        <Link
          to="../réalisations/transurvey"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          TranSurvey
        </Link>

        <Link
          to="../réalisations/blueprint"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Blueprint
        </Link>
      </section>
    </>
  ),
  international: (
    <>
      <h2>
        Anglais
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          Le travail d’un développeur étant digital, il arrive de devoir coopérer avec tous types de personnes, y compris venant d’autres pays. Il est donc important de savoir communiquer avec le plus de personnes possible. Ceci est réalisable grâce à l’anglais. Étant parlé assez fréquemment dans la plupart des pays du monde, cette langue est une arme principale qu’un développeur doit avoir dans son arsenal car elle permet la compréhension, la synchronisation et l’harmonisation des autres forces et compétences.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
          Durant mon parcours scolaire, j’ai pu travailler en coopération avec des équipes dispersées dans le monde.
        </p>

        <p>
          J’ai eu l'occasion de travailler avec des équipes basées en Inde pendant mon stage chez Safran Helicopter Engines afin d’échanger sur des développements. Il est possible de constater la différence de culture dans leur travail. Très axé sur la spécialisation, ils m’ont permis de progresser et de m’améliorer avec les langages Angular et Node. Ces développeurs de l’autre bout du globe ont pu m’aider lorsque je devais traduire du code PLSQL en une API Node, ils m’ont permis de créer des endpoints cohérents et efficaces en empêchant la redondance de code et en me donnant un point de vue extérieur en me proposant des idées qui ne m'avaient pas traversé l’esprit au premier regard.
        </p>

        <p>
          J’ai aussi coopéré avec des Allemands durant mon alternance chez ArianeGroup. Cette fois-ci, mon rôle n’a pas été d’apprendre et de me faire aider mais de débloquer le travail de ces derniers en les aidant à finaliser l’installation ainsi que de configurer un logiciel. Je me devais donc d’être implacable sur les mots spécifiques au secteur afin d'être compris de tous.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          L’utilisation de l’anglais était quelque chose d’assez commun pour ma part, cependant je n’avais jusqu’ici pas eu l'occasion de mettre à disposition cette compétence en situation de travail réel. Étant habitués à l’accent anglais et américain, les accents non-natifs peuvent être compliqués à appréhender. Aujourd’hui et grâce à mes expériences, mon anglais ne s'est qu’amélioré jusqu'à comprendre des accents différents et inhabituels. Cela me permet de pouvoir encore mieux interagir et travailler avec des collègues à l’étranger.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          L’anglais est une langue que j'apprécie parler et écouter. Additionnellement, l’anglais est pratiqué aujourd’hui dans tous les secteurs dès l’instant où l'activité se répand au-delà de la frontière française.
        <br/>
          C’est donc une compétence que je vais continuellement améliorer et utiliser tout au long de ma carrière proche ou future.
        </p>
      </section>
    </>
  ),
  autonomie: (
    <>
      <h2>
        Autonomie
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Définition
        </h3>

        <p>
          L’autonomie chez un développeur est une compétence phare. Un développeur doit pouvoir se retrouver seul sans que son travail soit entièrement bloqué. Pour atteindre le statut d’autonome, un développeur doit avoir une capacité d’adaptation suffisante, lui permettant d’utiliser des technologies non prévues ou permettant de contourner les points bloquants. Mais attention, un développeur ne travaille généralement pas seul. L’autonomie en équipe réside plutôt dans la force de proposition, qui permet de faire avancer les projets en étant actif au sein de son équipe.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Mes expériences
        </h3>

        <p>
        Durant mes stages et alternances, mes tuteurs ont toujours été très occupés, avec très peu de temps libre pour m’aider ou me débloquer. Le développement de mon autonomie a donc été obligatoire afin de ne pas rester bloqué plusieurs jours sur une tâche.
        </p>

        <p>
        J’ai ainsi pu, durant mon stage chez Safran Helicopter Engines, avoir une grande force de proposition. Le projet étant un cadrage de migration et basé sur de la veille informatique, j’ai pu proposer des manières et méthodes de travail qui seront utilisées par les prochaines équipes sur le projet.
        </p>

        <p>
        Aussi, durant mon alternance, je dois explorer et tester les limites d’une plateforme low-code, pour cela je dois contacter et récupérer des use-cases par moi-même. S'ensuit le développement d’un POC et d’une rédaction de documentation pour historiser et transmettre mon travail à de futurs personnes qui prendront la relève.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Autocritique
        </h3>

        <p>
          J’ai déjà pu le mentionner, l’autonomie est une compétence primordiale pour un développeur. Avant d’avoir acquis l’expérience de mon stage et de mon alternance, cet aspect me faisait un peu défaut. Que ce soit dans mon travail ou même dans la vie de tous les jours. Avoir travaillé ces aspects de ma personnalité m’a permis de grandir et d’être aujourd’hui une version plus mature et débrouillarde de moi-même.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Étant une compétence phare de tout développeur, l’autonomie est une facette que je vais continuer à entraîner pour m'améliorer en tant que développeur mais aussi pour moi-même.
        <br/>
          Utile dans les projets comme dans la vie de tous les jours, mon autonomie n’a fait que se renforcer depuis mes stages et alternances et continuera sur cette voie dans ma future carrière.
        </p>
      </section>
    </>
  ),
};

export function Competences() {
  const { comp } = useParams();

  const [selected, setSelected] = useState<keyof CompLookup>();

  useEffect(() => {
    if (comp === undefined || contentLookup[comp as keyof CompLookup] === undefined) return;

    setSelected(comp as keyof CompLookup);
  }, [comp]);

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <h1>
        Mes compétences
      </h1>

      <div
        className={
          "fixed inset-0 z-10 flex justify-center items-center bg-black/50 transition-all"
          + ` ${selected !== undefined ? "opacity-100" : "pointer-events-none opacity-0"}`
        }
        onClick={() => setSelected(undefined)}
      >
        <div
          className={
            "bg-charcoal-sand border-2 border-light-sand rounded-2xl overflow-hidden transition-all"
            + ` ${selected !== undefined ? "w-6/12 h-11/12 p-8" : "size-0 p-0"}`
          }
        >
          {selected !== undefined && (
            <div className="flex justify-center size-full overflow-auto">
              <div className="flex flex-col gap-8 max-w-[55ch]">
                {contentLookup[selected]}
              </div>
            </div>
          )}
        </div>
      </div>

      <section className="flex flex-col items-center gap-8 w-full max-w-3xl">
        <h2 className="text-white">
          Techniques
        </h2>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("html")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={html}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            HTML
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("angular")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={angular}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Angular
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("api")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={api}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            API
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("vba")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={vba}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            VBA
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("sql")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={sql}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            SQL
          </b>
        </button>

        <h2 className="text-white">
          Humaines
        </h2>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("cycleV")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={cycleV}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Cycle en V
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("agile")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={agile}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Méthode agile
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("international")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={globe}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Anglais
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("autonomie")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={man}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Autonomie
          </b>
        </button>

        <button
          className={
            "relative flex items-center gap-4 w-full max-w-2xl p-3 border-2 border-light-sand rounded-xl"
            + " bg-charcoal-sand shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("veille")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={veille}
              className="h-full"
            />
          </div>

          <b className="text-lg text-left">
            Veille informatique
          </b>
        </button>
      </section>
    </div>
  );
}
