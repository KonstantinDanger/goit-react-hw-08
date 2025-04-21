import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import { register } from "../../redux/auth/operations";

import css from "../../components/ContactForm/ContactForm.module.css";

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <div>
      <h1>Register</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field name="name" type="input" id={nameFieldId}></Field>
          </div>

          <div className={css.field}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field name="email" type="email" id={emailFieldId}></Field>
          </div>

          <div className={css.field}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field name="password" type="password" id={passwordFieldId}></Field>
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
