import styles from "./Button.module.css";

export const Button = (props) => {
  const { text } = props;
  return <button className={styles.button}>{text}</button>;
};
