import "./App.css";
// import DropDown from "./dropDown/DropDown";
// import TextAreaAutoResize from "./TextAreaAutoResize";
// import TimeWatch from "./timeWatch/TimeWatch";
// import Blog from "./customHooks/Blog";
import ToggleMenu from "./toggleMenu/ToggleMenu";
import useClickOutside from "./hooks/useClickOutside";

function App() {
  const { show, setShow, nodeRef } = useClickOutside();
  console.log("🚀 ~ file: App.jsx:11 ~ App ~ show:", show);

  return (
    <>
      {/* <TimeWatch/> */}
      {/* <TextAreaAutoResize /> */}
      {/* <DropDown /> */}
      {/* <Blog /> */}

      <button
        className="p-2 border-2 border-red-500 rounded-md w-[200px]"
        type="button"
        onClick={() => setShow(!show)}
      >
        Menu
      </button>
      <ToggleMenu show={show} ref={nodeRef} />
    </>
  );
}

export default App;
