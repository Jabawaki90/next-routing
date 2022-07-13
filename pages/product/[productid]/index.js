import { useRouter } from "next/router";

const ProductDetail = () => {
  const router = useRouter();
  const routerName = router.query.productid;
  return <h1>Product Detail {routerName}</h1>;
};

export default ProductDetail;
