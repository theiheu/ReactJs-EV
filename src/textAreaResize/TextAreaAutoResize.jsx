import { useEffect, useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    console.log(
      "🚀 ~ file: TextAreaAutoResize.jsx:15 ~ handleSubmit ~ textRef:",
      textRef.current
    );
    console.log("textRef :>> ", textRef.current.scrollHeight);
  };

  useEffect(() => {
    setTextareaHeight("auto");
    setTextareaHeight(`${textRef?.current?.scrollHeight}px`);
  }, [text]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <textarea
        className="w-full max-w-[400px] p-2 border-2 border-red-100 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 rounded-md h-[auto] resize-none"
        id="textarta"
        placeholder="Please enter your content,..."
        onChange={handleOnchange}
        value={text}
        ref={textRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: textareaHeight,
        }}
      ></textarea>
      <button type="button" className="button" onClick={handleSubmit}>
        Console
      </button>
    </div>
  );
};

export default TextAreaAutoResize;
