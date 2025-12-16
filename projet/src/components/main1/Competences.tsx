import { motion } from "framer-motion";

function Competences() {
  return (
    <motion.section
      id="compétences"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <section>
        <h1 className="text-secondary text-center pb-10 pt-10">Mes compétences</h1>

        {/* FRONT-END */}
        <article>
          <h2 className="text-tertiary text-center mb-4">Développement Front-End</h2>
          <div className="flex flex-col items-center gap-2 [&_div]:flex [&_div]:items-center [&_div]:gap-3 [&_span]:w-32 [&_span]:text-white [&_img]:w-6 [&_img]:h-6">
            <div>
              <span>HTML 5</span>
              <img src="./assets/akar-icons--html-fill.png" alt="HTML5" />
            </div>
            <div>
              <span>CSS 3</span>
              <img src="./assets/akar-icons--css-fill.png" alt="CSS3" />
            </div>
            <div>
              <span>JavaScript</span>
              <img src="./assets/ri--javascript-fill.png" alt="JavaScript" />
            </div>
            <div>
              <span>REACT</span>
              <img src="./assets/akar-icons--react-fill.png" alt="REACT" />
            </div>
            <div>
              <span>TypeScript</span>
              <img src="./assets/akar-icons--typescript-fill.png" alt="TypeScript" />
            </div>
            <div>
              <span>Tailwind</span>
              <img src="./assets/mdi--tailwind.png" alt="Tailwind" />
            </div>
          </div>
        </article>

        {/* BACK-END */}
        <article>
          <h2 className="text-tertiary text-center mb-4 mt-10">Développement Back-End</h2>
          <div className="flex flex-col items-center gap-2 [&_div]:flex [&_div]:items-center [&_div]:gap-3 [&_span]:w-32 [&_span]:text-white [&_img]:w-6 [&_img]:h-6">
            <div>
              <span>Express</span>
              <img src="./assets/simple-icons--express.png" alt="Express" />
            </div>
            <div>
              <span>Node</span>
              <img src="./assets/fa7-brands--node.png" alt="Node" />
            </div>
            <div>
              <span>SQL</span>
              <img src="./assets/carbon--sql.png" alt="SQL" />
            </div>
            <div>
              <span>MySQL</span>
              <img src="./assets/cib--mysql.png" alt="MySQL" />
            </div>
          </div>
        </article>

        {/* OUTILS */}
        <article>
          <h2 className="text-tertiary text-center mb-4 mt-10">Outils</h2>
          <div className="flex flex-col items-center gap-2 [&_div]:flex [&_div]:items-center [&_div]:gap-3 [&_span]:w-32 [&_span]:text-white [&_img]:w-6 [&_img]:h-6">
            <div>
              <span>Git</span>
              <img src="./assets/pajamas--git.png" alt="Git" />
            </div>
            <div>
              <span>GitHub</span>
              <img src="./assets/iconoir--github.png" alt="GitHub" />
            </div>
            <div>
              <span>VSCode</span>
              <img src="./assets/picon--vscode.png" alt="VSCode" />
            </div>
            <div>
              <span>Figma</span>
              <img src="./assets/solar--figma-linear.png" alt="Figma" />
            </div>
            <div>
              <span>Trello</span>
              <img src="./assets/mdi--trello.png" alt="Trello" />
            </div>
            <div>
              <span>LinkedIn</span>
              <img src="./assets/uil--linkedin.png" alt="LinkedIn" />
            </div>
          </div>
        </article>
      </section>
      <hr className="mt-10 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-secondary to-transparent opacity-75" />
    </motion.section>
  );
}

export default Competences;
