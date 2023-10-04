import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import Logo from "../../components/Logo";
import FormRow from "../FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow
          type="text"
          name="name"
          defaultValue="john"
          lableText="Name"
        />
        <FormRow
          type="text"
          name="Last Name"
          defaultValue="smilga"
          lableText="Last Name"
        />
        <FormRow
          type="text"
          name="Location"
          defaultValue="street x55 "
          lableText="Location"
        />
        <FormRow
          type="email"
          name="Email"
          defaultValue="john@gmail.com"
          lableText="Email"
        />
        <FormRow
          type="text"
          name="Password"
          defaultValue="123456"
          lableText="Password"
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member ?<Link to="/login"> Login</Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
