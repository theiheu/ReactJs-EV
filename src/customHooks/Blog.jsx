
import useHoverLink from "../hooks/useHoverLink";
import useLinkNewTab from "../hooks/useLinkNewTab";

const Blog = () => {
  const blankRef = useLinkNewTab();
  const [hover, nodeRef] = useHoverLin
  console.log("🚀 ~ file: Blog.jsx:7 ~ Blog ~ hover:", hover);

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
          className={hover ? "text-red-500" : ""}
          ref={nodeRef}
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
