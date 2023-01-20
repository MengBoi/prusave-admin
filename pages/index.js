import DesktopHeader from "../components/ReusableComponent/DesktopHeader/DesktopHeader";
import NavigationBar from "../components/ReusableComponent/NavigationBar/NavigationBar";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <DesktopHeader />
      <div className={styles.bodyContainer}>
        <NavigationBar />
        <div className={styles.sectionBody}></div>
      </div>
    </div>
  );
};

export default Home;
