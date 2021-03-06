import React from "react";
import { Formik } from "formik";
import { Input, Title } from "../../atoms";
import SubscriptionFormSchema from "./SubscriptionForm.schema";
import "./subscriptionForm.styles.scss";

const SubscriptionForm = ({ closeModal, confirmSubscribe }) => {
  const initialState = {
    name: "",
    email: "",
    organization: "",
    works: "",
    social: "",
    gender: "",
    race: "",
    comments: ""
  };

  const onSubmitMethod = async (values, actions) => {
    console.log({ values });

    await confirmSubscribe(values);
    closeModal();
  };

  return (
    <div className="form--container">
      <div className="btn--modal">
        <button onClick={closeModal}>FECHAR</button>
      </div>
      <div className="formTitle--container" >
        <Title title="Cadastre-se" />
      </div>
      <Formik
        initialValues={initialState}
        validationSchema={SubscriptionFormSchema}
        onSubmit={onSubmitMethod}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          ...props
        }) => (
          <form onSubmit={handleSubmit} className="form">
            <div className="input--container">
              <label htmlFor="name">Nome</label>
              <Input
                placeholder="Insira seu nome"
                handleChange={handleChange}
                {...props}
                name="name"
                value={values.name}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.name}
                touched={touched.name}
              />
            </div>
            <div className="input--container">
              <label htmlFor="email">Email</label>
              <Input
                placeholder="Insira seu email"
                handleChange={handleChange}
                {...props}
                name="email"
                value={values.email}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.email}
                touched={touched.email}
              />
            </div>
            <div className="input--container">
              <label htmlFor="organization">Coletivo</label>
              <Input
                placeholder="Insira seu coletivo"
                handleChange={handleChange}
                {...props}
                name="organization"
                value={values.organization}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.organization}
                touched={touched.organization}
              />
            </div>
            <div className="input--container">
              <label htmlFor="works">Trabalhos</label>
              <Input
                placeholder="Insira seus trabalhos"
                handleChange={handleChange}
                {...props}
                name="works"
                value={values.works}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.works}
                touched={touched.works}
              />
            </div>
            <div className="input--container">
              <label htmlFor="social">Redes Sociais</label>
              <Input
                placeholder="Insira sua rede social"
                handleChange={handleChange}
                {...props}
                name="social"
                value={values.social}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.social}
                touched={touched.social}
              />
            </div>
            <div className="input--container">
              <label htmlFor="gender">Gênero</label>
              <Input
                placeholder="Insira seu gênero"
                handleChange={handleChange}
                {...props}
                name="gender"
                value={values.gender}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.gender}
                touched={touched.gender}
              />
            </div>
            <div className="input--container">
              <label htmlFor="race">Raça</label>
              <Input
                placeholder="Insira sua raça"
                handleChange={handleChange}
                {...props}
                name="race"
                value={values.race}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.race}
                touched={touched.race}
              />
            </div>
            <div className="input--container">
              <label htmlFor="comments">Comentário</label>
              <Input
                placeholder="Insira um comentário"
                handleChange={handleChange}
                {...props}
                name="comments"
                value={values.comments}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.comments}
                touched={touched.comments}
              />
            </div>
            <div className="btn--modal--cta--full">
                <button type="submit" isLoading={isSubmitting}>
                CADASTRAR
                </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SubscriptionForm;
