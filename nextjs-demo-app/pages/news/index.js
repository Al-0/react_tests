import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="news/this-is-the-first-link">First link</Link>
        </li>
        <li>
          <Link href="news/and-this-the-second-link">Second link</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
