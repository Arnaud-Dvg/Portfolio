import { useState } from "react";

const ArrayProjets = [
  { id: 1, nom: "TakuTaku", image: "/assets/Photo Projet/TakuTaku.png", description: "Plateforme web de streaming d’animés développée en équipe, avec un frontend React/Tailwind et un backend Node.js/Express/MySQL. Le projet inclut l’authentification, la gestion des utilisateurs, les favoris, l’administration des animés, ainsi qu’une interface moderne et responsive.", lien: "https://github.com/Arnaud-Dvg/Project-TakuTaku", site: "https://takutaku-app.vercel.app/" },
  { id: 2, nom: "Le Jardin Alsacien", image: "/assets/Photo Projet/Strasbouq.png", description: "Application de réservation de bouquets développée avec React et Tailwind, fonctionnant entièrement via LocalStorage. Elle permet de consulter le catalogue, filtrer les bouquets, gérer un panier, créer un compte, se connecter, et finaliser une réservation côté client.", lien: "https://github.com/Arnaud-Dvg/Le-Jardin-Alsacien" },
  { id: 3, nom: "Fourch'Est", image: "/assets/Photo Projet/Fourch.png", description: "Site front-end développé en JavaScript et Tailwind, permettant de commander des repas en ligne dans un restaurant traditionnel du Grand Est. L’application propose la consultation du menu, l’ajout de plats au panier et la finalisation d’une commande, avec une interface simple et responsive.", lien: "https://github.com/Arnaud-Dvg/FourchEst" },
  { id: 4, nom: "Kids-Quiz", image: "/assets/Photo Projet/Kids.png", description: "Mini-jeu éducatif développé en JavaScript et CSS, permettant aux enfants de répondre à une série de questions simples, avec un système de score et une interface ludique et colorée.", lien: "https://github.com/Arnaud-Dvg/KIDS-QUIZ" },
  {
    id: 5, nom: "CarambarJoke", image: "/assets/Photo Projet/Joke.png", description: "Petite application web affichant une blague Carambar aléatoire grâce à une API que j’ai développée en Node.js / Express, avec une base SQLite gérée via Sequelize. L’API est documentée avec Swagger et déployée sur Render, tandis que le frontend en HTML/ CSS / JS est hébergé sur GitHub Pages.", lien: "https://github.com/Arnaud-Dvg/carambar-joke-client"
  }
];

function Projet() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = ArrayProjets[currentIndex];


  // Fonction pour aller au projet suivant
  const handleNext = () => {
    setCurrentIndex((prev) =>
      // Si on est au dernier projet → on revient au début
      prev === ArrayProjets.length - 1 ? 0 : prev + 1
    );
  };

  // Fonction pour aller au projet précédent
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      // Si on est au premier projet → on va au dernier
      prev === 0 ? ArrayProjets.length - 1 : prev - 1
    );
  };

  return (
    <section id="projets" className="pb-10 pt-10">
      <h1 className="text-secondary text-center mb-8">Mes projets</h1>

      {/* Conteneur principal du carousel */}
      <div className="mx-auto max-w-xl px-4">

        {/* Carte du projet affiché */}
        <div className="bg-[#161621] rounded-xl overflow-hidden shadow-xl">

          {/* Image du projet */}
          <img
            src={currentProject.image}
            alt={currentProject.nom}
            className="w-full h-90 object-cover"
          />


          {/* Texte + bouton GitHub */}
          <div className="p-5 flex flex-col gap-3">

            <div className="mt-4 flex items-center justify-between">


              {/* Bouton Précédent */}
              <button
                onClick={handlePrev}
                className="text-secondary text-sm border border-secondary px-3 py-1 rounded hover:bg-secondary/10 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#f2f2f2" d="M20.834 8.037L9.64 14.5c-1.43.824-1.43 2.175 0 3l11.194 6.463c1.43.826 2.598.15 2.598-1.5V9.537c0-1.65-1.17-2.326-2.598-1.5" /></svg>
              </button>

              <section>
                {/* Titre du projet */}
                <h3 className="text-white text-lg font-semibold text-center">
                  {currentProject.nom}
                </h3>

                {/* Points d'indication */}
                <div className="flex items-center justify-center gap-2 mt-2">
                  {ArrayProjets.map((_, index) => (
                    <span
                      key={index}
                      className={`h-3 w-3 rounded-full transition-all duration-300 
        ${index === currentIndex ? "bg-secondary" : "bg-secondary/40"}
      `}
                    />
                  ))}
                </div>
              </section>


              {/* Bouton Suivant */}
              <button
                onClick={handleNext}
                className="text-secondary text-sm border border-secondary px-3 py-1 rounded hover:bg-secondary/10 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#f2f2f2" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z" /></svg>
              </button>

            </div>


            {/* Description */}
            <p className="text-sm text-gray-200 text-center min-h-[180px] lg:min-h-[100px]">
              {currentProject.description}
            </p>

            {/* Lien GitHub du projet + lien du site*/}
            <a
              href={currentProject.site}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-center text-sm text-secondary underline"
            >
              Voir le site
            </a>
            <a
              href={currentProject.lien}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-center text-sm text-secondary underline"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>

      </div>
      <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
    </section >
  );

}

export default Projet;
