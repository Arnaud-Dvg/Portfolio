import { motion } from "framer-motion";

function Description() {
  return (
    <motion.section
      id="description"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative [&_p]:text-white [&_p]:text-center [&_p]:mx-auto [&_p]:w-2/3">
        <h1 className="text-secondary text-center pb-5 pt-10">Développeur Web Full-Stack
        </h1>
        <img src="./assets/moi.png" alt="Photo de Arnaud Devoge" className="rounded-full h-[100px] mx-auto shadow-[0_0_10px_1px] shadow-[#5ce1e6] hover:scale-105" />
        {/* Version Desktop */}
        <p className="hidden md:flex mb-4 pt-5">Développeur web passionné, je me suis réorienté après plusieurs années dans la logistique et la régulation du transport. Aujourd’hui, je conçois et développe des applications web modernes, alliant performance, UX soignée et bonnes pratiques.</p>
        <p className="hidden md:flex mb-4">
          Formé au titre DWWM à la Wild Code School, j’ai travaillé sur plusieurs projets complets en React, Node.js, Express et MySQL, avec une approche centrée sur la qualité du code, l’organisation Agile et l’expérience utilisateur. J’aime créer des interfaces fluides, des backends structurés et des fonctionnalités robustes.</p>
        <p className="hidden md:flex">
          Curieux et rigoureux, j’apprécie tout particulièrement résoudre des problèmes techniques, apprendre en continu et collaborer avec une équipe pour faire évoluer un projet dans la bonne direction.</p>
        {/* Version Mobile */}
        <p className="md:hidden pt-5">
          Développeur web passionné, je crée des applications modernes en React et Node.js. Issu d’une reconversion, je privilégie la qualité du code, l’UX et les bonnes pratiques. Curieux et rigoureux, j’aime résoudre des problèmes et construire des projets utiles et performants.
        </p>
        <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
      </div>
    </motion.section>
  );
}

export default Description;
