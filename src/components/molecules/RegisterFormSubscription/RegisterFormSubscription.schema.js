import * as yup from "yup";

const RegisterFormSubscriptionSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  organization: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  works: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  social: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  gender: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  race: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  comments: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(300, "Máximo de 300 caracteres"),
});

export default RegisterFormSubscriptionSchema;
