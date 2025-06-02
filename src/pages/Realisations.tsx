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
        Pour la fin du projet, j’ai rédigé des livrables comme le manuel d’utilisation et effectué la remise du projet.
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
        Les compétences que ce projet permet d’évaluer sont l’utilisation de C# dans une application .NET qui est une technologie de Microsoft. Ici, la création d'algorithmes plus poussés est plus importante que dans les projets précédents.
        </p>
      </section>

      <section className="flex flex-col gap-2">
        <h3>
          Déroulement du projet
        </h3>

        <p>
        Pour démarrer ce projet, il était important de créer une base de données cohérente avec les données que le logiciel recevra, mais aussi avec les données sortantes. J’ai pu créer des tables grâce à SQL.  
        </p>

        <p>
        Suite à cela, j’ai agi sur l’expérience utilisateur du logiciel en créant des pages visuelles et compréhensives pour les utilisateurs. Le logiciel utilisé pour le développement .NET, Visual Studio, m’a beaucoup aidé grâce à son interface visuelle.
        </p>

        <p>
        Pour terminer ce projet, j’ai en grande partie rédigé les livrables tels que le manuel d'installation et le manuel d’utilisation.
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
        Ce projet a été développé avec la méthode agile, j’ai été désigné Scrum Master et j’ai donc commencé par planifier la réunion de démarrage. Ici j’ai, avec l’équipe projet, défini les besoins avec le commanditaire et réuni le plus d'informations pour créer les prochains livrables. J’ai donc participé à la rédaction des uses-cases et du product-backlog.
        </p>
        
        <p>
        La prochaine étape était de créer une base de données. Pour créer des formulaires dynamiques, j’ai beaucoup réfléchi à comment organiser la base pour être la plus permissive possible. Les développements ont ensuite commencé et j’ai grandement participé à la création de l’interface utilisateur.
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
        J’ai aussi participé à la réalisation de l’application Android. J’ai participé en majorité à l’expérience utilisateur en créant les routes et la navigation de l'application. Ceci est une partie très importante car elle définit la lisibilité et l’accessibilité de toute l’application.
        </p>

        <p>
        Pour conclure le projet, j’ai une dernière fois participé à la rédaction des livrables principaux comme le manuel d'utilisation et d’installation. J’ai aussi participé dans le manuel expliquant le fonctionnement de l’API.
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
