import Link from "next/link";

const ProductList = ({ productid = 100 }) => {
  return (
    <>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>

      <h2>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/3">
          <a>Product 3</a>
        </Link>
      </h2>

      <h2>
        <Link href={`/product/${productid}`}>
          <a>Product {productid}</a>
        </Link>
      </h2>

      <Link href="/">
        <a>home</a>
      </Link>
    </>
  );
};

export default ProductList;
