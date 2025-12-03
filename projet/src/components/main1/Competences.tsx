function Competences() {
  return (
    <div>
      <section>
        <h1 className="text-secondary text-center pb-10 pt-10">Mes compétences</h1>

        {/* FRONT-END */}
        <article>
          <h2 className="text-tertiary text-center mb-4">Développement Front-End</h2>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="w-32 text-white">HTML 5</span>
              <img className="w-6 h-6" src="./assets/akar-icons--html-fill.png" alt="HTML5" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">CSS 3</span>
              <img className="w-6 h-6" src="./assets/akar-icons--css-fill.png" alt="CSS3" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">JavaScript</span>
              <img className="w-6 h-6" src="./assets/ri--javascript-fill.png" alt="JavaScript" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">REACT</span>
              <img className="w-6 h-6" src="./assets/akar-icons--react-fill.png" alt="REACT" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">TypeScript</span>
              <img className="w-6 h-6" src="./assets/akar-icons--typescript-fill.png" alt="TypeScript" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">Tailwind</span>
              <img className="w-6 h-6" src="./assets/mdi--tailwind.png" alt="Tailwind" />
            </div>
          </div>
        </article>


        {/* BACK-END */}
        <article>
          <h2 className="text-tertiary text-center mb-4 mt-10">Développement Back-End</h2>

          <div className="flex flex-col items-center gap-2">

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">Express</span>
              <img className="w-6 h-6" src="./assets/simple-icons--express.png" alt="Express" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">Node</span>
              <img className="w-6 h-6" src="./assets/fa7-brands--node.png" alt="Node" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">SQL</span>
              <img className="w-6 h-6" src="./assets/carbon--sql.png" alt="SQL" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">MySQL</span>
              <img className="w-6 h-6" src="./assets/cib--mysql.png" alt="MySQL" />
            </div>

          </div>
        </article>

        {/* OUTILS */}
        <article>
          <h2 className="text-tertiary text-center mb-4 mt-10">Outils</h2>

          <div className="flex flex-col items-center gap-2">

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">Git</span>
              <img className="w-6 h-6" src="./assets/pajamas--git.png" alt="Git" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">GitHub</span>
              <img className="w-6 h-6" src="./assets/iconoir--github.png" alt="GitHub" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">VSCode</span>
              <img className="w-6 h-6" src="./assets/picon--vscode.png" alt="VSCode" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">Figma</span>
              <img className="w-6 h-6" src="./assets/solar--figma-linear.png" alt="Figma" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">Trello</span>
              <img className="w-6 h-6" src="./assets/mdi--trello.png" alt="Trello" />
            </div>

            <div className="flex items-center gap-3">
              <span className="w-32 text-white">LinkedIn</span>
              <img className="w-6 h-6" src="./assets/uil--linkedin.png" alt="LinkedIn" />
            </div>

          </div>
        </article>

      </section>
      <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
    </div>

  );
}

export default Competences;
