import styles from "./Toast.module.css";
/**
 *
 * @param {Object} props
 * @param {string} props.message
 * @param {"success" | "error"} [props.mode]
 * @returns
 */

export const Toast = ({ message, mode = "success" }) => {
  return (
    <div className={`${styles.toast} ${styles[mode]}`}>
      <p>{message}</p>
    </div>
  );
};
