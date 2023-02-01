import ButtonBase from "@mui/material/ButtonBase";

import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import styles from "../styles/UpdateArticle.module.css";

import { useRef, useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import generateFileName from "../utils/generateFileName";
import { storage } from "../config/firebase-config";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Switch from "@mui/material/Switch";
import getRequest from "../utils/api/getRequest";
import patchRequest from "../utils/api/patchRequest";
const CreateArticle = () => {
  const router = useRouter();
  const { aid } = router.query;
  const inputImageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState();
  const [imageFile, setImageFile] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [thumbnail, setThumbnail] = useState("");
  const [publish, setPublish] = useState(false);
  useEffect(() => {
    const getArticleDetails = async () => {
      const articlesResponse = await getRequest("/articles/" + aid);
      const { title, desc, thumbnail, isPublished } = articlesResponse.data;
      setTitle(title);
      setDesc(desc);
      setThumbnail(thumbnail);
      console.log("is", isPublished);
      console.log("ssss", articlesResponse);
      setPublish(isPublished);
    };
    if (!router.isReady) {
      return;
    }
    getArticleDetails();
  }, [router.isReady]);
  const onImagePick = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImageSrc(url);
    setImageFile(event.target.files[0]);
  };

  const updateArticle = async (imgUrl) => {
    const updateResponse = await patchRequest("/articles/" + aid, {
      title: title,
      desc: desc,
      thumbnail: imgUrl,
      isPublished: publish,
    });
    if (updateResponse.status == 200) {
      router.push({ pathname: "/article_details", query: { aid } });
    } else {
    }
  };
  const uploadImage = () => {
    const filename = generateFileName();
    const storageRef = ref(storage, `/prusave-article-img/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          updateArticle(url);
        });
      }
    );
  };
  const onUpdateClick = () => {
    if (imageSrc) {
      uploadImage();
    }
    updateArticle(thumbnail);
  };
  const renderPhotoBody = () => {
    if (imageSrc) {
      return <img className={styles.uploadedImg} src={imageSrc} />;
    }
    return <img className={styles.uploadedImg} src={thumbnail} />;
  };
  return (
    <div className={styles.container}>
      <div className={styles.desktopHeaderContainer}>
        <DesktopHeader />
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.sectionTabContainer}>Create Article</div>
          <div className={styles.createArticleContainer}>
            <div className={styles.title}>Title</div>
            <ReactQuill value={title} onChange={setTitle} />
            <div className={styles.desc}>Description</div>
            <ReactQuill value={desc} onChange={setDesc} />
            <div className={styles.publish}>Publish</div>
            <Switch
              checked={publish}
              onChange={() => {
                console.log("event", publish);
                setPublish(!publish);
              }}
            />
            <div className={styles.thumbnail}>Thumbnail</div>
            <div className={styles.imageUploadContainer}>
              {renderPhotoBody()}
              <ButtonBase
                type="file"
                sx={{ borderRadius: "0.6rem" }}
                onClick={(e) => {
                  inputImageRef.current.click();
                }}
              >
                <input
                  ref={inputImageRef}
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={onImagePick}
                />
                <div className={styles.uploadBtn}>Upload</div>
              </ButtonBase>
            </div>
            <div className={styles.actionsContainer}>
              <ButtonBase onClick={onUpdateClick} sx={{ marginBottom: "2rem" }}>
                <div className={styles.updateBtn}>Update</div>
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
