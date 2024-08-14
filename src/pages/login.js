import styles from "../styles/login.module.css";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

const LoginPage = () => {
  return (
    <div className={styles.loginSection}>
      <p>Log Into Facebook</p>
      <Input placeholder="Email or phone number" />
      <Input placeholder="password" />
      <Button text="login" />
      <p className={styles.text}>Forgot password?</p>
    </div>
  );
};

export default LoginPage;
