// import { useState } from "react";
// import useHandleChange from "../hooks/useHandleChange";
import { useFormik } from "formik";
import * as yup from "yup";

const Form = () => {
  // const validate = (value) => {
  //   const errors = {};

  //   if (!value.firstName) {
  //     errors.firstName = "Require";
  //   } else if (value.firstName.length > 6) {
  //     errors.firstName = "Không được quá 6 chữ cái.";
  //   }

  //   if (!value.password) {
  //     errors.password = "Require";
  //   } else if (value.password.length > 6) {
  //     errors.password = "Không được quá 6 chữ cái.";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().max(6, "Qúa 6 ký tự").required("Requiry"),
      password: yup.string().max(6, "Qúa 6 ký tự").required("Requiry"),
    }),
    onSubmit: (value) => {
      console.log("value :>> ", value);
    },
    onChange: (value) => {
      console.log("value :>> ", value);
    },
  });

  // const { data, handleOnChange } = useHandleChange({
  //   fullName: "",
  //   password: "",
  //   hobby: "",
  // });

  // const [err, setErr] = useState("");

  const handleOnSubmit = (e) => {
    console.log("formik :>> ", formik);
    e.preventDefault();
    // if (data.fullName == "") {
    //   setErr("Name không đươc để trống.");
    // }
  };

  return (
    <div>
      <form
        action=""
        method="get"
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <input
          {...formik.getFieldProps("firstName")}
          type="text"
          placeholder="Please enter your full name."
          className="p-3 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className={"text-red-500"}>{formik.errors.firstName}</div>
        ) : null}
        {/* <span className="fullNameErr text-red-800">{err}</span> */}
        <br />
        <input
          {...formik.getFieldProps("password")}
          type="text"
          placeholder="Password"
          className="p-3 mt-2 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        {formik.touched.password && formik.errors.password ? (
          <div className={"text-red-500"}>{formik.errors.password}</div>
        ) : null}
        <br />
        <input
          // onChange={formik.handleChange}
          type="checkbox"
          name="hobby"
          id=""
        />{" "}
        <br />
        <button
          onClick={handleOnSubmit}
          onSubmit={formik.handleSubmit}
          type="submit"
          className="p-3 mt-3 border-2 border-slate-400 bg-slate-400 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
