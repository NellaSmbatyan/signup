import React from "react";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function App() {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("").min(5),
    lastName: Yup.string().required().min(8),
    email: Yup.string().email().required(),
    password: Yup.number().min(8, "too s").required(),
  });

  return (
    <div className="form">
      <div>
        {" "}
        <h1 className="header">Sign Up</h1>
      </div>

      <div className="formBody">
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            password: "",
            color: "red",
          }}
          validationSchema={schema}
          onSubmit={(val) => console.log(val)}
        >
          {({ errors, touched }) => (
            <Form>
              <div>
                <label>
                  <b>FirstName: </b>
                </label>
                <Field name="firstName" />
                {errors.firstName && touched.firstName ? (
                  <div style={{ color: "blueviolet" }}>{errors.firstName}</div>
                ) : null}
                <br />
                <label>
                  <b>LastName: </b>
                </label>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div style={{ color: "blueviolet" }}>{errors.lastName}</div>
                ) : null}
                <br />
                <label>
                  <b>Email: </b>
                </label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div style={{ color: "blueviolet" }}>{errors.email}</div>
                ) : null}
                <br />
                <label>
                  <b>Country: </b>
                </label>
                <Field name="country" as="select">
                  <option value="none"></option>
                  <option value="Armenia"> Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="France"> France</option>
                  {errors.country && touched.country ? (
                    <div style={{ color: "blueviolet" }}>{errors.country}</div>
                  ) : null}
                </Field>
                <br />
                <label>
                  <b>Password: </b>
                </label>
                <Field name="password" type="password" />
                {errors.password && touched.password ? (
                  <div style={{ color: "blueviolet" }}>{errors.password}</div>
                ) : null}
                <br />
                <br />
                <hr></hr>
                <button type="submit" className="button">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default App;
