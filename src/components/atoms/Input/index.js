import React from "react";
import { Input as ModalInput, Form } from "antd";
import InputWithMask from "react-input-mask";

const Input = ({
  name,
  label,
  mask,
  value,
  type,
  isLoading,
  handleChange,
  setFieldValue,
  getInputValue,
  handleBlur,
  placeholder,
  error,
  touched,
}) => {
  const hasMask = !!mask;
  const hasError = !!error;
  const hasTouched = touched;

  return (
    <Form.Item
      name={name}
      validateStatus={hasError && hasTouched && "error"}
      help={hasError && hasTouched && error}
    >
      {hasMask ? (
        <InputWithMask
          className="ant-input modal--input"
          mask={mask}
          maskChar={null}
          defaultValue={value}
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
        />
      ) : (
        <ModalInput
          defaultValue={value}
          className="modal--input"
          value={value}
          disabled={isLoading}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          type={type || "text"}
        />
      )}
    </Form.Item>
  );
};

export default Input;
