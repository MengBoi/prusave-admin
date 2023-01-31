import ButtonBase from "@mui/material/ButtonBase";
import { useRouter } from "next/router";
import styles from "./DesktopHeader.module.css";
const DesktopHeader = () => {
  const router = useRouter();
  const onLogoutClick = () => {
    router.push("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.welcomeContainer}>
        Welcome, <div className={styles.name}>Earmeng Aing</div>
      </div>
      <ButtonBase onClick={onLogoutClick}>
        <div className={styles.logoutBtn}>Logout</div>
      </ButtonBase>
    </div>
  );
};

export default DesktopHeader;
