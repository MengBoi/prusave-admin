import { ButtonBase } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Login.module.css";
const Login = () => {
  const router = useRouter();
  // useEffect(() => {
  //   if (router.pathname == "/login") {
  //     return;
  //   }
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/login");
  //     return;
  //   }
  // }, [router.events]);
  const onLoginClick = () => {
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.prusave}>
        <div className={styles.pru}>PRU</div>Save
      </div>
      <div className={styles.username}>Username</div>
      <div className={styles.textfieldContainer}>
        <TextField variant="outlined" onChange={(event) => {}} fullWidth />
      </div>
      <div className={styles.password}>Password</div>
      <div className={styles.textfieldContainer}>
        <TextField
          variant="outlined"
          onChange={(event) => {}}
          fullWidth
          password
        />
      </div>
      <ButtonBase
        sx={{
          width: "10rem",
          height: "3rem",
          backgroundColor: "#ED1B2E",
          marginTop: "2rem",
          fontSize: "1rem",
          color: "white",
          borderRadius: "0.5rem",
        }}
        onClick={onLoginClick}
      >
        Login
      </ButtonBase>
    </div>
  );
};

export default Login;
