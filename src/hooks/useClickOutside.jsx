import { useState, useRef, useEffect } from "react";

function useClickOutside() {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(e) {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches("button")
      ) {
        console.log(
          "🚀 ~ file: useClickOutside.jsx:10 ~ handleClickOutSide ~ e.target:",
          nodeRef
        );
        setShow(false);
      }
    }

    document.addEventListener("click", handleClickOutSide);
  }, []);

  return { show, setShow, nodeRef };
}

export default useClickOutside;
