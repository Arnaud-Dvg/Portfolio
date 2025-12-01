import Contact from "./contact";
import Projet from "./projet";
import Description from "./description";
import Competences from "./competences";

function Main() {
  return (
    <>
      <section className="bg-primary">
        <Description />
        <Competences />
        <Projet />
        <Contact />
      </section >
    </>
  );
}

export default Main;
