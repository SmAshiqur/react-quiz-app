import Checkbox from "../components/Checkbox.js";
import classes from "../styles/Answer.module.css";
export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="test answer" />
    </div>
  );
}
