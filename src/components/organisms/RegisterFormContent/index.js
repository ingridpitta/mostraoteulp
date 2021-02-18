import React from "react";
import { RegisterFormSubscription } from "../../molecules";
import "./registerFormContent.styles.scss";

const RegisterFormContent = ({ subscribe }) => {
  return (
    <section className="registerForm--container">
     <RegisterFormSubscription confirmSubscribe={subscribe} />
    </section>
  );
};

export default RegisterFormContent;
