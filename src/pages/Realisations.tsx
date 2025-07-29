import { JSX, useEffect, useState } from "react";
import { bluePrint, neopacker ,transurvey, lotus, simplE } from "../assets/images";
import { Link, useParams } from "react-router";

type RealLookup = {
  lotus: JSX.Element;
  neopacker: JSX.Element;
  simplE: JSX.Element;
  transurvey: JSX.Element;
  blueprint: JSX.Element;
};

const contentLookup: RealLookup = {
  lotus: (
    <>
      <h2>
        Lotus
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
        Le projet Lotus est le premier auquel j’ai contribué durant mon parcours ESIEA.
        <br/>
        Confié par Victoria Peruarena, il consistait en la réalisation d’un site de référencement pour son activité. L'objectif était de se rapprocher du site Doctolib, mais spécialisé pour les dermo-facialistes.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          Les compétences évaluées durant ce projet étaient l’utilisation de HTML et de sa liaison à CSS afin de respecter une charte graphique et JavaScript pour avoir un minimum de logique. Le résultat est d’obtenir un site web sans données dynamiques mais visuellement acceptable.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
        Durant ce projet, j’ai été nommé chef de projet dans l’équipe avec laquelle je travaillais. Il a donc été tout naturel que je participe et organise les différentes réunions survenues tout le long du projet. 
        </p>

        <p>
        D’abord la réunion de lancement avec la rencontre du commanditaire et la définition du besoin. Les réunions suivantes étaient en majorité des réunions de validation pour passer au jalon suivant. J’ai, avec l’équipe projet, construit l’analyse SWOT du projet mais aussi la planification avec un diagramme de Gantt afin de répartir les tâches et de mieux organiser le projet.
        </p>

        <p>
        En termes de code, je me suis surtout occupé de créer la page de connexion et de création de compte qui étaient des squelettes car aucune base de données n’était intégrée au projet au cours de ce semestre. J’ai aussi participé à la rédaction de la page d'accueil et à sa mise en forme.
        </p>
        <p>
        Mon côté chef de projet, en particulier pour maintenir la relation avec le commanditaire, a été mis à l'épreuve durant ce projet. En effet, un membre du groupe a fini par se prendre la tête avec le commanditaire du projet, créant une embrouille en réunion et dégradant considérablement les relations entre le groupe et le commanditaire. Pour compenser cela, j’ai écrit des mails d’excuses permettant de recréer une ambiance de collaboration entre les deux parties prenantes.
        </p>
        <p>
          Pour terminer le projet, j’ai rédigé des livrables comme le manuel d’utilisation qui montre comment le site fonctionne d’un point utilisateur, comment il doit se déplacer et les possibilités qui sont offertes.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin de projet
        </h3>

        <p>
          Au moment du rendu, le site n'était pas tout à fait opérationnel, il manquait la partie base de données pour rendre le site dynamique. Cependant, le visuel et le squelette du site étaient complètement terminés. Le site a alors été confié à des élèves de semestres supérieurs pour ajouter ce côté dynamique souhaité par la commanditaire, que nous n'étions pas en mesure de créer en semestre 1.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce premier projet étudiant m'a permis d'évoluer en particulier sur l’aspect chef de projet et relation avec commanditaire. J’ai donc pu faire un premier pas dans le côté humain d’un projet informatique.
        <br/>
          Côté technique, j’avais déjà eu l'occasion de travailler avec HTML et CSS lors de cursus lycéen et le projet de ce semestre a été une opportunité de renforcer mes bases et connaissances.
        <br/>
          Malgré les soucis qu’il y a pu avoir avec certains membres du groupe, je suis très heureux d’avoir pu travailler avec madame Peruarena qui nous a fait découvrir son secteur des dermo-facialistes et nous a offert une occasion de grandir autant sur le plan technique que sur le plus humain.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/html"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          HTML
        </Link>

        <Link
          to="../compétences/cycleV"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Cycle en V
        </Link>
      </div>
    </>
  ),
  neopacker: (
    <>
      <h2>
        NewNeoPacker
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
          Le projet NewNeoPacker est le premier projet sur lequel j’ai mis en action mes compétences sur un code déjà existant. Aussi j’ai pu pour la première fois travailler sur une base de données, le site web devant posséder des données dynamiques.
        </p>

        <p>
          Le projet consistait en la création d’un site de type blog permettant à son détenteur de poster des articles, des images et des liens vers les pages d’achats de ses livres pour en faire la promotion. 
        </p>

        <p>
          Le commanditaire, Raphaël Paquereau, étant un grand passionné de voyage à pied et avec le strict minimum en terre inconnue, ce projet qui lui permettra de partager toute sa passion au plus grand nombre lui tenait énormément à cœur. Aimant et trouvant le partage extrêmement important, cela n’a fait que renforcer ma motivation afin de donner le plus et le meilleur de moi-même.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
          Les objectifs d’évaluation de ce projet pour ce semestre étaient l’utilisation de PHP et de la synchronisation et liaison avec une base de données. L’interaction entre le site et la base de données est, dans ce projet, la compétence la plus importante.
        </p>
        <p>
           Cela crée un pont entre le site du projet précédent qui était un site vitrine, fixe et figé, à la différence de celui-ci qui est dynamique avec des éléments qui peuvent être ajoutés, modifiés et même supprimés.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
          Lors du démarrage du projet, j’ai été le seul dans l’équipe à découvrir le commanditaire et le site existant. Il m’a donc été fait une description du projet, son idéologie et vers quoi le projet devait évoluer lors de la réunion de cadrage.
        </p>

        <p>
          Une fois tous les points d’ombres éclaircis, j’ai commencé à réfléchir aux tables qui composeront la base de données. Ces dernières doivent être cohérentes, logiques mais aussi simples et explicites. Comme le commanditaire n’est pas un pro de l’informatique, je devais faire en sorte que la base de données soit complètement compréhensible si un jour il a besoin de modifier ou confier le projet à de nouvelles personnes. Pour réaliser ce point, j’ai conçu les modèles conceptuel et logique de données. Cela permet d’avoir le squelette de la base de données et de vérifier les caractéristiques énumérées précédemment.
        </p>

        <p>
          Le second point important du projet était sa transformation en PHP pour permettre un lien plus facile à la base de données et permettant un code un peu plus dynamique que le HTML et le JavaScript. Pour cela, nous nous sommes réparties les tâches dans l’équipe et j’ai surtout participé à l’adaptation des pages existantes dans leurs nouveaux langages. J’ai pu utiliser les balises plus dynamiques de PHP qui permettaient un code plus lisible et compréhensible. J’ai aussi pu créer des boucles afin d’afficher plusieurs informations depuis une section de code plutôt que de réécrire par ligne le code fixe et non dynamique.
        </p>

        <p>
          Pour finir le projet, j’ai écrit les livrables comme le manuel d’utilisation ou le manuel de la base de données et effectué la remise du projet.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin de projet
        </h3>

        <p>
          Au moment du rendu, le site était totalement complet et fonctionnel. Le commanditaire était très content du logiciel qui répondait à ses attentes et plus encore.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Cette expérience a sûrement été mon projet étudiant préféré. La synergie entre l'équipe projet et le commanditaire était parfaite, avec une bonne communication et un alignement des passions et valeurs.
        <br/>
          Du côté technique, c'était la première fois que j'interagis sur un projet déjà commencé et j’ai appris à m'adapter au code déjà existant. Ce projet m'a aussi permis de découvrir le SQL et les bases de données qui est encore aujourd’hui une de mes technologies de développement préférées.
        <br/>
          Dans le futur, je compte continuer d’utiliser les bases de données mais je préfère m'éloigner sûrement du PHP que je trouve aujourd’hui obsolète.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/html"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          HTML
        </Link>

        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          SQL
        </Link>
        
        <Link
          to="../compétences/cycleV"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Cycle en V
        </Link>
      </div>
    </>
  ),
  simplE: (
    <>
      <h2>
        Simpl-e
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
        Ce projet fut le premier logiciel en client lourd sur lequel j’ai eu la chance de travailler. L’entreprise Etxe Logistica nous a confié le développement d’un logiciel permettant de : 
        <br/>Récupérer des informations en important des fichiers Excel.
        <br/>Combiner et faire des calculs sur les données récupérées.
        Utiliser les résultats des calculs afin de rendre une facture sous format PDF.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
        Les compétences que ce projet permet d’évaluer sont l’utilisation de C# dans une application .NET qui est une technologie de Microsoft. Ici, la création d'algorithmes plus poussés est plus importante que dans les projets précédents qui étaient basés sur des technologies web, faisant de ce projet le différend auquel j’ai eu la chance de participer.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
        Pour démarrer ce projet, il était important de créer une base de données cohérente avec les données que le logiciel recevra, mais aussi avec les données sortantes. Créer la base de données en premier m’a aidé à avoir une meilleure compréhension de comment le groupe va pouvoir créer le logiciel. Ma participation à ce niveau a été de créer des tables grâce aux requêtes SQL.
        </p>

        <p>
        Suite à cela, j’ai agi sur l’expérience utilisateur du logiciel en créant des pages visuelles et compréhensives pour les utilisateurs. Pour cela, j’ai employé le langage WPF pour créer l’interface par page. Le logiciel utilisé pour le développement .NET, Visual Studio, m’a beaucoup aidé grâce à son interface visuelle qui a permis la prévisualisation des pages ainsi que de l’aide pour écrire le code plus rapidement. Les pages n’ont bien sûr pas été pensées uniquement pour l’utilisateur, j’ai aussi fait en sorte que les données qui seront utilisées dans le logiciel puissent être affichées correctement grâce à des modèles qui permettent en plus de récupérer plus facilement les données calculées en amont.
        </p>

        <p>
        Pour terminer le projet, j’ai rédigé des livrables comme le manuel d’utilisation qui montre comment le site fonctionne d’un point utilisateur, comment il doit se déplacer et les possibilités qui sont offertes. J’ai aussi participé à l'écriture du manuel d’installation qui décrit à notre commanditaire comment il doit déployer l’application pour pouvoir s’en servir.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin de projet
        </h3>

        <p>
          Au moment du rendu, le logiciel était totalement complet et fonctionnel. Le commanditaire a été très heureux et fier du logiciel qui répondait à ses attentes et ses besoins pour réduire les redondances et pertes de temps dans son travail.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Étant le premier logiciel en client lourd sur lequel j’ai pu travailler, le projet a été extrêmement fourni en enseignements et découvertes. Cette expérience très différente du développement web m'a introduit à la programmation orientée objet qui m’a plutôt séduit.
        <br/>
          Cependant, je reste très attiré par le développement web ou mobile pour le futur de ma carrière.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          SQL
        </Link>

        <Link
          to="../compétences/cycleV"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Cycle en V
        </Link>
      </div>
    </>
  ),
  transurvey: (
    <>
      <h2>
        TranSurvey
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
        Ce projet est le premier qui intègre la création et l’utilisation d’une API pour décentraliser la partie calcul de l’application.
        </p>

        <p>
        Le projet nous provient de la RRTL ou Régie Régionale des Transports Landais cherchant un moyen de créer des sondages et de pouvoir créer un lien sous forme de QR code imprimable qui pourront être affichés dans les bus de la région.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
        Plusieurs compétences ont été évaluées durant ce projet. Pour commencer, la capacité à créer une application front-end avec le framework Angular. Ensuite sera évaluée la capacité à construire une API connectée à une base de données. Cette dernière devra interagir avec la base de données et faire des calculs avant d’envoyer les résultats à l’application Angular.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
        Ce projet a été développé avec la méthode agile, j’ai été désigné Scrum Master et j’ai donc commencé par planifier la réunion de démarrage. Ici j’ai, avec l’équipe projet, défini les besoins avec le commanditaire et réuni le plus d'informations pour créer les prochains livrables. J’ai donc participé à la rédaction des uses-cases et du product-backlog. L’équipe projet et moi avons utilisé le logiciel draw.io afin de structurer visuellement ce dernier. Pour le contenu, nous avons recensé tous les besoins définis par le commanditaire précédemment afin de créer les épics, les thèmes et les user-stories.
        </p>
        
        <p>
        La prochaine étape était de créer une base de données. Pour créer des formulaires dynamiques, j’ai beaucoup réfléchi à comment organiser la base pour être la plus permissive possible lors de la phase de conception des modèles conceptuel et logique de données. Les développements ont ensuite commencé et j’ai grandement participé à la création de l’interface utilisateur.
        </p>

        <p>
        Lors d’une réunion de présentation de l'avancée, les supérieurs de notre commanditaire nous ont demandé d'effectuer beaucoup de changements en profondeur.
        <br/>
        J’ai alors planifié une réunion de crise avec l’équipe projet dans laquelle nous avons remanié le product-backlog et les uses-cases, effectué un planning poker afin de définir quels uses-cases seront réalisables et lesquels seront abandonnés.
        </p>

        <p>
        Malgré ces problèmes, nous avons été capables de mener le projet à son terme et avons rendu une version fonctionnelle de notre application web avec tous les livrables associés que j’ai en grande partie rédigés.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin de projet
        </h3>

        <p>
          Dû à une ambition peut-être trop élevée des commanditaires pour un projet étudiant de 6 mois et d’une application de la méthode agile sûrement trop souple de ma part, le site était tout à fait opérationnel et fonctionnel sur ordinateur ainsi que sur mobile, mais ne répondait pas à l'entièreté des besoins du commanditaire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce projet a été incroyablement intéressant, autant sur le plan technique que sur le plan humain.
        <br/>
          La découverte des APIs et leurs utilités aussi polyvalentes que pratiques rendent le développement web fade si elles ne sont pas utilisées. Elles sont incontournables pour n’importe quel développeur.
        <br/>
          Sur le plan humain, mes compétences ont encore été mises à rude épreuve. Cette fois-ci, non pas en tant que chef de projet, mais en tant que Scrum Master grâce à la méthode agile.
        <br/>
          Pour le futur, je ne peux plus imaginer développer sans API et c’est pourquoi je continue de m’exercer.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/angular"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Angular
        </Link>

        <Link
          to="../compétences/api"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          API
        </Link>

        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          SQL
        </Link>

        <Link
          to="../compétences/agile"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Méthode agile
        </Link>
      </div>
    </>
  ),
  blueprint: (
    <>
      <h2>
        Blueprint
      </h2>

      <section className="flex flex-col gap-2">
        <h3>
          Introduction
        </h3>

        <p>
        Ce projet a été le dernier du parcours scolaire d’ESIEA, nous devions, dans celui-ci, créer une application mobile grâce à Java.
        </p>

        <p>
        Confié par l’entreprise ATSE Photovoltaïque et son directeur Christophe Graciet, le but de l’application est de simplifier la vie de ses employés sur les chantiers d’installation de panneaux. L’application devra permettre de créer, sous forme numérique, la lourdeur administrative obligatoire. Cela permettra un meilleur archivage des informations ainsi qu’une amélioration significative dans le confort des employés.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Objectifs
        </h3>

        <p>
        La compétence mise à l’épreuve pour ce projet est la capacité de créer une application mobile en Java. Elle devra être user-friendly et capable de gérer des données dynamiques grâce à une API et une base de données.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
        Au démarrage du projet, nous avons sélectionné qui serait le Scrum Master et nous avons enchaîné sur la réunion de démarrage du projet. Encore une fois, j’ai réuni le plus d'informations afin de réaliser les uses-cases les plus pertinentes possibles et un product-backlog complet.
        </p>
        
        <p>
        Viens maintenant la rédaction de la base de données qui sera encore une fois très importante.
        J’ai en majorité travaillé sur l’API Java durant ce projet, la création de tous les “endpoint” nécessaires au bon fonctionnement de l’application mobile ainsi que la liaison à la base de données.
        </p>

        <p>
        J’ai aussi participé à la réalisation de l’application Android. J’ai participé en majorité à l’expérience utilisateur en créant les routes et la navigation de l'application. Ceci est une partie très importante car elle définit la lisibilité et l’accessibilité de toute l’application. Pour ce faire, le logiciel Android Studio offre des outils visuels qui permettent de lier les pages entre elles grâce à des tracés et des chemins. Cela permet de mieux réfléchir aux routes que l’utilisateur va emprunter et d’optimiser son expérience.
        </p>

        <p>
        J’ai aussi créé des modèles de données pour faciliter l’affichage des données à l'équipe dans l’application. Comme nous utilisions Java pour notre application, j’ai créé des classes qui regroupent tous les attributs qui devaient être affichés à l'écran.
        </p>

        <p>
        Pour terminer le projet, j’ai rédigé des livrables comme le manuel d’utilisation qui montre comment le site fonctionne d’un point utilisateur, comment il doit se déplacer et les possibilités qui sont offertes. J’ai aussi participé dans le manuel expliquant le fonctionnement de l’API car en ayant beaucoup travaillé dessus, je la connaissais sur le bout des doigts.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Fin de projet
        </h3>

        <p>
          Lorsque moi et l'équipe projet avons rendu l’application au commanditaire, il manquait quelques fonctionnalités présentes dans le product-backlog telles que l’utilisation hors ligne. Cependant, l’application était fonctionnelle et a plu au commanditaire.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Conclusion
        </h3>

        <p>
          Ce projet est pour moi très important car il m'a fait découvrir le développement mobile. Bien que limité à ce moment à Android, je vois le potentiel énorme que réservent les applications mobiles, c’est pourquoi j’aimerais, dans ma future carrière de développeur, me diriger vers ce type de développement, quitte à délaisser les logiciels lourds qui sont de moins en moins présents dans notre monde où internet et les smartphones règnent.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-8">
        <Link
          to="../compétences/sql"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          SQL
        </Link>

        <Link
          to="../compétences/api"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          API
        </Link>

        <Link
          to="../compétences/agile"
          className="px-3 py-1 rounded border-2 border-white text-white"
        >
          Méthode agile
        </Link>
      </div>
    </>
  ),
};

export function Realisations() {
  const { real } = useParams();

  const [selected, setSelected] = useState<keyof RealLookup>();

  useEffect(() => {
    if (real === undefined || contentLookup[real as keyof RealLookup] === undefined) return;

    setSelected(real as keyof RealLookup);
  }, [real]);

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <h1>
        Mes réalisations
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

      <section className="flex flex-col gap-8 max-w-3xl">
        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("lotus")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={lotus}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Lotus
            </b>

            <span className="text-sm">
              Création d'un site vitrine avec HTML, CSS et JavaScript
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("neopacker")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={neopacker}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              NewNeoPacker
            </b>

            <span className="text-sm">
              Refonte d'un site vitrine en un blog avec PHP et MySQL
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("simplE")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={simplE}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Simpl-E
            </b>

            <span className="text-sm">
              Création d'une application Windows en C# avec WPF
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("transurvey")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={transurvey}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              TranSurvey
            </b>

            <span className="text-sm">
              Création d'une application web avec Angular et API en Java
            </span>
          </div>
        </button>

        <button
          className={
            "relative flex items-center gap-4 max-w-2xl p-3 border-2 border-light-sand rounded-xl bg-charcoal-sand"
            + " shadow-2xl cursor-pointer"
          }
          onClick={() => setSelected("blueprint")}
        >
          <div className="flex justify-center items-center w-1/5 h-24">
            <img
              src={bluePrint}
              className="h-full"
            />
          </div>

          <div className="flex flex-col items-start text-left gap-2">
            <b className="text-lg">
              Blueprint
            </b>

            <span className="text-sm">
              Création d'une application Android en Java
            </span>
          </div>
        </button>
      </section>
    </div>
  );
}
