import { useEffect, useRef } from "react";

const useLinkNewTab = () => {
  const blankRef = useRef(null);

  useEffect(() => {
    // console.log("blankRef :>> ", blankRef.current.querySelectorAll("a"));
    const tagA = blankRef.current.querySelectorAll("a");
    blankRef.length > 0 &&
      tagA.forEach((item) => {
        // console.log("item :>> ", item);
        item.setAttribute("target", "_blank");
      });
  }, []);

  return blankRef;
};

export default useLinkNewTab;
