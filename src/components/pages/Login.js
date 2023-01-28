import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
export default function Login() {
  return (
    <>
      <div className="column">
        <h1>Login to your account</h1>
        <Illustration />
        <Form className={`${classes.login} form`}></Form>

        <TextInput
          type="text"
          placeholder="Enter Email"
          icon="alternate_email"
        />

        <TextInput type="password" placeholder="Enter Password" icon="lock" />

        <Button>Submit Now</Button>

        <div className={classes.info}>
          Don't have an account? <a href="signup.html">Signup</a> instead.
        </div>
      </div>
    </>
  );
}
