import { useState } from "react";
import useHandleChange from "../hooks/useHandleChange";

const Form = () => {
  const { data, handleOnChange } = useHandleChange({
    fullName: "",
    password: "",
    hobby: "",
  });

  const [err, setErr] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (data.fullName == "") {
      setErr("Name không đươc để trống.");
    }
  };

  return (
    <div>
      <form action="" method="get" autoComplete="off" onSubmit={handleOnSubmit}>
        <input
          onChange={handleOnChange}
          name="fullName"
          type="text"
          placeholder="Please enter your full name."
          className="p-3 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        <span className="fullNameErr text-red-800">{err}</span>
        <br />
        <input
          onChange={handleOnChange}
          name="password"
          type="text"
          placeholder="Password"
          className="p-3 mt-2 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        <input
          onChange={handleOnChange}
          type="checkbox"
          name="hobby"
          id=""
        />{" "}
        <br />
        <button
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
