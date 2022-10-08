import { useRouter } from "next/router";
function index() {
  const router = useRouter();
  const { blogId } = router.query;
  return (
    <div>
      <h2>Page [BlogId] - Dynamic Route: {blogId} </h2>
    </div>
  );
}

export default index;
