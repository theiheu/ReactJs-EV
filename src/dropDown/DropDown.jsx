import { useEffect, useRef, useState } from "react";

const DropDown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const handleClickOutDropDown = (e) => {
      console.log("e.tartget :>> ", e.target);
      console.log("e.target :>> ", dropDownRef.current.contains(e.target));

      if (dropDownRef.current && !dropDownRef.current.contains(e.target))
        setShowDropDown(false);
    };

    document.addEventListener("click", handleClickOutDropDown);
  }, []);

  return (
    <div ref={dropDownRef}>
      <div
        className="w-[300px] p-3 rounded-md border-2 cursor-pointer relative"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        Selector &darr;
      </div>
      {showDropDown && (
        <div className="min-w-[300px] p-y-3 my-2 rounded-md border-2 cursor-pointer absolute">
          <div className="border-b-2">Javascript</div>
          <div className="border-b-2">Css</div>
          <div className="border-b-2">HTML</div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
