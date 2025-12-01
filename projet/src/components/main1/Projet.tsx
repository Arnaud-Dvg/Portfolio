import { useState } from "react";

const ArrayProjets = [
  { id: 1, nom: "TakuTaku", image: "/assets/Photo Projet/TakuTaku.png", description: "Plateforme web de streaming d’animés développée en équipe, avec un frontend React/Tailwind et un backend Node.js/Express/MySQL. Le projet inclut l’authentification, la gestion des utilisateurs, les favoris, l’administration des animés, ainsi qu’une interface moderne et responsive.", lien: "https://github.com/Arnaud-Dvg/Project-TakuTaku" },
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
    <section id="projects" className="py-16">
      <h2 className="text-secondary text-center mb-8">Mes projets</h2>

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

            {/* Titre du projet */}
            <h3 className="text-white text-lg font-semibold text-center">
              {currentProject.nom}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-200 text-center min-h-[180px] lg:min-h-[100px]">
              {currentProject.description}
            </p>

            {/* Lien GitHub du projet */}
            <a
              href={currentProject.lien}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-center text-sm text-secondary underline"
            >
              Voir sur GitHub
            </a>
          </div>
        </div>

        {/* Barre de navigation : précédent, suivant */}
        <div className="mt-4 flex items-center justify-between">

          {/* Bouton Précédent */}
          <button
            onClick={handlePrev}
            className="text-secondary text-sm border border-secondary px-3 py-1 rounded hover:bg-secondary/10"
          >
            ← Précédent
          </button>

          {/* Bouton Suivant */}
          <button
            onClick={handleNext}
            className="text-secondary text-sm border border-secondary px-3 py-1 rounded hover:bg-secondary/10"
          >
            Suivant →
          </button>

        </div>
      </div>
    </section>
  );

}

export default Projet;
