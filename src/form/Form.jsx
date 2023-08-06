import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    fullName: "",
    password: "",
  });

  console.log("🚀 ~ file: Form.jsx:8 ~ Form ~ data:", data);

  const handleOnChange = (e) => {
    setData((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form action="" method="get" autoComplete="false">
        <input
          onChange={handleOnChange}
          name="fullName"
          type="text"
          placeholder="Please enter your full name."
          className="p-3 border-2 border-slate-400 shadow-md rounded-md outline-none"
        />{" "}
        <br />
        <input
          onChange={handleOnChange}
          name="password"
          type="text"
          placeholder="Password"
          className="p-3 mt-2 border-2 border-slate-400 shadow-md rounded-md outline-none"
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
