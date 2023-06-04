import { useState, useEffect } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  //global state
  const {isLoading,showAlert} = useAppContext()
  const toggleMember = () => {
    setValues({
      ...values,
      isMember: !values.isMember,
    });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.PreventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        {showAlert && <Alert />}
        <h3>{values.isMember? "Login" :"Register"}</h3>

        {!values.isMember && (
        
        <FormRow
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
        />
        )}

        

        {/*email input */}
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
        />

        {/*password input */}
        <FormRow
          name="password"
          type="text"
          handleChange={handleChange}
          value={values.password}
        />

        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember? "Not a member yet ?" : "Already a member ?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember? "Register" :"Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
