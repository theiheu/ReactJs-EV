import { useState } from "react";

const useHandleChange = (initialValue) => {
  const [data, setData] = useState(initialValue);

  const handleOnChange = (e) => {
    const { type, value, checked, name } = e.target;
    setData((item) => ({
      ...item,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return {
    data,
    handleOnChange,
  };
};

export default useHandleChange;
