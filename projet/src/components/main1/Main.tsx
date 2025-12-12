import Contact from "./Contact";
import Projet from "./Projet";
import Description from "./Description";
import Competences from "./Competences";
import RotatingCube from "./RotatingCube";

function Main() {
  return (
    <>
      <section className="bg-primary">
        <RotatingCube />
        <Description />
        <Competences />
        <Projet />
        <Contact />
      </section >
    </>
  );
}

export default Main;
