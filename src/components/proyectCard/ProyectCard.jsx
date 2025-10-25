import { Badge } from "../ui/badge/Badge";
import { Button } from "../ui/button/Button";
import styles from "./ProyectCard.module.css";

/**
 * @param {Object} props
 * @param {String} props.title - Proyect title
 * @param {String} props.description - Proyect description
 * @param {String} props.img - Image source
 * @param {Array} props.tools - Array of tools used in the proyect
 * @param {String} props.proyectURL - Proyect page URL
 * @param {String} props.githubURL - Proyect repository URL
 * @param {boolean} props.reverse - Reverse proyect card
 * @returns
 */

export const ProyectCard = ({ title, description, img, tools, proyectURL, githubURL, reverse = false }) => {
  if (!title) return console.error("Se necesita pasar el título");
  if (!img) return console.error("Se necesita pasar el src de la imagen");
  if (!proyectURL) return console.error("Se necesita pasar la URL al proyecto");
  if (!githubURL) return console.error("Se necesita pasar la URL al github");

  return (
    <div className={`${styles.proyectCard} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imgWrapper}>
        <div className={styles.imgContainer}>{<img src={img} alt={`Imagen del proyecto ${title}`} />}</div>
      </div>
      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.toolsContainer}>
          {tools.map((tool, i) => (
            <Badge text={tool} key={i} />
          ))}
        </div>
        <div className={styles.buttonsContainer}>
          <Button text="Ver proyecto" href={proyectURL} fullWidth={true} />
          <Button text="Ver en GitHub" href={githubURL} mode="secondary" fullWidth={true} />
        </div>
      </div>
    </div>
  );
};
