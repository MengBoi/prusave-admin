import styles from "./ArticleCard.module.css";

const ArticleCard = (props) => {
  const { title, desc } = props;
  return (
    <div className={styles.container}>
      <div>
        <Image />
      </div>
    </div>
  );
};

export default ArticleCard;
