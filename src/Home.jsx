import { useEffect, useState } from "react";
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
import { MenuModal } from "./components/ui/menuModal/MenuModal";
import { Skill } from "./components/ui/skill/Skill";
import { Menu } from "./components/icons/Menu";
import { proyects } from "./constants/proyects";
import HeroImg from "@/assets/images/rodrigo_cattebeke.png";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Header modal links
  const navLinks = [
    { title: "Inicio", href: "#hero" },
    { title: "Sobre Mi", href: "#aboutMe" },
    { title: "Habilidades", href: "#skills" },
    { title: "Mis Proyectos", href: "#proyects" },
    { title: "Contáctame", href: "#contactMe" },
  ];

  const onModalClose = () => {
    setIsOpen(false);
  };

  // Contact form
  const onSubmit = (e) => {
    e.preventDefault();
  };

  // Intersection observer
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-element, .proyectCard");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // 10% of the element
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header>
        <div className="headerExpanded">
          <h2>Rodrigo Cattebeke</h2>
          <ul>
            {navLinks.map((link, i) => (
              <li key={i}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="headerMinimized">
          <div
            className="hamburguerButton"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <Menu width="3rem" height="3rem" />
          </div>
          <MenuModal isOpen={isOpen} onClose={onModalClose} children={navLinks} />
        </div>
      </header>
      <section className="hero" id="hero">
        <div className="heroImgContainer">
          <div>
            <img src={HeroImg}></img>
          </div>
        </div>
        <div className="heroTextContainer">
          <h1 className="heroTitle">
            Hola, soy <br /> Rodrigo Cattebeke
          </h1>
          <p className="heroRole">Desarrollador Front-End | Transformando ideas en experiencias interactivas</p>
          <p className="heroDescription">Creo aplicaciones web modernas y responsivas usando React, Next.js y otras tecnologías actuales. Disfruto diseñando interfaces limpias y dando vida a las ideas con código.</p>
          <div className="heroButtonsContainer">
            <Button text="Ver mis proyectos" fullWidth={true} href={"#proyects"} />
            <Button text="Contáctame" mode="secondary" fullWidth={true} href={"#contactMe"} />
          </div>
        </div>
      </section>
      <section className="aboutMe fade-element" id="aboutMe">
        <h2 className="sectionTitle">Sobre Mi</h2>
        <div className="aboutMeDescriptionWrapper">
          <p className="aboutMeDescription">Soy un desarrollador front-end enfocado en la construcción de experiencias web modernas, funcionales y bien estructuradas.Trabajo con Next.js y React, buscando siempre mejorar la calidad del código y aprovechar al máximo las herramientas del ecosistema. Me apasiona seguir aprendiendo, descubrir nuevas tecnologías y crecer con cada proyecto para alcanzar un desarrollo cada vez más profesional.</p>
          <div className="aboutMeInfoItemsContainer">
            <InfoItem icon={Work} title="Experiencia" description="Trainee" className="fade-element" />
            <InfoItem icon={Public} title="Ubicación" description="Paraguay" className="fade-element" />
            <InfoItem icon={Chat} title="Idiomas" description="Español" className="fade-element" />
          </div>
        </div>
        <div className="aboutMeSkills fade-element" id="skills">
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
      <section className="myProyects " id="proyects">
        <h2 className="sectionTitle">Mis proyectos</h2>
        <div className="proyectsContainer">
          {/* turn the card every 1 place */}
          {proyects.map((p, i) => (
            <ProyectCard title={p.title} description={p.description} img={p.img} tools={p.tools} proyectURL={p.proyectURL} githubURL={p.githubURL} reverse={i % 2 == 0 ? false : true} className="proyectCard" key={i} />
          ))}
        </div>
      </section>
      <section className="contactMe fade-element" id="contactMe">
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
      <section className="linksIcons fade-element">
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
        <ul className="footerLinks">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
