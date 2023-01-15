import { ButtonBase } from "@mui/material";
import styles from "./NavigationBar.module.css";
import { useRouter } from "next/router";
const NavigationBar = () => {
  const router = useRouter();
  const onArticlesClick = () => {
    router.push("/articles");
  };
  return (
    <div className={styles.container}>
      <ButtonBase
        sx={{
          background: "#32a852",
          color: "white",
          width: "100%",
          height: "3rem",
          borderRadius: "0.8rem",
          fontSize: "1rem",
        }}
        onClick={() => {
          onArticlesClick();
        }}
      >
        Article
      </ButtonBase>
    </div>
  );
};

export default NavigationBar;
