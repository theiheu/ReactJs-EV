import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormV2 = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     password: "",
  //   },
  //   validationSchema: yup.object({
  //     firstName: yup.string().max(6, "Qúa 6 ký tự").required("Requiry"),
  //     password: yup.string().max(6, "Qúa 6 ký tự").required("Requiry"),
  //   }),
  //   onSubmit: (value) => {
  //     console.log("value :>> ", value);
  //   },
  // });

  // const handleOnSubmit = (e) => {
  //   console.log("formik :>> ", formik);
  //   e.preventDefault();
  // };

  return (
    <Formik
      initialValues={{
        firstName: "",
        password: "",
      }}
      validationSchema={yup.object({
        firstName: yup.string().max(6, "Qúa 6 ký tự").required("Requiry"),
        password: yup.string().max(6, "Qúa 6 ký tự").required("Requiry"),
      })}
      onSubmit={(value) => {
        {
          console.log("value :>> ", value);
        }
      }}
    >
      <Form action="" method="get" autoComplete="off">
        <Field
          name="firstName"
          type="text"
          placeholder="Please enter your full name."
          className="p-3 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        <div className={"text-red-500"}>
          <ErrorMessage name="firstName" />
        </div>
        <br />
        <Field
          name="password"
          type="text"
          placeholder="Password"
          className="p-3 mt-2 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        <div className={"text-red-500"}>
          <ErrorMessage name="password" />
        </div>
        <button
          type="submit"
          className="p-3 mt-3 border-2 border-slate-400 bg-slate-400 rounded-md"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default FormV2;
