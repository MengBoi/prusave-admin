import stripHtmlString from "../../../utils/stripHtmlString";
import PublishedIndicator from "../PublishedIndicator/PublishedIndicator";
import styles from "./ArticleCard.module.css";

const ArticleCard = (props) => {
  const { title, desc, thumbnail, isPublished } = props;
  const strippedTitle = stripHtmlString(title);
  const descTitle = stripHtmlString(desc);
  return (
    <div className={styles.container}>
      {isPublished && (
        <div className={styles.publishedIndicatorContainer}>
          <PublishedIndicator />
        </div>
      )}
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
