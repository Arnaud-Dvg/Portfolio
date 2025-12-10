function Footer() {
  return (
    <section className="flex justify-between bg-primary">
      <div className="text-white p-2">
        <p className="text-xs">© 2025 Arnaud Devoge.</p>
        <p className="text-xs">Tous droits réservés.</p>
      </div>
      <div className="flex p-2 gap-2">
        <a href="https://www.linkedin.com/in/arnaud-devoge"><img src="./assets/linkedin.png" alt="Instagram" /></a>
        <a href="https://github.com/Arnaud-Dvg"><img src="./assets/github.png" alt="GitHub" /></a>
      </div>
    </section>

  );
}

export default Footer;
