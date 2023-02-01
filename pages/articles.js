import { useRouter } from "next/router";
import styles from "../styles/Articles.module.css";
import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import ArticleCard from "../components/ReusableComponent/ArticleCard/ArticleCard";
import { useEffect, useState } from "react";
import { ButtonBase } from "@mui/material";
import getRequest from "../utils/api/getRequest";

const Articles = () => {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllArticles = async () => {
      const articlesResponse = await getRequest("/articles");
      setArticles(articlesResponse.data);
    };
    getAllArticles();
  }, []);
  const onArticleClick = (aid) => {
    router.push({ pathname: "article_details", query: { aid: aid } });
  };
  const onCreateArticleClick = () => {
    router.push("create_article");
  };
  const renderArticles = () => {
    try {
      return articles.map((article) => {
        const { id, title, desc, thumbnail, isPublished } = article;
        return (
          <div
            key={id}
            className={styles.articleCard}
            onClick={() => {
              onArticleClick(id);
            }}
          >
            <ArticleCard
              title={title}
              desc={desc}
              thumbnail={thumbnail}
              isPublished={isPublished}
            />
          </div>
        );
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className={styles.container}>
      <DesktopHeader />
      <div className={styles.bodyContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.articleTabContainer}>
            <div>Articles</div>
            <ButtonBase
              sx={{ borderRadius: "0.5rem" }}
              onClick={onCreateArticleClick}
            >
              <div className={styles.addBtn}>Add</div>
            </ButtonBase>
          </div>
          <div className={styles.articleBody}>{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
