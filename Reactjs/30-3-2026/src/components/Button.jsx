import style from "./Button.module.css";

export const styles = {
  backgroundColor: "blue",
  fontSize: "20px",
  border: "2px solid green",
  width: "fit-content",
  color: "white",
  padding: "10px 20px",
};

const Button = () => {
  return <div style={styles}>Button</div>;
};

export default Button;
