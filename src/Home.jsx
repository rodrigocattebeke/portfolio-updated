import { Boostrap } from "./components/icons/Boostrap";
import { Chat } from "./components/icons/Chat";
import { CSS } from "./components/icons/CSS";
import { Figma } from "./components/icons/Figma";
import { Git } from "./components/icons/Git";
import { Github } from "./components/icons/Github";
import { JavaScript } from "./components/icons/JavaScript";
import { Linkedin } from "./components/icons/Linkedin";
import { Mail } from "./components/icons/Mail";
import { NextJs } from "./components/icons/NextJs";
import { Public } from "./components/icons/Public";
import { Work } from "./components/icons/Work";
import { ProyectCard } from "./components/proyectCard/ProyectCard";
import { Button } from "./components/ui/button/Button";
import { InfoItem } from "./components/ui/infoItem/InfoItem";
import { Skill } from "./components/ui/skill/Skill";

export function Home() {
  // Proyects

  const proyects = [
    {
      title: "ManduApp",
      description: "ManduApp es una aplicación web creada con Next.js y React, diseñada para gestionar listas e ítems con estados pendientes, en proceso y completados. La autenticación de usuarios y el almacenamiento de datos se implementaron con Firebase, asegurando que cada usuario pueda guardar y acceder a sus listas de manera segura y sencilla.",
      img: "src/assets/proyects/manduapp.png",
      tools: ["Next.js", "Firebase", "Cloudinary", "Figma", "CSS", "Bootstrap (grid system)"],
      proyectURL: "https://manduapp.netlify.app/",
      githubURL: "https://github.com/rodrigocattebeke/manduApp",
    },
  ];

  // Contact form
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header></header>
      <section className="hero" id="hero">
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
          <div className="heroButtonsContainer">
            <Button text="Ver mis proyectos" fullWidth={true} href={"hasd"} />
            <Button text="Contáctame" mode="secondary" fullWidth={true} />
          </div>
        </div>
      </section>
      <section className="aboutMe" id="aboutMe">
        <h2 className="sectionTitle">Sobre Mi</h2>
        <div className="aboutMeDescriptionWrapper">
          <p className="aboutMeDescription">Soy un desarrollador front-end enfocado en la construcción de experiencias web modernas, funcionales y bien estructuradas.Trabajo con Next.js y React, buscando siempre mejorar la calidad del código y aprovechar al máximo las herramientas del ecosistema.Me apasiona seguir aprendiendo, descubrir nuevas tecnologías y crecer con cada proyecto para alcanzar un desarrollo cada vez más profesional.</p>
          <div className="aboutMeInfoItemsContainer">
            <InfoItem icon={Work} title="Experiencia" description="Trainee" />
            <InfoItem icon={Public} title="Ubicación" description="Paraguay" />
            <InfoItem icon={Chat} title="Idiomas" description="Español" />
          </div>
        </div>
        <div className="aboutMeSkills" id="skills">
          <p className="skillsDescription">Tecnologías que uso para dar vida a mis ideas</p>
          <div className="skillsContainer">
            <Skill icon={NextJs} description="Next.js" />
            <Skill icon={JavaScript} description="JavaScript" />
            <Skill icon={Git} description={"Git"} />
            <Skill icon={Figma} description={"Figma"} />
            <Skill icon={CSS} description={"CSS"} />
            <Skill icon={Boostrap} description={"Bootstrap"} />
          </div>
        </div>
      </section>
      <section className="myProyects" id="proyects">
        <h2 className="sectionTitle">Mis proyectos</h2>
        <div className="proyectsContainer">
          {proyects.map((p, i) => (
            <ProyectCard title={p.title} description={p.description} img={p.img} tools={p.tools} proyectURL={p.proyectURL} githubURL={p.githubURL} key={i} />
          ))}
        </div>
      </section>
      <section className="contactMe" id="contactMe">
        <h2 className="sectionTitle">Contáctame</h2>
        <p className="description"></p>
        <div className="contactFormContainer">
          <form className="contactForm" onSubmit={onSubmit}>
            <input name="name" placeholder="Tu nombre" autoComplete="name"></input>
            <input name="email" placeholder="Tu email" autoComplete="email"></input>
            <textarea name="message" placeholder="Tu mensaje"></textarea>
            <div className="contactFormButton">
              <Button text="Enviar mensaje" fullWidth="true" />
            </div>
          </form>
        </div>
      </section>
      <section className="linksIcons">
        <a href="https://github.com/rodrigocattebeke" rel="noopener" target="_blank">
          <Github width="2.2rem" height="2.2rem" />
        </a>
        <a href="#">
          <Linkedin width="2.2rem" height="2.2rem" />
        </a>
        <a href="mailto:rodrigocattebekedev@gmail.com?subject=Trabajo&body=Hola,%20me%20estoy%20contactando%20para%20un%20trabajo.">
          <Mail width="2.9rem" height="2.9rem" />
        </a>
      </section>
      <footer>
        <p className="footerDevName">Rodrigo Cattebeke</p>
        <div className="footerLinks">
          <a href="#hero">Inicio</a>
          <a href="#aboutMe">Sobre mi</a>
          <a href="#skills">Habilidades</a>
          <a href="#proyects">Mis proyectos</a>
          <a href="#contact">Contáctame</a>
        </div>
      </footer>
    </>
  );
}
