import styles from "./Button.module.css";
/**
 *@param {Object} props
 * @param {Boolean} [props.fullWidth] - Button full width
 * @param {URL} [props.href] - href for the anchor element
 * @param {'primary' | 'secondary'} [props.mode] - Button style
 * @param {String} [props.text] - Button text
 * @param {"_self" | '_blank' | "_parent" | "_top"} [props.target] - Target type of anchor (default _self)
 * @returns
 */

export const Button = ({ mode = "primary", text = "", fullWidth = false, href, target = "_self" }) => {
  return href ? (
    <a className={`${styles.button} ${styles[mode]} ${fullWidth ? styles.fullWidth : ""}`} href={href} target={target} rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <button className={`${styles.button} ${styles[mode]} ${fullWidth ? styles.fullWidth : ""}`}>{text}</button>
  );
};
