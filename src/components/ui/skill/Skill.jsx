import styles from "./Skill.module.css";

/**
 * @param {Object} props
 * @param {Component} props.icon - Icon component function
 * @param {String} [props.description] - Icon description
 * @returns
 */

export const Skill = ({ icon: Icon, description = "" }) => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillIcon}>
        <Icon width={"2.2rem"} height={"2.2rem"} />
      </div>
      {description ? <p className={styles.description}>{description}</p> : ""}
    </div>
  );
};
