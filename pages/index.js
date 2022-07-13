import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>{" "}
      <Link href="/product">
        <a>product</a>
      </Link>
    </>
  );
};

export default Home;
