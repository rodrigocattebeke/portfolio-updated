import styles from "./Button.module.css";
/**
 *@param {Object} props
 * @param {Boolean} [props.fullWidth] - Button full width
 * @param {URL} [props.href] - href for the anchor element
 * @param {'primary' | 'secondary'} [props.mode] - Button style
 * @param {String} [props.text] - Button text
 *
 * @returns
 */

export const Button = ({ mode = "primary", text = "", fullWidth = false, href }) => {
  return href ? (
    <a className={`${styles.button} ${styles[mode]} ${fullWidth ? styles.fullWidth : ""}`} href={href} target="_blank" rel="noopener">
      {text}
    </a>
  ) : (
    <button className={`${styles.button} ${styles[mode]} ${fullWidth ? styles.fullWidth : ""}`}>{text}</button>
  );
};
