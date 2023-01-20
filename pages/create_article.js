import { ButtonBase, TextField } from "@mui/material";
import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import styles from "../styles/CreateArticle.module.css";
import { RiGalleryFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import generateFileName from "../utils/generateFileName";
import { storage } from "../config/firebase-config";
import axios from "axios";
import { useRouter } from "next/router";
const CreateArticle = () => {
  const router = useRouter();
  const inputImageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState();
  const [imageFile, setImageFile] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const onImagePick = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImageSrc(url);
    setImageFile(event.target.files[0]);
  };
  const submitArticle = async (imgUrl) => {
    const submitResponse = await axios.post(
      process.env.NEXT_PUBLIC_API_END_POINT + "articles",
      // "http://localhost:3002/articles",
      {
        title: title,
        desc: desc,
        thumbnail: imgUrl,
      },
      {
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
      }
    );
    if (submitResponse.status == 201) {
      router.push("/articles");
    } else {
      alert("error:");
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
          submitArticle(url);
        });
      }
    );
  };
  const onSubmitClick = () => {
    uploadImage();
  };
  const renderPhotoBody = () => {
    if (imageSrc) {
      return <img className={styles.uploadedImg} src={imageSrc} />;
    }
    return (
      <div className={styles.galleryContainer}>
        <RiGalleryFill className={styles.galleryIcon} />
      </div>
    );
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
            <TextField
              variant="outlined"
              sx={{ width: "100%" }}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <div className={styles.desc}>Description</div>
            <TextField
              variant="outlined"
              multiline
              onChange={(event) => {
                setDesc(event.target.value);
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
              <ButtonBase onClick={onSubmitClick}>
                <div className={styles.uploadBtn}>Submit</div>
              </ButtonBase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
