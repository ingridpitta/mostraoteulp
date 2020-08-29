import React from "react";
import { Formik } from "formik";
import { Checkbox } from "antd";
import { Input, Title } from "../../atoms";
import SubscriptionFormSchema from "./SubscriptionForm.schema";
import "./subscriptionForm.styles.scss";

const SubscriptionForm = ({ closeModal, confirmSubscribe }) => {
  const initialState = {
    name: "",
    email: "",
    city: "",
    state: "",
    organization: "",
    phone: "",
    race: "",
    gender: "",
    orientation: "",
    auth: false,
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
              <label htmlFor="city">Cidade</label>
              <Input
                placeholder="Insira sua cidade"
                handleChange={handleChange}
                {...props}
                name="city"
                value={values.city}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.city}
                touched={touched.city}
              />
            </div>
            <div className="input--container">
              <label htmlFor="state">Estado</label>
              <Input
                placeholder="Insira seu estado"
                handleChange={handleChange}
                {...props}
                name="state"
                value={values.state}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.state}
                touched={touched.state}
              />
            </div>
            <div className="input--container">
              <label htmlFor="organization">Coletivo / Organização</label>
              <Input
                placeholder="Insira seu coletivo ou organização"
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
              <label htmlFor="phone">Celular</label>
              <Input
                placeholder="Insira seu celular"
                handleChange={handleChange}
                {...props}
                name="phone"
                value={values.phone}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.phone}
                touched={touched.phone}
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
              <label htmlFor="orientation">Orientação</label>
              <Input
                placeholder="Insira sua orientação"
                handleChange={handleChange}
                {...props}
                name="orientation"
                value={values.orientation}
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.orientation}
                touched={touched.orientation}
              />
            </div>
            <div className="checkbox--container">
              <Checkbox
                onChange={handleChange}
                {...props}
                name="auth"
                handleBlur={handleBlur}
                isLoading={isSubmitting}
                error={errors.auth}
                touched={touched.auth}
              >
                Aceito receber notícias e atualizações
              </Checkbox>
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
