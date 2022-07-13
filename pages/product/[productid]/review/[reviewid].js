import { useRouter } from "next/router";

const ReviewDetail = () => {
  const router = useRouter();
  const { productid, reviewid } = router.query;

  return (
    <h1>
      Review detail {reviewid} for product id {productid}{" "}
    </h1>
  );
};

export default ReviewDetail;
