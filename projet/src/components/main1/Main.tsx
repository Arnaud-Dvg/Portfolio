import Contact from "./Contact";
import Projet from "./Projet";
import Description from "./Description";
import Competences from "./Competences";

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
