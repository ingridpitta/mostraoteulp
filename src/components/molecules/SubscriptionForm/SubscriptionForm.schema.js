import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SubscriptionFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo obrigatório"),
  city: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  state: yup
    .string()
    .required("Campo obrigatório")
    .min(2, "Mínimo de 2 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  organization: yup
    .string()
    .required("Campo obrigatório")
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Insira um número de celular válido")
    .required("Campo obrigatório"),
  race: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  gender: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  orientation: yup
    .string()
    .min(3, "Mínimo de 3 caracteres")
    .max(100, "Máximo de 100 caracteres"),
  auth: yup.bool().oneOf([true], "Você deve aceitar os termos e condições").required("Campo obrigatório"),
});

export default SubscriptionFormSchema;
