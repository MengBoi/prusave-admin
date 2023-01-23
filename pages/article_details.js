import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import styles from "../styles/ArticleDetails.module.css";
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ConfirmModal from "../components/ReusableComponent/ConfirmModal/ConfirmModal";

const ArticleDetails = () => {
  const router = useRouter();
  const { aid } = router.query;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isConfirmModalShow, setIsConfirmModalShow] = useState(false);
  useEffect(() => {
    const getArticleDetails = async () => {
      const articlesResponse = await axios.get(
        process.env.NEXT_PUBLIC_API_END_POINT + "/articles/" + aid
      );
      const { title, desc, thumbnail } = articlesResponse.data;
      setTitle(title);
      setDesc(desc);
      setThumbnail(thumbnail);
    };
    if (!router.isReady) {
      return;
    }
    getArticleDetails();
  }, [router.isReady]);
  const onDeleteClick = () => {
    setIsConfirmModalShow(true);
  };
  const onDeleteConfirmClick = async () => {
    const response = await axios.delete(
      "https://prusave-backend-hc6oexyfvq-as.a.run.app/articles/" + aid,
      {
        headers: {
          accept: "*/*",
        },
      }
    );
    if (response.status == 200) {
      router.push("/articles");
    }
  };
  return (
    <div className={styles.container}>
      <ConfirmModal
        open={isConfirmModalShow}
        setOpen={setIsConfirmModalShow}
        msg="Are you sure you want to delete?"
        onConfirm={onDeleteConfirmClick}
      />
      <DesktopHeader />
      <div className={styles.bodyContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.detailsBody}>
            <div className={styles.titleAndDescContainer}>
              <div className={styles.title}>{title}</div>
              <div className={styles.desc}>{desc}</div>
            </div>
            <img className={styles.thumbnail} src={thumbnail} alt="thumbnail" />
          </div>
          <div className={styles.actionsContainer}>
            <ButtonBase sx={{ borderRadius: "0.5rem" }} onClick={onDeleteClick}>
              <div className={styles.deleteArticle}>Delete Article</div>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
