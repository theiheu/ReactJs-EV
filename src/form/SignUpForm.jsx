import { ErrorMessage, Field, Formik } from "formik";
import { Form } from "formik";

function SignUpForm() {
  return (
    <Formik
      initialValues={{
        toggle: false,
        checked: [],
      }}
      onSubmit={async () => {}}
    >
      <Form className="w-[300px] mx-auto">
        {/* First Name */}
        <div className="text-left">
          <label className="font-bold">First name</label>
          <Field
            type={"text"}
            className={
              "w-full p-3 mt-1 mb-6 border-2 border-slate-200 rounded-md outline-none"
            }
            placeholder={"Enter your first name"}
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
        {/* Last Name */}
        <div className="text-left">
          <label className="font-bold">Last name</label>
          <Field
            type={"text"}
            className={
              "w-full p-3 mt-1 mb-6 border-2 border-slate-200 rounded-md outline-none"
            }
            placeholder={"Enter your last name"}
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
        {/* Email */}
        <div className="text-left">
          <label className="font-bold">Email address</label>
          <Field
            type={"email"}
            className={
              "w-full p-3 mt-1 mb-6 border-2 border-slate-200 rounded-md outline-none resize-none"
            }
            placeholder={"Enter your email name"}
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
        {/* Text Area */}
        <div className="text-left">
          <label className="font-bold">Introduce yourself</label>
          <Field
            className={
              "w-full h-[120px] p-3 mt-1 mb-6 border-2 border-slate-200 rounded-md outline-none resize-none"
            }
            placeholder={"Enter your introduce"}
            as={"textarea"}
          ></Field>
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
        {/* Selection */}
        <div className="text-left">
          <select
            className={
              "w-full p-3 mt-1 mb-6 border-2 border-slate-200 rounded-md"
            }
          >
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Node JS">Node JS</option>
          </select>
          <ErrorMessage name="firstName"></ErrorMessage>
        </div>
        {/* Checkbox */}
        <div className="text-left flex items-center">
          <Field
            type="checkbox"
            className="form-checkbox text-indigo-500 h-5 w-5"
          ></Field>
          <p className="inline-block ms-2">
            I accepts the terms and conditions
          </p>
          <ErrorMessage name="tems"></ErrorMessage>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-1 bg-blue-400 rounded-md"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
