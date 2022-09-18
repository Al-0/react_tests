import { useRouter } from "next/router";

const SomethingImportant = () => {
  const router = useRouter();
  const newsId = router.query.newsId;

  return (
    <>
      <h1>SomethingImportant</h1>
      <h2>{newsId}</h2>
    </>
  );
};

export default SomethingImportant;
