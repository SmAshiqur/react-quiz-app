import classes from "../styles/Button.module.css";
export default function Button({ children, className }) {
  return (
    <div className={`${classes.button} ${classes.className}`} type="text">
      {children}
    </div>
  );
}
