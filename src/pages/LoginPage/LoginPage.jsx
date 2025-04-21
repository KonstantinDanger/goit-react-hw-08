import { Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

import css from "../../components/ContactForm/ContactForm.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(login({ email: values.email, password: values.password }));
    actions.resetForm();
  };

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.field}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field name="email" type="input" id={emailFieldId}></Field>
          </div>

          <div className={css.field}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field name="password" type="input" id={passwordFieldId}></Field>
          </div>

          <button type="submit">Sign in</button>
        </Form>
      </Formik>
    </div>
  );
}
