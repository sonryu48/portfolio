import { Link, useLocation } from "react-router";
import { presentation } from "../assets/images";

export function Navbar() {
  const { pathname } = useLocation();

  if (pathname === "/accueil") return;

  const linksToDisplay: string[] = ["accueil",  "réalisations", "compétences", "contact"];

  return (
    <nav
      className={
        "flex justify-center gap-16 py-3 border-b-2 border-white bg-charcoal-sand"
      }
    >
      <div className="relative flex gap-16 justify-center items-center w-full">
        <div className="absolute left-4 flex items-center gap-2">
          <div className="flex justify-center items-center size-12 border-2 border-koi-orange rounded-full">
            <img
              src={presentation}
              className="size-10 rounded-full object-cover"
            />
          </div>

          <b>
            Tristan Pinguet
          </b>
        </div>

        {linksToDisplay.map((link) => (
          <Link
            key={link}
            to={link}
            className="px-3 py-1 rounded border-2 border-white text-white"
          >
            {(link === "réalisations" || link === "compétences") ? (
              `Mes ${link}`
            ) : (
              link.charAt(0).toLocaleUpperCase() + link.slice(1)
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}
