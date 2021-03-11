import React from "react";
import { RegisterFormSubscription } from "../../molecules";
import "./registerFormContent.styles.scss";

const RegisterFormContent = ({ subscribe, initialState }) => {
  return (
    <section className="registerForm--container">
     <RegisterFormSubscription confirmSubscribe={subscribe} initialState={initialState} />
    </section>
  );
};

export default RegisterFormContent;
