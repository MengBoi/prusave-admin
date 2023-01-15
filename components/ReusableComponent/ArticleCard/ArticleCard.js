import styles from "./ArticleCard.module.css";
import Image from "next/image";
const ArticleCard = (props) => {
  const { title, desc, thumbnail } = props;
  return (
    <div className={styles.container}>
      <div className={styles.thumbnailContainer}>
        <Image
          className={styles.thumbnail}
          src={thumbnail}
          alt="thumbnail"
          fill
        />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default ArticleCard;
