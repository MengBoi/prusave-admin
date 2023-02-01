import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import styles from "../styles/CreateArticle.module.css";
import { RiGalleryFill } from "react-icons/ri";
import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import generateFileName from "../utils/generateFileName";
import { storage } from "../config/firebase-config";
import postRequest from "../utils/api/postRequest";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Switch from "@mui/material/Switch";

const CreateArticle = () => {
  const router = useRouter();
  const inputImageRef = useRef(null);
  const [imageSrc, setImageSrc] = useState();
  const [imageFile, setImageFile] = useState();
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [publish, setPublish] = useState(false);
  const onImagePick = (event) => {
    const url = URL.createObjectURL(event.target.files[0]);
    setImageSrc(url);
    setImageFile(event.target.files[0]);
  };
  const submitArticle = async (imgUrl) => {
    const submitResponse = await postRequest("articles", {
      title: title,
      desc: desc,
      thumbnail: imgUrl,
      isPublished: publish,
    });
    if (submitResponse.status == 201) {
      router.push("/articles");
      return;
    }
    alert("error:");
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

            <ReactQuill value={title} onChange={setTitle} />
            <div className={styles.desc}>Description</div>

            <ReactQuill value={desc} onChange={setDesc} />
            <div className={styles.publish}>Publish</div>
            <Switch
              checked={publish}
              onChange={() => {
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
