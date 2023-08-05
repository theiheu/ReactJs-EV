import React from "react";

const ToggleMenu = React.forwardRef((prop, ref) => {
  return (
    <div
      ref={ref}
      className={`menu fixed w-[400px] top-0 left-0 bottom-0 bg-slate-500 transition-all ${
        prop.show ? "" : "-translate-x-full"
      }`}
    ></div>
  );
});

export default ToggleMenu;
