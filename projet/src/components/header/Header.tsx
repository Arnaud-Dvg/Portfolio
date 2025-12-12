import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <section
      className="flex items-center bg-primary justify-between"
    >
      <div className="flex items-center gap-2">
        <img
          src="./assets/logo_cropped.png"
          alt="Logo AD"
          className=" h-[125px] w-auto"
        />
        <div className="hidden lg:block">
          <p className="text-white">Arnaud Devoge</p>
          <p className="text-secondary text-2xl">Développeur Web</p>
        </div>
      </div>
      {/* Lien en desktop */}
      <ul className="text-secondary hidden gap-6 md:flex pr-5">
        <li><a href="#description" className="hover:underline">Description</a></li>
        <li><a href="#compétences" className="hover:underline">Compétences</a></li>
        <li><a href="#projets" className="hover:underline">Projets</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li><a
          href="/CV ARNAUD 2025.pdf"
          download
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/80 transition"
        >
          Télécharger mon CV
        </a>
        </li>
      </ul>
      {/* Modale du menu */}
      <div className="flex items-center gap-4 md:hidden">
        {open && (
          <div className="md:hidden">
            <ul className="text-secondary text-sm flex flex-col py-3">
              <li><a href="#description" onClick={() => setOpen(false)}>Description</a></li>
              <li><a href="#compétences" onClick={() => setOpen(false)}>Compétences</a></li>
              <li><a href="#projets" onClick={() => setOpen(false)}>Projets</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
              <li>
                <a
                  href="/CV ARNAUD 2025.pdf"
                  download
                  className="hover:saturate-150 px-2 bg-secondary text-white rounded hover:bg-secondary/80 transition"
                >
                  Télécharger mon CV
                </a>

              </li>

            </ul>
          </div>
        )}
        {/* Bouton Burger */}
        <button
          className="md:hidden pr-5 hover:scale-120 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="block h-0.5 w-6 bg-secondary mb-1"></div>
          <div className="block h-0.5 w-6 bg-secondary mb-1"></div>
          <div className="block h-0.5 w-6 bg-secondary"></div>

        </button>
      </div>
    </section>
  );
}

export default Header;
