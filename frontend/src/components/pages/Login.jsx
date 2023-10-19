import { Link , Form , redirect, useActionData } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../FormRow";
import Logo from "../Logo";
import axios from "axios";
import { toast } from "react-toastify";



// login action for loging 
export const loginAction = async (data) => {
  const formData = await data.request.formData()
  const d = Object.fromEntries(formData);
 
  // setting up errors validation 
  const errors = {msg : ""}
  if (d.password.length < 8) {
    errors.msg ="password must be 8 chars"
    return errors
  }


  try {
   const resp = await axios.post("/api/v1/user/login", d);
   toast.success("user logged in successfully")
    console.log(resp?.data?.user);
    return redirect('/dashboard')
  }
  catch (error)
  {
    console.log(error);
     toast.error(error?.response?.data?.error);
    return error
  }
}


const Login = () => {
  const errors = useActionData()

 
  return (
    <Wrapper>
      <Form method="post" className="form"  >
        <Logo />

        <h4>Login</h4>
        {errors?.msg && <p style={{color:"red"}} > {errors?.msg}</p>}
        <FormRow type="email" name="email" lableText="Email" />
        <FormRow type="password" name="password" lableText="Password" />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <button type="button" className="btn btn-block">
          Explore The App
        </button>
        <p>
          Not a member yet ? <Link to="/register"> Register</Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
