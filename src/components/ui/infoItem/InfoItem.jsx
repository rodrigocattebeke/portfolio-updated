import styles from "./infoItem.module.css";
/**
 *
 * @param {Object} props
 * @param {"Component"} [props.icon] - Icon component
 * @param {String} props.title
 * @param {String} props.description
 * @returns
 */

export const InfoItem = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.infoItem}>
      {Icon ? (
        <div className={styles.iconContainer}>
          <Icon width="2rem" height="2rem" />
        </div>
      ) : (
        ""
      )}
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
