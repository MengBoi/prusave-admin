import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";
import TabHeader from "../components/ReusableComponent/TabHeader/TabHeader";
import styles from "../styles/ArticleDetails.module.css";
import Image from "next/image";
import { ButtonBase } from "@mui/material";
const ArticleDetails = () => {
  return (
    <div className={styles.container}>
      <DesktopHeader />
      <div className={styles.bodyContainer}>
        <div className={styles.navigationBar}>
          <NavigationBar />
        </div>
        <div className={styles.sectionBody}>
          <TabHeader title="Article Details" />
          <div className={styles.detailsBody}>
            <div className={styles.titleAndDescContainer}>
              <div className={styles.title}>
                How to save money without compromise drinking coffee?
              </div>
              <div className={styles.desc}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus
                Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </div>
            </div>
            <div className={styles.thumbnailContainer}>
              <Image src="/jpeg/coffee-machine.jpeg" fill />
            </div>
          </div>
          <div className={styles.actionsContainer}>
            <ButtonBase sx={{ borderRadius: "0.5rem" }}>
              <div className={styles.deleteArticle}>Delete Article</div>
            </ButtonBase>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
