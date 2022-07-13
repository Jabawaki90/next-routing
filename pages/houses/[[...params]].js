import { useRouter } from "next/router";

const House = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params[0] < 3000) {
    return <h1>Sry property price is below 3000</h1>;
  } else if (params[1] > 10000) {
    return <h1>Sry property price is over budget</h1>;
  } else {
    <h1>
      Property is within price {params[0]} and {params[1]}
    </h1>;
  }

  return (
    <>
      <h1>House Homepage</h1>
    </>
  );
};

export default House;
