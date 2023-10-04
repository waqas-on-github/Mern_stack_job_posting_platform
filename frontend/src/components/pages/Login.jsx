import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../FormRow";
import Logo from "../Logo";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow type="email" name="Email" lableText="Email" />
        <FormRow type="password" name="Password" lableText="Password" />
        <button type="submit" className="btn btn-block">
             
          Submit   
        </button>
        <button type="button" className="btn btn-block">
             
          Explore The App   
        </button>
        <p>
          Not a member yet ? <Link to="/register"> Register</Link>   
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
