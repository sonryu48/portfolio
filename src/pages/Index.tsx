import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { presentation } from "../assets/images/index";
import { MainRefCurrentContext } from "../Layout";

function txClassListAdd(element: Element, className: string) {
  const twClasses: string[] = className.split(" ");

  for (const twClass of twClasses) {
    element.classList.add(twClass);
  }
}

export function Index() {
  const parcoursRef = useRef<HTMLHeadingElement>(null);
  const mainRefCurrent = useContext(MainRefCurrentContext);
  const navRef = useRef<HTMLDivElement>(null);

  const [initialNavTop, setInitialNavTop] = useState<number>(0);
  const [isNavStuck, setIsNavStuck] = useState<boolean>(false);

  useEffect(() => {
    if (!mainRefCurrent) return;

    mainRefCurrent.addEventListener(
      "scroll",
      (e) => {
        if (!navRef.current) return;

        if ((e.target as HTMLDivElement).scrollTop <= initialNavTop) {
          navRef.current.classList.remove(...navRef.current.classList);

          setIsNavStuck(false);
        } else {
          txClassListAdd(
            navRef.current,
            "fixed inset-x-0 top-0 z-10 flex justify-center gap-16 py-3 border-b-2 border-light-sand bg-charcoal-sand",
          );

          setIsNavStuck(true);
        }
      },
    );

    return () => mainRefCurrent.removeEventListener("scroll", () => { });
  }, [mainRefCurrent, navRef, initialNavTop]);

  useEffect(() => {
    if (navRef.current) setInitialNavTop(navRef.current.offsetTop);
  }, [navRef]);

  return (
    <div className="relative flex flex-col items-center size-full">
      <section className="flex flex-col justify-center items-center gap-12 min-h-screen">

        <div
          className={
            "flex items-center gap-9 max-w-4xl p-5"
          }
        >
          <div className="flex justify-center items-center shrink-0 size-56 border-3 border-koi-orange rounded-full">
            <img className="size-52 rounded-full object-cover" src={presentation} />
          </div>

          <div className="flex flex-col gap-3 text-xl">
            <b className="text-2xl pb-4">
              Tristan Pinguet
            </b>

            <span className="flex flex-col">
              Étudiant en 5ème année à l'ESIEA

              <span className="text-xs">
                (Programme "Expert en Ingénierie du développement d'applications" - Titre RNCP 35419)
              </span>
            </span>

            <span>
              Développeur
            </span>

            <span>
              Alternant chez <b>ArianeGroup</b>
            </span>
          </div>
        </div>

        <nav
          ref={navRef}
          style={{
            transitionProperty: "padding, background-color",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            transitionDuration: "150ms",
          }}
        >
          <div className="relative flex gap-16 justify-center items-center w-full">
            <div
              className={
                "absolute left-4 flex items-center gap-2 -z-10"
                + ` ${isNavStuck ? "opacity-100 transition-opacity" : "opacity-0"}`
              }
            >
              <div className="flex justify-center items-center size-12 border-2 border-koi-orange rounded-full">
                <img
                  src={presentation}
                  className="size-10 rounded-full object-cover"
                />
              </div>

              <b className="text-white">
                Pinguet Tristan
              </b>
            </div>

            <Link
              to="../réalisations"
              className="px-3 py-1 rounded border-2 border-white text-white"
            >
              Mes réalisations
            </Link>

            <Link
              to="../compétences"
              className="px-3 py-1 rounded border-2 border-white text-white"
            >
              Mes compétences
            </Link>

            <Link
              to="../contact"
              className="px-3 py-1 rounded border-2 border-white text-white"
            >
              Contact
            </Link>
          </div>
        </nav>
      </section>

      <div className="flex flex-col items-center gap-16 w-full">
        <section className="w-full max-w-3xl">
          <h2
            ref={parcoursRef}
            className="w-full text-center mb-8"
          >
            Mon parcours
          </h2>

          <div className="flex flex-col w-full">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative z-10">
                <a
                  href="https://www.lpo-saint-exupery-parentis-en-born.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col justify-center items-center border-2 border-koi-orange rounded-2xl">
                    <br/>
                    <b className="text-white">2020</b>
                  <b className="text-lg">
                    BAC STI2D SIN
                  </b>
                  <p className="text-sm text-center">
                    Obtention du Baccalauréat au lycée Saint-Exupéry de Parentis-en-Born
                  </p>
                  <br/>
                  </div>
                </a>

                <a
                href="https://www.esiea.fr/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <div className="flex flex-col justify-center items-center border-2 border-koi-orange rounded-2xl">
                    <br/>
                    <b className="text-white text-center">Septembre 2020 - Août 2025</b>
                  <b className="text-lg text-center">
                    Master en ingénierie du logiciel
                  </b>
                  <p className="text-sm text-center">
                    Étude à l'ESIEA dans le programme "Expert en Ingénierie du développement d'applications"
                  </p>
                  <br/>
                  </div>
                </a>

                <a
                href="https://www.safran-group.com/fr/societes/safran-helicopter-engines"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <div className="flex flex-col justify-center items-center border-2 border-koi-orange rounded-2xl">
                    <br/>
                    <b className="text-white text-center">Mars 2023 - Août 2023</b>
                  <b className="text-lg text-center">
                    Stage - Recherche et développement
                  </b>
                  <p className="text-sm text-center">
                    Stage chez Safran Helicopter Engines, recherche sur migration
                  </p>
                  <br/>
                  </div>
                </a>
        
                <a
                href="https://ariane.group/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <div className="flex flex-col justify-center items-center border-2 border-koi-orange rounded-2xl">
                    <br/>
                    <b className="text-white text-center">Septembre 2023 - Août 2025</b>
                  <b className="text-lg text-center">
                  Alternance - Recherche et développement
                  </b>
                  <p className="text-sm text-center">
                    Alternance chez ArianeGroup en tant qu'integrateur low-code
                  </p>
                  <br/>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </section>

        <section className="flex flex-col gap-8 max-w-[55ch] pb-8">
          <h2 className="w-full text-center">
            Présentation générale
          </h2>

          <p>
          Aujourd’hui en alternance dans l’entreprise <b>ArianeGroup</b>, je travail à intégrer une solution de low-code/no-code afin d’ouvrir le champs d’action informatique de l’entreprise au plus grand 
nombre de ses employés. Cet objectif concret et plein de sens me motive et me permet d’aller plus loin dans mon intégration à la vie active et dans l'amélioration de mes propres compétences.

          </p>

          <section className="flex flex-col gap-2">
            <h3>
              Mes valeurs
            </h3>

            <p>
            L’<b>humanisme</b> est une valeur qui me tient à cœur, croire en les autres, les écouter, travailler ensemble nous permet de toujours avancer plus loin et de repousser les limites. En entreprise, le travail est toujours plus efficace et rapide quand nous nous rassemblons.
            </p>

            <br />

            <p>
            Le <b>partage</b> est aussi pour moi une valeur essentielle autant dans la vie de tous les jours que dans la vie active. La mise en commun, la communication et l’entraide sont les clés pour atteindre des objectifs inatteignables seuls. En situation réelle, je n'hésite jamais à parler avec mes collègues des problèmes que je peux rencontrer dans mon travail et je n'hésite pas non plus à partager mes réussites afin de faire profiter de mon expérience aux autres.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3>
              Projet professionnel
            </h3>

            <p>
            Mon projet professionnel a vu un changement majeur au cours de ma vie. Au départ, durant mes années de collège, mon souhait était de devenir un technicien des effets spéciaux et animateur. Donner vie à l’image grâce aux ordinateurs était l’une de mes passions. Or ce métier n’est pas forcément très stable et je ne voulais pas être un intermittent du spectacle. J’ai alors bifurqué vers le métier de développeur avec mon bac STI2D basé sur le numérique.
            </p>

            <br />

            <p>
            J’ai par la suite intégré l’école d’ESIEA où j’ai pris plus connaissance de la différence des métiers de développeur. Aujourd’hui je souhaite donc me diriger vers le développement web.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3>
              Qualités humaines
            </h3>

            <p>
              Dans la vie en entreprise, les compétences informatiques sont importantes, mais il ne faut pas délaisser les compétences qui sont elles aussi très importantes.
            </p>

            <br />

            <p>
              Le <b>travail en équipe</b> est pour moi une des qualités humaines les plus utiles. Savoir comment communiquer, comment coopérer, comment faciliter et comment il est possible de se faire faciliter le travail.
            </p>

            <br />

            <p>
            Associé au travail en équipe, le <b>savoir-vivre</b> est un élément dans les relations entre humains. Bien se comporter, rester sérieux en temps de travail et la politesse sont primordiales si l'on veut communiquer et travailler ensemble de manière efficace.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h3>
              Mes centres d'intérêt
            </h3>

            <p>
            Je suis depuis mon plus jeune âge passionné par les jeux vidéos. Mais attention, pense que je ne vois ces derniers uniquement comme un moyen de se divertir ou de passer le temps serait une erreur. Aujourd’hui, avec un oeil plus orienté sur le développement et sur les technologies, j’aime me renseigner sur comment les jeux sont créés, quelles technologies toujours plus innovantes ils utilisent. En s'intéressant aux créateurs seuls et aux jeux de niche, il est possible de plonger dans un terrier de lapin insondable et rempli de créativité qui ne semble ne jamais s'épuiser.
            </p>

            <br />

            <p>
            Je suis aussi très passionné par les mangas. Ce type de bande dessinée diffère totalement du style franco-belge ou des comics américains. Ici aussi la créativité ne semble pas avoir de limite. Ces derniers prônent des messages forts et inspirants qui m'ont permis de grandir et de voir le monde qui m’entoure différemment.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
}
