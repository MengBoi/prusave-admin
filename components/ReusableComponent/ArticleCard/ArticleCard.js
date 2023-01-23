import stripHtmlString from "../../../utils/stripHtmlString";
import styles from "./ArticleCard.module.css";

const ArticleCard = (props) => {
  const { title, desc, thumbnail } = props;
  const strippedTitle = stripHtmlString(title);
  const descTitle = stripHtmlString(desc);
  return (
    <div className={styles.container}>
      <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" fill />
      <div className={styles.bodyContainer}>
        <div
          className={styles.title}
          // dangerouslySetInnerHTML={{ __html: desc }}
        >
          {strippedTitle}
        </div>
        <div className={styles.desc}>{descTitle}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
