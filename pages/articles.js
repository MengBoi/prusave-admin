import { useRouter } from "next/router";
import styles from "../styles/Articles.module.css";
import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import TabHeader from "../components/ReusableComponent/TabHeader/TabHeader";
import ArticleCard from "../components/ReusableComponent/ArticleCard/ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const router = useRouter();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAllArticles = async () => {
      const articlesResponse = await axios.get(
        "http://localhost:3000/articles"
      );
      console.log(articlesResponse.data);
      setArticles(articlesResponse.data);
    };
    getAllArticles();
  }, []);
  const onArticleClick = () => {
    router.push("article_details");
  };
  const renderArticles = () => {
    return articles.map((article) => {
      const { title, desc, thumbnail } = article;
      return (
        <div className={styles.articleCard} onClick={onArticleClick}>
          <ArticleCard title={title} desc={desc} thumbnail={thumbnail} />
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <DesktopHeader />
      <div className={styles.bodyContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div className={styles.sectionBody}>
          <TabHeader title="Articles" />
          <div className={styles.articleBody}>{renderArticles()}</div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
