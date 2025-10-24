import { Close } from "../../icons/Close";
import styles from "./MenuModal.module.css";

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {function} props.onClose
 * @param {Object[]} props.children
 * @param {string} props.children.title
 * @param {string} props.children.href
 */

export const MenuModal = ({ isOpen, onClose, children }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.show : ""}`}>
      <div className={`${styles.modal} ${isOpen ? styles.show : ""}`}>
        <div className={styles.close} onClick={handleClose}>
          <Close width="2rem" height="2rem" />
        </div>
        <ul>
          {children.map((child, i) => (
            <li key={i}>
              <a href={child.href} onClick={handleClose}>
                {child.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
