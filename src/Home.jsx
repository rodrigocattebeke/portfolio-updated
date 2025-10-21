export function Home() {
  return (
    <>
      <header></header>
      <section className="hero">
        <div className="heroImgContainer">
          <div></div>
          {/* <img></img> */}
        </div>
        <div className="heroTextContainer">
          <h1 className="heroTitle">
            Hola, soy <br /> Rodrigo Cattebeke
          </h1>
          <p className="heroRole">Desarrollador Front-End | Transformando ideas en experiencias interactivas</p>
          <p className="heroDescription">Creo aplicaciones web modernas y responsivas usando React, Next.js y otras tecnologías actuales. Disfruto diseñando interfaces limpias y dando vida a las ideas con código.</p>
          <div className="heroButtonsContainer"></div>
        </div>
      </section>
      <section className="AboutMe ">
        <h2 className="sectionTitle">Sobre Mi</h2>
        <p className="description">Soy un desarrollador front-end enfocado en la construcción de experiencias web modernas, funcionales y bien estructuradas.Trabajo con Next.js y React, buscando siempre mejorar la calidad del código y aprovechar al máximo las herramientas del ecosistema.Me apasiona seguir aprendiendo, descubrir nuevas tecnologías y crecer con cada proyecto para alcanzar un desarrollo cada vez más profesional.</p>1 skill 2skill 3skill
      </section>
      <section className="Skills">
        <h2 className="sectionTitle">Mis Habilidades y Herramientas</h2>
        <p className="skillsDescription">Tecnologías que uso para dar vida a mis ideas</p>
        <div className="skillsContainer"></div>
      </section>
      <section className="contactMe">
        <h2 className="sectionTitle">Contáctame</h2>
        <p className="description"></p>
        <div className="contactFormContainer">
          <form className="contactForm">
            <input name="name" placeholder="Tu nombre"></input>
            <input name="email" placeholder="Tu email"></input>
            <textarea name="message" Tu mensaje></textarea>
          </form>
          <button>Enviar mensaje</button>
        </div>
      </section>
      <section className="linksIcons">
        <p>github</p>
        <p>linkedin</p>
        <p>email</p>
      </section>
    </>
  );
}
