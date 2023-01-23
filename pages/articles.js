import { useRouter } from "next/router";
import styles from "../styles/Articles.module.css";
import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";

import ArticleCard from "../components/ReusableComponent/ArticleCard/ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { ButtonBase } from "@mui/material";

const Articles = () => {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllArticles = async () => {
      const articlesResponse = await axios.get(
        process.env.NEXT_PUBLIC_API_END_POINT + "/articles"
      );
      console.log(articlesResponse.data);
      setArticles(articlesResponse.data);
    };
    getAllArticles();
  }, []);
  const onArticleClick = () => {
    router.push("article_details");
  };
  const onCreateArticleClick = () => {
    router.push("create_article");
  };
  const renderArticles = () => {
    try {
      return articles.map((article) => {
        const { id, title, desc, thumbnail } = article;
        return (
          <div key={id} className={styles.articleCard} onClick={onArticleClick}>
            <ArticleCard title={title} desc={desc} thumbnail={thumbnail} />
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
