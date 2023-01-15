import styles from "./TabHeader.module.css";
const TabHeader = (props) => {
  const { title } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default TabHeader;
