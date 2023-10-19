import { Link , Form  , redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/RegisterAndLoginPage";
import Logo from "../../components/Logo";
import FormRow from "../FormRow";
import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = async (data) => {
  
  const formData = await  data.request.formData()
   const d = Object.fromEntries(formData)
   console.log(d);
   try {
      await axios.post("/api/v1/user/new", d);
      toast.success("account registerd successfully")
       return redirect('/login')
      
   } catch (error) {
     console.log(error.response);
     toast.error(error?.response?.data?.error);
    return error
   }
}



const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text"  name="name" defaultValue="john" lableText="Name" />
        <FormRow type="text"  name="lastName" defaultValue="smilga" lableText="Last Name" />
        <FormRow type="text"  name="location" defaultValue="street x55" lableText="Location" />
        <FormRow type="email" name="email" defaultValue="john@gmail.com" lableText="Email" />
        <FormRow type="text"  name="password" defaultValue="123456" lableText="Password" />
        <FormRow type= "text" name='role' defaultValue="user" lableText="role"/>

        <button type="submit" className="btn btn-block">  submit </button>
        <p> Already a member ?<Link to="/login"> Login</Link> </p>
      </Form>
    </Wrapper>
  );
};
export default Register;
