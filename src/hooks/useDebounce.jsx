import { useEffect, useState } from "react";

// export default function useDebounce(initializeValue, delay) {
//   const [debounce, setDebounce] = useState(initializeValue);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebounce(initializeValue);
//     }, delay);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [delay, initializeValue]);

//   return debounce;
// }

export default function useDebounce(initializeValue, delay) {
  const [debounce, setDebounce] = useState(initializeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(initializeValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, initializeValue]);

  return debounce;
}
