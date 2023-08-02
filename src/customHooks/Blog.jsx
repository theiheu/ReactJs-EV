import { useEffect, useRef } from "react";

const Blog = () => {
  const blankRef = useRef(null);

  useEffect(() => {
    // console.log("blankRef :>> ", blankRef.current.querySelectorAll("a"));
    const tagA = blankRef.current.querySelectorAll("a");
    tagA.forEach((item) => {
      // console.log("item :>> ", item);
      item.setAttribute("target", "_blank");
    });
  }, []);

  return (
    <div ref={blankRef}>
      <div>
        <h1>Blog-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          deleniti, placeat in autem, illum perspiciatis blanditiis officiis
          sint veniam unde quis nesciunt molestias quam numquam. Velit ex
          dolorum ipsum! Corporis, voluptate architecto!
        </p>
        <a
          className="underline"
          href="https://www.geeksforgeeks.org/collect-js-contains-method/"
        >
          Link
        </a>
      </div>
      <div>
        <h1>Blog-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          deleniti, placeat in autem, illum perspiciatis blanditiis officiis
          sint veniam unde quis nesciunt molestias quam numquam. Velit ex
          dolorum ipsum! Corporis, voluptate architecto!
        </p>
        <a
          className="underline"
          href="https://www.geeksforgeeks.org/collect-js-contains-method/"
        >
          Link
        </a>
      </div>
      <div>
        <h1>Blog-1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
          deleniti, placeat in autem, illum perspiciatis blanditiis officiis
          sint veniam unde quis nesciunt molestias quam numquam. Velit ex
          dolorum ipsum! Corporis, voluptate architecto!
        </p>
        <a
          className="underline"
          href="https://www.geeksforgeeks.org/collect-js-contains-method/"
        >
          Link
        </a>
      </div>
    </div>
  );
};

export default Blog;
