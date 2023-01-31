import ButtonBase from "@mui/material/ButtonBase";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Login.module.css";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
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
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
