import styles from "./Badge.module.css";

/**
 * @param {Object} props
 * @param {string} props.text
 * @returns
 */

export const Badge = ({ text }) => {
  return (
    <div className={styles.badge}>
      <p>{text}</p>
    </div>
  );
};
