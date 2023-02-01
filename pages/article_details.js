import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import styles from "../styles/ArticleDetails.module.css";
import { ButtonBase } from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import ConfirmModal from "../components/ReusableComponent/ConfirmModal/ConfirmModal";
import PublishedIndicator from "../components/ReusableComponent/PublishedIndicator/PublishedIndicator";
import deleteRequest from "../utils/api/deleteRequest";
const ArticleDetails = () => {
  const router = useRouter();
  const { aid } = router.query;
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [isConfirmModalShow, setIsConfirmModalShow] = useState(false);
  useEffect(() => {
    const getArticleDetails = async () => {
      const articlesResponse = await axios.get(
        process.env.NEXT_PUBLIC_API_HOSTNAME + "/articles/" + aid
      );
      const { title, desc, thumbnail, isPublished } = articlesResponse.data;
      setTitle(title);
      setDesc(desc);
      setThumbnail(thumbnail);
      setIsPublished(isPublished);
    };
    if (!router.isReady) {
      return;
    }
    getArticleDetails();
  }, [router.isReady]);
  const onEditClick = () => {
    router.push({ pathname: "/update_articles", query: { aid } });
  };
  const onDeleteClick = () => {
    setIsConfirmModalShow(true);
  };
  const onDeleteConfirmClick = async () => {
    const response = await deleteRequest("articles/" + aid);
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
      <div>
        <DesktopHeader />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.articleTabContainer}>
            <div>Article Details</div>
            <div className={styles.actionsContainer}>
              <ButtonBase
                sx={{ borderRadius: "0.5rem", marginRight: "2rem" }}
                onClick={onEditClick}
              >
                <div className={styles.editBtn}>Edit</div>
              </ButtonBase>
              <ButtonBase
                sx={{ borderRadius: "0.5rem" }}
                onClick={onDeleteClick}
              >
                <div className={styles.deleteBtn}>Delete</div>
              </ButtonBase>
            </div>
          </div>
          <div className={styles.detailsBody}>
            <div className={styles.titleAndDescContainer}>
              <div
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
              >
                {/* {title} */}
              </div>
              <div
                className={styles.desc}
                dangerouslySetInnerHTML={{ __html: desc }}
              >
                {/* {desc} */}
              </div>
            </div>
            <div className={styles.thumbnailAndStatusContainer}>
              <img
                className={styles.thumbnail}
                src={thumbnail}
                alt="thumbnail"
              />
              <div className={styles.statusContainer}>
                <div className={styles.status}>Status:</div>
                {isPublished && <PublishedIndicator />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
