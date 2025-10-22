import { Boostrap } from "./components/icons/Boostrap";
import { Chat } from "./components/icons/Chat";
import { CSS } from "./components/icons/CSS";
import { Figma } from "./components/icons/Figma";
import { Git } from "./components/icons/Git";
import { JavaScript } from "./components/icons/JavaScript";
import { NextJs } from "./components/icons/NextJs";
import { Public } from "./components/icons/Public";
import { Work } from "./components/icons/Work";
import { Button } from "./components/ui/button/Button";
import { InfoItem } from "./components/ui/infoItem/InfoItem";
import { Skill } from "./components/ui/skill/Skill";

export function Home() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

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
          <div className="heroButtonsContainer">
            <Button text="Ver mis proyectos" fullWidth={true} href={"hasd"} />
            <Button text="Contáctame" mode="secondary" fullWidth={true} />
          </div>
        </div>
      </section>
      <section className="aboutMe ">
        <h2 className="sectionTitle">Sobre Mi</h2>
        <p className="description">Soy un desarrollador front-end enfocado en la construcción de experiencias web modernas, funcionales y bien estructuradas.Trabajo con Next.js y React, buscando siempre mejorar la calidad del código y aprovechar al máximo las herramientas del ecosistema.Me apasiona seguir aprendiendo, descubrir nuevas tecnologías y crecer con cada proyecto para alcanzar un desarrollo cada vez más profesional.</p>
        <div className="aboutMeInfoItemsContainer">
          <InfoItem icon={Work} title="Experiencia" description="Trainee" />
          <InfoItem icon={Public} title="Ubicación" description="Paraguay" />
          <InfoItem icon={Chat} title="Idiomas" description="Español" />
        </div>
      </section>
      <section className="skills">
        <h2 className="sectionTitle">Mis Habilidades y Herramientas</h2>
        <p className="skillsDescription">Tecnologías que uso para dar vida a mis ideas</p>
        <div className="skillsContainer">
          <Skill icon={NextJs} description="Next.js" />
          <Skill icon={JavaScript} description="JavaScript" />
          <Skill icon={Git} description={"Git"} />
          <Skill icon={Figma} description={"Figma"} />
          <Skill icon={CSS} description={"CSS"} />
          <Skill icon={Boostrap} description={"Bootstrap"} />
        </div>
      </section>
      <section className="contactMe">
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
        <p>github</p>
        <p>linkedin</p>
        <p>email</p>
      </section>
    </>
  );
}
